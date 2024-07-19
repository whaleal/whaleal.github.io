# Start and Stop Whaleal Application

Whaleal Application is split into separate services to run, and all services are independent of each other.



### Start Whaleal

```powershell
cd /opt/WAP/
sh start.sh
```



### Stop Whaleal

```powershell
cd /opt/WAP/
sh stop.sh
```



### Restart Whaleal

When the server is down and the service needs to be restarted, perform:

```powershell
sh /opt/WAP/stop.sh
sh /opt/WAP/start.sh
```

