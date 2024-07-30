# BackupandRestore

## Backup 

### Unable to start backup

Check that the s3 link is configured correctly and has the appropriate permissions

View WAP event group log error information

Check the MongoDB log (mongod.log) for any errors related to the backup process.

### Storage issues

If the backup file is too large, check whether there is free storage space.

### Backup performance

A slow backup process can be caused by disk I/O problems or high server load. Check server performance indicators during the backup process.



## Restore

### Version compatibility

Make sure that the target MongoDB server to be restored and the backup server have the same version. Backup files between different versions may be incompatible, resulting in recovery failure or incomplete data.

### Storage issues

If the backup file is too large, check whether there is free storage space.