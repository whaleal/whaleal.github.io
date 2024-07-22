# Monitoring Indicator Details

## System Resource Metrics

1. **CPU**: Monitors the CPU usage to identify if the system is overloaded.

   ![image-20240621153303718](../../images/whalealPlatFromImages/06-Monitor/CPU.png)

2. **Memory Swap**: Tracks swap space usage. Excessive swapping can degrade performance.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/MEMSWAP.png)

3. **System Memory**: Observes overall memory usage to ensure there’s enough available for MongoDB operations.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/MEM.png)

4. **System Network**: Monitors network throughput and latency to identify potential network bottlenecks.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/SystemNetWork.jpg)

5. **Disk IOPS**: Measures input/output operations per second on the disk, indicating how quickly data is read from or written to the disk.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/DiskIOPS.png)

6. **DiskInfo**: Provides detailed information about disk usage and health.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/DiskInfo.png)

## MongoDB-specific Metrics

1. **Opcounters**: Tracks the number of operations (insert, query, update, delete, etc.) performed.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/Opcounters.png)

2. **Connections**: Monitors the number of active client connections to ensure the system can handle the load.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/Connections.png)

3. **Page Faults**: Measures the rate of page faults, indicating how often MongoDB needs to read data from disk into memory.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/PageFaults.png)

4. **Memory**: Tracks MongoDB’s internal memory usage, including how much memory is used by different components.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/Memory.png)

5. **Network**: Monitors MongoDB network traffic to ensure data is being transmitted efficiently.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/Network.png)

6. **Asserts**: Tracks internal database assertions, which can indicate potential issues or bugs.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/Asserts.png)

## Cache Metrics

1. **Cache Flow**: Measures the flow of data into and out of the cache, indicating cache efficiency.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/CacheFlow.png)

2. **Cache Usage**: Monitors how effectively the cache is being utilized.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/CacheUsage.png)

## Performance Metrics

1. **Latency**: Measures the response time for queries, helping to identify performance bottlenecks.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/Latency.png)

2. **Tickets**: Tracks the availability of tickets for read and write operations, indicating resource contention.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/Tickets.png)

3. **Target Query**: Monitors the performance of specific targeted queries.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/TargetQuery.png)

4. **ScanAndOrder**: Tracks operations where MongoDB must scan documents and order them in memory, which can be resource-intensive.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/ScanAndOrder.png)

5. **CollectionSCAN**: Measures the frequency of collection scans, which are less efficient than indexed queries.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/CollectionSCAN.png)

## Document and Data Metrics

1. **Document Info**: Provides details about the number and size of documents.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/DocumentInfo.png)

2. **Deleted Document**: Tracks the rate at which documents are deleted.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/DeletedDocument.png)

3. **Oplog Window**: Monitors the size of the oplog window, crucial for replication lag and recovery.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/OplogWindow.png)

4. **LogicalSize**: Measures the logical size of the database, providing insight into data growth.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/LogicalSize.png)

5. **OpenCursor**: Tracks the number of open cursors, indicating active database operations.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/OpenCursor.png)

6. **Logical DataSize**: Measures the logical size of data stored in MongoDB.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/LogicalDataSize.png)

7. **IndexSize**: Tracks the size of indexes, impacting query performance.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/IndexSize.png)

8. **OplogSize**: Monitors the size of the oplog, essential for replication health.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/OplogSize.png)

## Lock and Transaction Metrics

1. **LockCondition**: Tracks lock contention within MongoDB, which can affect performance.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/LockCondition.png)

2. **DatabaseLock**: Measures the time the database is locked for various operations.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/DatabaseLock.png)

3. **CollectionLock**: Monitors lock contention at the collection level.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/CollectionLock.png)

4. **Transaction Condition**: Tracks transaction performance and conflicts.

   ![image-20240621153642506](../../images/whalealPlatFromImages/06-Monitor/TransactionCondition.png)
