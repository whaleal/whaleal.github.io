# Backup

This page contains answers to frequently asked questions about Backup.



#### 1. When backing up, the DDT host randomly selects which node to back up from. Is it possible for him to choose the hidden node? If he selects the slave node, will the cpu be very high?

DDT is a server used to perform backup tasks. It is completed by executing the JAVA backup process. Try not to place this on the server where MongoDB is located. Try to add an extra server to do backup. The backup operation does not consume much CPU on the source side, which is equivalent to performing a query operation. There will be a little stress during the first full backup.




#### 2. There is a problem with backup configuration S3

If the bucket name is filled in incorrectly, create a backup policy and refresh the page according to the new configuration. After this key is triggered once, the backend will re-encrypt the key, so there is a problem with the connection, so you need to re-enter key accesskey.



#### 3. Backup issu，In configuration:

1. Full volume and real-time
2. Full volume and increment
   Do these two mean the same?
   I want to synchronize all the data now. After the synchronization of all the data is completed, I need to continue to synchronize incremental data. Which configuration should I use?
   Full and real-time: full oplog (full start time to positive infinite time)
   Full and incremental: full oplog (full start time to full end time)



#### 4. What configuration is recommended for DDT hosts?

DDT recommends high CPU, 8C+ 16GB+



#### 5. What is the DDT backup logic like?

This is how DDT works in real time: https://docs.whaleal.com/guide/en/documentDataTransfer/Introduction/Architecture.html.



#### 6. Will the process above DDT be retained all the time, so that if there are more instances, there will be many such process on DDT machines?

There are two processes during a DDT backup. After the full backup is completed, the full DDT process exits, leaving a DDT process that synchronizes the oplog synchronized in real time.



#### 7. If there is a DDT host to configure backup tasks, is there a place to configure the time to avoid time conflicts.

Currently, custom times are not supported, but if you want to achieve the effect of avoiding time conflicts, different MongoDB clusters can also be created at different times when the backup policy is first configured.



#### 8. There is a problem with DDT backup  "Cannot allocate memory (errno=12)"

All DDT processes died, DDT died due to insufficient memory.




#### 9. DDT has an error. I configured ddt yesterday, ran for a while, then stopped, ran again today, and started in the following order: start-DDT.sh start-moitor.sh

If you see the log error report, it should be started repeatedly [tool for monitoring DDT synchronization]
DDT has two processes:

1. DDT synchronization MongoDB data tool
2. tools for monitoring DDT synchronization (this tool uses web and spring JAR)

If you execute start-all.sh, you will start both processes.
If you execute start-DDT.sh, only start the DDT synchronization data tool



#### 10. Data check. DDT synchronization data destination is missing.

If the table is a dynamic table (operating in real time)
There will be data inconsistencies, and dynamic tables can be checked many times to determine data consistency.
Db.ns.count is a fuzzy calculation, sometimes because of cache and other problems, the amount of data may not be correct.
Can be used on the target side: use the exact count to view the number of library table documents db.ns.countDocuments ({})



#### 11. Deploy another cluster and copy a ddt directory. You can run both of them. For example, project a is synchronized. Now project b needs to be migrated, and start two ddt at the same time.

DDT startup script needs to be modified. It is not supported by default.
The second DDT must be in a new directory
Then you can start run: 

```
nohup java-Xmx$max_heap_size-jar ../execute-1.0-SNAPSHOT.jar ../config/DDT.properties > /dev/null 2 > &1 & 
```



#### 12. Help me confirm that DDT is synchronizing data in real time. If we want to switch the connection to a new cluster, can we replace it directly, or do we have to disconnect DDT synchronization first, stop business, stop DDT, and finally replace the connection URL?

Stop the business first, then stop the DDT service, and then replace the connection URL. This is the recommended action step and needs to be operated within the shutdown maintenance window.



#### 13. If both the source and target sides of DDT synchronization have write operations, will DDT synchronization have an impact?

In this way, the data on the source side and the destination side will be inconsistent.