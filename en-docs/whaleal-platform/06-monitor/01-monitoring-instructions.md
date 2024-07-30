# Monitoring Instructions



Whaleal can monitor more than 30 aspects of MongoDB, including host-level monitoring and MongoDB-level monitoring. Monitoring is enabled by default, and we can also turn off monitoring. If you need to turn off monitoring, first click MongoDB, enter the MongoDB List page, then select the project we need to operate, and then click the magnifying glass icon to find the target cluster. After finding the target cluster, find Turn off Monitoring in the drop-down box on the right side of the cluster, click it, and then click Confirm to turn off the monitoring of the cluster.



## Why use monitoring MongoDB?

### Performance Optimization

- **Improved Query Performance**: By tracking metrics like Opcounters, Latency, and ScanAndOrder, you can identify and optimize slow queries, ensuring faster response times.
- **Resource Utilization**: Monitoring CPU, Memory, and Disk IOPS helps in identifying resource bottlenecks and optimizing the allocation of system resources to maintain smooth operations.

### Reliability and Availability

- **Early Issue Detection**: Metrics such as Page Faults, Connections, and Asserts allow for the early detection of potential issues, preventing downtime and ensuring high availability.
- **Replication Health**: Monitoring Oplog Window and OplogSize is crucial for maintaining replication health and ensuring data redundancy, which is vital for disaster recovery.

### Scalability

- **Capacity Planning**: By observing trends in metrics like System Memory, LogicalSize, and IndexSize, you can effectively plan for scaling your MongoDB deployment, whether vertically (adding more resources) or horizontally (adding more nodes).
- **Load Balancing**: System Network and Network metrics help in understanding network traffic patterns, allowing for better load distribution across the database cluster.

### Security

- **Unauthorized Access Detection**: By monitoring Connections and Network activity, you can detect unusual patterns that might indicate security breaches or unauthorized access attempts.
- **Data Integrity**: Ensuring that backup and replication processes are functioning correctly through Oplog Window and Logical DataSize metrics helps maintain data integrity.

### Operational Efficiency

- **Automated Alerts and Troubleshooting**: Setting up alerts based on key metrics (e.g., high CPU usage, excessive Page Faults) reduces the manual effort required to monitor the system and allows for quick troubleshooting.
- **Efficient Resource Management**: Continuous monitoring of resource usage (CPU, Memory, Disk IOPS) ensures that resources are used efficiently, preventing over-provisioning and under-utilization.

### Compliance and Reporting

- **Regulatory Compliance**: Detailed monitoring provides necessary logs and audit trails for compliance with regulatory requirements.
- **Internal Audits**: Regular reporting on metrics such as Asserts, LockCondition, and Transactions helps in conducting internal audits to ensure adherence to operational standards.

### User Experience

- **Enhanced User Experience**: By ensuring low latency and high availability, monitoring directly contributes to a better user experience for applications relying on MongoDB.
- **Proactive Issue Resolution**: Early detection of issues through metrics like Page Faults, LockCondition, and Tickets allows for proactive resolution, minimizing the impact on end-users.

For more information about specific monitoring indicators, please refer to
[Monitoring indicator details](./03-monitoring-indicator-details.md)
