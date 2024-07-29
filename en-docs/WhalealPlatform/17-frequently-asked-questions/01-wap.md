# WAP

This page contains answers to frequently asked questions about WAP.

#### 1. Use the latest version of prometheus to collect Datagram errors. Whether it is related to the version relationship ts=2024-04-08T03:51:34.306Z caller=refresh.go:90 level=error component= "" discovery manager scrape "" discovery=http config=wap-monitor msg= "" Unable to refresh target groups "" err= "" invalid character 'W'looking for beginning of value ""

The prometheus configuration file tries this approach.

```
job_name: wap-monitor
scrape_interval: 10s
metrics_path: '/api/server/mongo/getMongoDBForPrometheus'
params:
  id: ["public"]
  type: ["project"]
basic_auth:
  username: 'admin'
  password: xxxxx
static_configs:

  - targets: ['172.xx.xx.xx:8080']
    labels:
      instance: wap
```



#### 2. The whaleal-mongodb-log file is so large that the disk is full and the mongo service cannot be started. Won't he clean it up himself? Do you have to clean it manually every time?

What is saved in whaleal-mongodb-log can be cleared from the logs of mongoDB nodes. By default, save for one month. Configure the saving time of mongodb logs in the setting page.



#### 3. Prometheus configures multiple project gathering to report an error.

Only one project can be configured at a time.



#### 4. After using the cluster rename, only the cluster display has changed, and the name of the replica set of the cluster will not change, will it?

The cluster name will not change.



#### 5. When converting from a replica architecture to a fragmented architecture, all of them are on the same group of machines (in the form of multiple instances). When converting to a fragmented architecture, will it be different when allocating memory? If not, will it simply oom? When allocating memory, he won't know whether it is multiple instances or 50% of physical memory?

When the amount of data is large, it will oom. If not set by default in platform, MongoDB defaults to 50% of the physical memory.

After the backup strategy is created, when is its trigger time? this can be seen there.

After the first creation, you can go to the source MongoDB event group to check the progress.



#### 6. Use WAP marketplace to start platform services through mirroring, but the service process did not start successfully? Do I still need to deploy it manually?

The EC2 server cannot connect to the external network, causing the script not to run



#### 7. How did the machines in server be added to project? no machines can be added to the project now. After clicking on the project on the platform, they are all empty.

All the newly added hosts are on public.

1. Configuration file "parameters.properties" in / opt/agent after the agent instance is started
   Write foreign_url= parameters in the format foreign_url= http://54.175.147.38:8080
2. Execute the command after configuration to check whether the process starts "systemctl status whaleal_agent"
   Wait about 30 seconds after startup
3. All launched agent hosts will be in public project by default.
   You can create a new Project, remove the hosts from the public and put them in the new public.
4. You can create a MongoDB cluster based on Project



#### 8. Do you want to write all the sourceDsUrl addresses configured by DDT, or just write the main node?

Both are fine. Master node, slave node, and cluster URI are all available, or only slave nodes can be configured to relieve the pressure on the master node




#### 9. After mongoDB was separated from the platform, the mongo process on the host also stopped. Do you need other pre-work to deploy MongoDB again with this machine?

Start the MongoDB service, and the data directory is different from the previous data directory.



#### 10. Can I reset my password?

The password can be reset, but only users with admin privileges can perform this operation



#### 11. Can the host under a project be moved to another project?

Yes, you need to move it out of the old project before moving it to another project.



#### 12. What types of deployment can I create in WAP?

Using WAP, you can configure all MongoDB deployment types: sharded clusters, replica sets, and standalones.



#### 13. After configuring the alert rules, how can I receive the alert information?

When the alert condition is configured and the alert is triggered, the alert information can be notified via email, DingTalk, SMS, etc.



#### 14. What MongoDB versions does WAP support?

WAP supports 98% of MongoDB on the market, and supports versions 5.0 to 7.0.



#### 15. Does WAP support changes to the MongoDB cluster architecture?

Currently supported mongodb architecture changes include single-machine conversion to replica set, replica set conversion to sharding



#### 16. What MongoDB authentication methods are supported?

Currently supported authentication methods include account and password, account and password and CA certificate



#### 17. Is the node shut down when it leaves the management?

When a cluster is removed from management, it is not managed or displayed on the platform, but is not shut down on the host. Deleting a node means shutting down the node.



#### 18. How to receive alerts after configuring them?

When the alert is triggered after the alert conditions are configured, the alert information will be notified via email, DingTalk, SMS, etc.



#### 19. Does mongo support synchronization?

Support, you can use the backup and restore function to synchronize data



#### 20. What is the principle of horizontal expansion of WAP platform?

Horizontal expansion is to build multiple wap services. The agents managed by the same appdb can be hashed and assigned to different wap services to reduce the pressure on a single wap. When a wap service fails, other wap services are not affected. The affected agents will be re-hashed and assigned to healthy wap services.



#### 21. How long will the oplog be stored?

Depends on the number of recovery days configured by the user, with a maximum retention period of half a year and a minimum retention period of one day



#### 22. Can the Home page be searched and displayed based on the cluster name?

The home page does not allow you to select a cluster for display. You can only view monitoring information for a specific cluster on the MongoDB page.
