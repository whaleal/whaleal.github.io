# Example Deployment

Below is a description of deploying Whaleal and MongoDB in different environments.



## Test Install on a Single Host

For a test deployment, you can deploy all of the WAP components to a single host, as described in Install a Simple Test WAP Installation.

> If you would like to test backup services, use the WAP Application to configure them. When configuring WAP, you can specify the backup settings.



## Production Installs

### Redundant Metadata and Snapshots

This deployment provides redundancy for the WAP Application Database and Snapshot Storage in the event of host failure. The deployment runs the database in a MongoDB replica set with three data-bearing members with copies of the data.

> This deployment provides high availability for the WAP Application. WAP uses a w:majority write concern, and can tolerate the loss of one data-bearing node from the WAP Application Database. To make the deployment more durable, enable journaling.



> All hosts must satisfy the combined hardware and software requirements for systems specified in the System Requirements column.

For an example tutorial on installing the minimally viable Whaleal installation, see [QuickStart](./03-QuickStart.md).