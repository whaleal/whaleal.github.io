# MongoDBMonitoring

## Monitoring issues

### Check whether the agent is started normally

Make sure the agent process is running

Run the following command to view the agent status:

```
> systemctl status whaleal_agent

● whaleal_agent.service - Start Whaleal Platform Agent Service
   Loaded: loaded (/etc/systemd/system/whaleal_agent.service; enabled; vendor preset: disabled)
   Active: active (running) since 一 2024-07-01 05:46:14 UTC; 1h 12min ago
 Main PID: 7879 (java)
   CGroup: /system.slice/whaleal_agent.service
           ├─ 7879 java -jar /opt/agent/agent-collection-1.0.0.jar --foreign.url=http://xx.xx.xx.xx:8080 --agentId=system --podType=
```

### Connection Issues

Verify that MongoDB is running and accessible.

Use the telnet command to check whether the necessary port 9619 is open.

Make sure the necessary ports are open.



### system resource

Ensure that the system running MongoDB and Agent has sufficient resources.

Monitor system resource usage (CPU, memory, disk I/O) to see if it has reached full capacity



### Check the agent log

please check the Agent output log for errors.
The log file is stored in the server "/logs/whaleal_agent-collection_log" file