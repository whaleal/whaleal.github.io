# Mirrored MongoDB data through MongoDB tools

When MongoDB needed data recovery due to some problems, there was a problem with the WAP platform and we couldn't recover through the platform. We can use the following methods to recover the data through human intervention.



1. Build a new MongoDB

2. Download backup data on S3

   ![01-S3](/Users/guanfei.li/Desktop/home/project/whaleal.github.io/en-docs/WhalealPlatform/images/15-AdministratorWhaleal/04-MongoDBDataRecovery/01-S3.png)

   OR

   ```
   wget -O 1709795219_65e954da1e829206743e2c40-full_data.zip https://wapbucket.s3.ap-southeast-1.amazonaws.com/wap/1709795219_65e954da1e829206743e2c40-full_data.zip\?response-content-disposition\=attachment\&X-Amz-Security-Token\=IQoJb3JpZ2luX2VjEFIaCXV...Fs3%2Faws4_request\&X-Amz-Signature\=b2191c3c5440c5bc59e3d98f0728f74bbf947a686771f7625ebcb1a63743b351
   ```

3. Restore downloaded backup data to a new cluster

   ```
   unzip 1709795219_65e954da1e829206743e2c40-full_data.zip
   mongorestore --host <host>:<port> -u <user> -p ****** --authenticationDatabase <authdb> --gzip dump
   ```

4. Download incremental Oplog from 57019

   Find the corresponding incremental backup Oplog in the 57109 cluster through the cluster ID

   ```
   mongodump --host <host>:57019 -d wap -c oplog669cf3fd3d4d3b380bf5206a -u <user> -p <password> --authenticationDatabase <authdb>
   ```

5. Specify the timestamp, re-apply Oplog, and restore the data to the specified point in time.

   ```
   mkdir empty
   mongorestore --host <host>:<port> -u <user> --authenticationDatabase <authdb> \
   --oplogReplay \
   --oplogFile dump/local/oplog.rs.bson \
   --oplogLimit ******** \
   empty/
   ```

   