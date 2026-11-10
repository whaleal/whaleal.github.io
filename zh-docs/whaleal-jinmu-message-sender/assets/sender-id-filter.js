(() => {
  const pageSize = 10;

  function normalize(value) {
    return value.normalize("NFKC").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function textElement(tag, value, className) {
    const element = document.createElement(tag);
    element.textContent = value;
    if (className) element.className = className;
    return element;
  }

  function detailRow(note, id) {
    const row = document.createElement("tr");
    row.className = "sender-id-query__details";
    row.id = id;
    row.hidden = true;

    const cell = document.createElement("td");
    cell.colSpan = 4;
    const details = document.createElement("dl");
    const description = document.createElement("dd");
    description.append(...Array.from(note.childNodes, node => node.cloneNode(true)));
    details.append(textElement("dt", "申请资料"), description);
    cell.append(details);
    row.append(cell);
    return row;
  }

  function resultRows(record, index) {
    const row = document.createElement("tr");
    const country = textElement("th", record.cells[1].textContent.trim());
    country.scope = "row";
    country.append(textElement("small", record.cells[0].textContent.trim(), "sender-id-query__secondary"));
    const requirement = textElement("td", record.cells[2].textContent.trim());
    const action = document.createElement("td");
    row.append(country, requirement, action, record.cells[4].cloneNode(true));

    const note = record.cells[3];
    if (!note.textContent.trim()) {
      action.textContent = "—";
      return [row];
    }

    const details = detailRow(note, "sender-id-details-" + index);
    const toggle = textElement("button", "查看资料", "sender-id-query__button");
    toggle.type = "button";
    toggle.setAttribute("aria-controls", details.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
      details.hidden = !details.hidden;
      toggle.setAttribute("aria-expanded", String(!details.hidden));
      toggle.textContent = details.hidden ? "查看资料" : "收起资料";
    });
    action.append(toggle);
    return [row, details];
  }

  function initialize() {
    const query = document.getElementById("sender-id-query");
    const source = document.getElementById("sender-id-source");
    if (!query || !source || query.dataset.ready) return;

    const records = Array.from(source.querySelectorAll("tbody tr"), row => ({
      cells: row.cells,
      names: [row.cells[0].textContent, row.cells[1].textContent].map(normalize),
      aliases: (row.dataset.aliases || "").split("|").map(normalize).filter(Boolean)
    }));
    if (!records.length) return;

    const search = query.querySelector("input");
    const table = query.querySelector("table");
    const results = query.querySelector("tbody");
    const status = query.querySelector("[role=status]");
    const pager = query.querySelector(".sender-id-query__pager");
    const previous = pager.querySelector("[data-previous]");
    const next = pager.querySelector("[data-next]");
    let page = 0;

    function render() {
      const term = normalize(search.value);
      const aliases = records.filter(record => record.aliases.includes(term));
      const matches = aliases.length ? aliases : records.filter(record =>
        [...record.names, ...record.aliases].some(name => name.includes(term))
      );
      const start = page * pageSize;
      const visible = matches.slice(start, start + pageSize);
      results.replaceChildren(...visible.flatMap((record, index) => resultRows(record, start + index)));
      table.hidden = matches.length === 0;
      pager.hidden = matches.length <= pageSize;
      previous.disabled = page === 0;
      next.disabled = start + pageSize >= matches.length;
      status.textContent = matches.length
        ? "显示第 " + (start + 1) + "–" + (start + visible.length) + " 条，共 " + matches.length + " 条"
        : "没有找到匹配的国家或地区。请试试其他名称。";
    }

    search.addEventListener("input", () => {
      page = 0;
      render();
    });
    previous.addEventListener("click", () => {
      page -= 1;
      render();
    });
    next.addEventListener("click", () => {
      page += 1;
      render();
    });

    render();
    query.dataset.ready = "true";
    source.hidden = true;
    query.hidden = false;
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initialize);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
