# Operations

## Backup Records

### BackUp

Displays a list of all snapshots, including snapshot files, creation time, expiration time, backup progress and other information of all nodes in the cluster. You can also view the running log of the entire backup cycle through Event Log.

![02-BackUp](../../../images/whaleal-platform-Images/07-backup-restore/01-backup/02-BackUp.png)

| Parameters           | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Sub Name             | Task Name.                                                   |
| **BackUp File Name** | The name and S3 download address of the cluster backup data file. |
| **DDT Task Name**    | DDT backup task log details.                                 |
| Elapsed              | Time to generate backup snapshots.                           |
| Items                | Total number of documents backed up by snapshots.            |
| Progress             | Progress percentage.                                         |
| Create Time          | Snapshot file creation time.                                 |
| Transfered           | Backup file size.                                            |



### Restore

A list of backup data recovery tasks displays all backup and recovery operation records, and contains detailed information about specific tasks, including task execution time, task execution log, etc.

![02-Restore](../../../images/whaleal-platform-Images/07-backup-restore/01-backup/03-Restore.png)

| Parameters       | Description                                        |
| ---------------- | -------------------------------------------------- |
| Sub Name         | Task Name.                                         |
| BackUp File Name | None                                               |
| DDT Task Name    | DDT restore task log details.                      |
| Elapsed          | Time to generate restore snapshots.                |
| Items            | Total number of documents restore up by snapshots. |
| Progress         | progress percentage.                               |
| Create Time      | Snapshot file creation time.                       |
| Transfered       | None                                               |






### update

Update task status. Get the latest backup and restore tasks and task status.



## Take a Snapshot

Restart the new snapshot task and generate a new snapshot. Specific details can be viewed in Backup Records.



## Stop

Stop backup tasks, but keep the status quo for previously completed and incomplete backup tasks and will not be deleted.



## Delete

Delete all backup data for this backup task, including the 47019 and 57019 MongoDB services used for backup. However, backup data that has been backed up and uploaded to S3 will not be deleted.



## Rebuild

Used to reset and initialize specific backup policies to ensure they are in a reliable state when restarting the backup process or fixing problems. Prepare the policy for the process of resuming backup tasks by stopping operations, cleaning up relevant data and processes, and reinitializing the backup policy.

This feature is critical to managing the stability and reliability of backup policies, especially when it is necessary to restore the backup process or fix configuration issues, to effectively rebuild policies and prepare for new backup operations.



## Edit

Modify the backup policy.
