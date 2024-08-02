# Monitoring Indicator Details

## System Resource Metrics

**CPU**: Monitors the CPU usage to identify if the system is overloaded.

![image-20240621153303718](../../images/whaleal-platform/06-monitor/cpu.png)

**Memory Swap**: Tracks swap space usage. Excessive swapping can degrade performance.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/mem-swap.png)

**System Memory**: Observes overall memory usage to ensure there’s enough available for MongoDB operations.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/mem.png)

**System Network**: Monitors network throughput and latency to identify potential network bottlenecks.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/system-net-work.jpg)

**Disk IOPS**: Measures input/output operations per second on the disk, indicating how quickly data is read from or written to the disk.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/disk-io.png)

**DiskInfo**: Provides detailed information about disk usage and health.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/disk-info.png)

## MongoDB-specific Metrics

**Opcounters**: Tracks the number of operations (insert, query, update, delete, etc.) performed.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/opcounters.png)

**Connections**: Monitors the number of active client connections to ensure the system can handle the load.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/connections.png)

**Page Faults**: Measures the rate of page faults, indicating how often MongoDB needs to read data from disk into memory.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/page-faults.png)

**Memory**: Tracks MongoDB’s internal memory usage, including how much memory is used by different components.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/memory.png)

**Network**: Monitors MongoDB network traffic to ensure data is being transmitted efficiently.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/network.png)

**Asserts**: Tracks internal database assertions, which can indicate potential issues or bugs.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/asserts.png)

## Cache Metrics

**Cache Flow**: Measures the flow of data into and out of the cache, indicating cache efficiency.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/cache-flow.png)

**Cache Usage**: Monitors how effectively the cache is being utilized.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/cache-ssage.png)

## Performance Metrics

**Latency**: Measures the response time for queries, helping to identify performance bottlenecks.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/latency.png)

**Tickets**: Tracks the availability of tickets for read and write operations, indicating resource contention.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/tickets.png)

**Target Query**: Monitors the performance of specific targeted queries.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/target-query.png)

**ScanAndOrder**: Tracks operations where MongoDB must scan documents and order them in memory, which can be resource-intensive.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/scan-order.png)

**CollectionSCAN**: Measures the frequency of collection scans, which are less efficient than indexed queries.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/collection-scan.png)

## Document and Data Metrics

**Document Info**: Provides details about the number and size of documents.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/document-Info.png)

**Deleted Document**: Tracks the rate at which documents are deleted.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/deleted-document.png)

**Oplog Window**: Monitors the size of the oplog window, crucial for replication lag and recovery.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/oplog-window.png)

**LogicalSize**: Measures the logical size of the database, providing insight into data growth.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/logical-size.png)

**OpenCursor**: Tracks the number of open cursors, indicating active database operations.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/open-cursor.png)

**Logical DataSize**: Measures the logical size of data stored in MongoDB.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/logical-data-size.png)

**IndexSize**: Tracks the size of indexes, impacting query performance.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/index-size.png)

**OplogSize**: Monitors the size of the oplog, essential for replication health.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/oplog-size.png)

## Lock and Transaction Metrics

**LockCondition**: Tracks lock contention within MongoDB, which can affect performance.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/lock-condition.png)

**DatabaseLock**: Measures the time the database is locked for various operations.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/database-lock.png)

**CollectionLock**: Monitors lock contention at the collection level.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/collection-lock.png)

**Transaction Condition**: Tracks transaction performance and conflicts.

![image-20240621153642506](../../images/whaleal-platform/06-monitor/transaction-condition.png)
