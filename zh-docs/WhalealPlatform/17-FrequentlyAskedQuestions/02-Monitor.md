# Monitor

This page contains answers to frequently asked questions about Monitor.



#### 1. Monitoring indicator = 'cpuInfo_id' this corresponds to: user cpu?

No, Id stands for cpu idle rate.



#### 2. More than 60% in 60 seconds, will the alert be triggered 10 times, but this value is not more than 40% at present, but it has been reported all the time.

Within 60s, if the cpu utilization rate is greater than 60% and occurs ten times, the alert will be triggered. Once the alert message is sent every 10 minutes, the alert message will be sent with a granularity of 1 minute. In this case, the average cpu utilization rate within one minute is 40%. Click real-time to see the cpu information at the seconds level.



#### 3. At present, after the monitoring is turned on, is the frequency of monitoring once per second? can you define the time frequency by yourself?

You can adjust it yourself and monitor the granularity in setting.



#### 4. The monitoring information cannot be viewed. The mongo log has just been cut by the hour. Does this matter?

The MongoDB log has nothing to do with this. This general situation is caused by the network. Delete all the host alert policies configured on this host and see if there is any monitoring data.




#### 5. Is the monitoring frequency once per second? Can I define the time frequency myself?

You can adjust it yourself, in the **settings**, monitor the granularity.

