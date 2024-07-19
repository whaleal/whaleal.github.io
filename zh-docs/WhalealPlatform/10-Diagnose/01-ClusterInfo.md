# Cluster Info

## Select Cluster

Select info from Diagnose in the left navigation bar, and select the cluster name you want to view from the Cluster drop-down box on this page.

We can view the cluster information here, including cluster status, MongoDB version information, and node health status

**Cluster Info:**

| Cluster Name                 | Current cluster name                           |
| ---------------------------- | ---------------------------------------------- |
| Status                       | The current state of the cluster               |
| Project                      | Projects to which the cluster belongs          |
| Enable Monitoring            | Whether to enable monitoring                   |
| Nodes                        | Number of cluster nodes                        |
| Authentication Mechanism     | The auth type of the current cluster           |
| Version                      | MongoDB version information for the cluster    |
| FCV                          | Feature Compatibility Version                  |
| TLS/SSL                      | TLS/SSL status                                 |
| Cluster Member Configuration | Cluster Member Configuration is hostname or IP |

**Node Info:**

The left side of the node is the node information, and the right side is the monitoring.

In the Operation drop-down box, you can operate the process of the node, including **Update Node Information**, **Startup**, **ShutDown**, **Restart**. These operations are only effective for the current node, not for the entire cluster.

Clicking **Monitor** will jump to the monitoring page of the node, where you can see detailed monitoring indicators.

Click **Perforance** to jump to the Perforance page of the node. For details, refer to [Performance](./03-Performance.md)

## ReplicaSet/shard

In the ReplicaSet/shard cluster, there are two drop-down boxes: ReplicaSets Info and Node State. ReplicaSets Info contains the configuration information of Shards and Config Server in Replica Set or Shard, and Node State contains the information of each node in the cluster.