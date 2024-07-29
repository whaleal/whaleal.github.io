# Whaleal Changelog



### Whaleal 3.0.0

* Add backup function to support sharding cluster backup
* Support online upgrades
* Support host quotas
* Add data query functions
* Optimization of mongodb log collection
* Optimize alarm module
* Add multiple alarm channels



### Whaleal 2.0.0

* Remove redundant files, and optimize agent execution.
* Clustering: Standardize cluster display and creation, check whether ports are occupied before creation, add creation index function, add cluster operation lock events, add project concepts, and divide host cluster members. Add read-write preferences, add explanation and aggregation.
* Monitoring: Supplementary monitoring indicators, quantify and optimize the display on the front page, and increase the comparison of various indicators.
* Log: Event operations exit abnormally, add event status and waiting information, add operation event group logs, add alarm information to archive
* Diagnosis: Add a new diagnosis function to diagnose a cluster or a node, and the diagnosis content is displayed in batches by date. Inspection can be carried out for a certain batch and the inspection results can be compared with constant values. It also supports downloading diagnostic logs and executing inspection functions regularly.
* Settings: A new setting module has been added, including MongoDB compressed package management, email settings that can accept alarm information from the host or cluster, and collection granularity configuration that can set the log retention time, the host and mongo collect granularity, and the interval between regular inspections.
* Account: Add administrator role rights management, which can increase or decrease user rights. User rights determine whether certain content of the user is visible and operable. Administrators can delete the user or directly reset the user password.
* Notification: Move the notification to the sidebar to filter and observe the message information.



### Whaleal 1.0.0

* Support account/email/mobile number login.
* The password can be changed using the Captcha.
* Display host and MongoDB statistics.
* Host list Host statistics Visual display of host status.
* Add a host and manage a new host according to the operating instructions.
* Check the host situation: basic information, monitoring, logs, commands, alarms.
* MONGO list MONGO cluster information View the MONGODB cluster status: node information, events, cluster logs, and operations.
* MONGO cluster operation new creation, management, upgrading, master-slave switching, single instance conversion to replication set, turning on/off authentication, monitoring information, node log
* Reset account information and password.