# Agent

This page contains answers to frequently asked questions about Agent.



#### 1. The agent.gz package has a problem and cannot be downloaded.

Server-web did not start properly.




#### 2. The new version of the configuration file is named after the port, and the previous one is in the form of ip+port. Do you need to manually modify the configuration file name of the old cluster?

The old cluster does not need to be modified and will not be affected.



#### 3. After the agent server is restarted, you need to start the agent process manually

Use the agent script to configure agent to serve the system and set up boot self-boot.



#### 4. The DDT machine used for synchronization does not have agent. This does not affect data synchronization, can I just configure mong on it?

If you don't use backup features on the platform, there will be no impact.



#### 5. The DDT server used for data synchronization does not have an Agent installed. Will it affect data synchronization? Can I directly deploy and configure MongoDB? If I need to use the backup function later, how should I restore it to the original DDT?

Does not affect data synchronization.
If the DDT server is subscribed by marketplace's agent
DDT machine clears data, services
Start the agent of the DDT machine and put it in the Project called DDT
Just start the backup normally.
If the DDT server is not created by subscription, you cannot use the backup function in wap.



#### 6. After the agent server is restarted, do you need to manually start the agent process?

The agent startup script will configure the agent as a system service and set it to start automatically at boot