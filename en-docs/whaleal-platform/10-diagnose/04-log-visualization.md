# LogVis

Before using LogVis, you need to configure S3 storage in the settings in advance



LogVis can view the slow query statistics in the logs within a certain period of time. To view the statistics, follow the steps below:

1. Select Cluster Name and Node Name, then click the Analyze **button**.

     ![Start Diagnose Session](../../images/whaleal-platform/10-diagnose/start-logvis.png)

2. Wait for a while and click the **magnifying glass icon** to view the analysis results

     ![Start Diagnose Session](../../images/whaleal-platform/10-diagnose/result.png)

### ConnectionList

In ConnectionList, you can see which nodes the cluster is connected to and count the number of connections.

![Start Diagnose Session](../../images/whaleal-platform/10-diagnose/connection-list.png)

### Statistical information

In Statistical information, view the slow query statistics of each collection in the collection, including the number of slow queries, the average time of slow queries, and the longest/shortest time statistics of slow queries.

![Start Diagnose Session](../../images/whaleal-platform/10-diagnose/slow.png)



### Slow query information

In Slow query information, the collection name is displayed above. Click the colored dot in front of the collection name to control whether to display the slow query of the table. Then click the colored dot in the figure. The color dot with the same color as the collection name is a slow query of the collection. After clicking, the slow query will appear below. Click Click To View to view the analysis information of the slow query.



![Start Diagnose Session](../../images/whaleal-platform/10-diagnose/slowp.png)



![Start Diagnose Session](../../images/whaleal-platform/10-diagnose/slow-log-info.png)
