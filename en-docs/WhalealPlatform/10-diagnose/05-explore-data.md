# ExploreData

Explain Plan (execution plan) is used to explain the execution method and optimization strategy of query statements. By analyzing the execution plan, administrators can understand the execution of the query, discover potential performance bottlenecks, and optimize it. You can optimize query statements, create appropriate indexes, or adjust the storage structure of the collection based on the execution plan to improve query efficiency and overall performance.

1. Select Cluster Name

   ![Start Diagnose Session](../../images/whaleal-platform-Images/10-diagnose/excname.png)

2. Select a database and click on it to enter the database.

   ![Start Diagnose Session](../../images/whaleal-platform-Images/10-diagnose/database.png)

3. Select a collection and click on it to enter the collection.

   ![Start Diagnose Session](../../images/whaleal-platform-Images/10-diagnose/collection.png)

4. Fill in the statement to be executed in the **FILTER**, and then click the **Find** button

   ![Start Diagnose Session](../../images/whaleal-platform-Images/10-diagnose/find.png)

5. Fill in the statement to be executed in the **FILTER**, and then click the **explain** button

   ![Start Diagnose Session](../../images/whaleal-platform-Images/10-diagnose/explain.png)

### Explain Result

Visual Tree:Formatted explain result

![Start Diagnose Session](../../images/whaleal-platform-Images/10-diagnose/VisualTree.png)

Raw Json:Complete explain result

![Start Diagnose Session](../../images/whaleal-platform-Images/10-diagnose/explainresullt.png)
