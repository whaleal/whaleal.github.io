# EC2andK8S

Problems that occur when adding ec2 or k8s. The following tasks are used to check for common and easy-to-fix problems:

## Check the agent log

If you encounter problems when adding ec2 or k8s hosts, please check the Agent output log for errors.

The log file is stored in the server "/logs/whaleal_agent-collection_log" file



## Check whether the agent is started normally

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



