# Mirrored MongoDB data through DDT

When MongoDB needed data recovery due to some problems, there was a problem with the WAP platform and we couldn't recover through the platform. We can use the following methods to recover the data through human intervention.



1. Build a new MongoDB

2. Download backup data on 47019

     ```
     mongodump --host <host>:47019 -u <user> -p <password>--authenticationDatabase <authdb>
     ```

3. Restore downloaded backup data to a new cluster

     ```
     mongorestore --host <host>:<port> -u <user> -p ****** --authenticationDatabase <authdb> dump
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

   

   