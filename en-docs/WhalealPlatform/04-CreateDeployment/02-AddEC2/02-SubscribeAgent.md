# Subscribe Agent



1. Subscribe to Whaleal Platform Agent, refer to [Install Whaleal in AWS MarketPlace](../02-InstallWhaleal/03-InstallWhaleal/01-InstallWhalealInAWSMarketPlace.md)

2. Connecting to EC2 Instance

   ```shell
   sudo -i 
   ```

3. Enter the /opt directory

   ```shell
   cd /opt/agent
   ```

4. Modify the **/opt/agent/parameters.properties** file

   ```shell
   vi parameters.properties
   
   #Modify the first line
   #In the configuration item "foreign_url=", replace Whaleal_Public_IP with Whaleal's public IP as follows
   foreign_url=http://Whaleal_Public_IP:8080
   ```

5. Restart the agent.

   ```shell
   ps -ef | grep agent
   kill -9 Agent_PID
   ```

   Wait two minutes and check to confirm that the agent has automatically restarted

6. Go to Whaleal to check the EC2 management progress.

   ![hostlist](../../images/04-CreateDeployment/hostlist.png)

   ![hostlist](../../images/04-CreateDeployment/addEC2success.png)
