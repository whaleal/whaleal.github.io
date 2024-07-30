# Deployment Prerequisites

## System Requirements

### Hardware and Software

Each host must meet the following requirements.

- At least 10 GB of free disk space plus whatever space is necessary to hold your MongoDB data.
- At least 2 GB of RAM.
- If you use AWS EC2 instances, you should use a minimum of an `t3.small` instance.
- The MongoDB Agent must be installed only on 64-bit architectures.

#### Server Networking Access

The hosts that serve the MongoDB deployments must:

- Have full networking access to each other through their FQDN. Each host must be able to reach every other host through the FQDN. To find the FQDN for each host, run the following command in the shell:

  ```
  hostname -f
  ```

- Set the Common Name or Subject Alternative Name value of any SSL certificates to the MongoDB host’s FQDN.

The network configuration must allow each MongoDB Agent to make a direct connection to every MongoDB deployment listed on the **Deployment** page. Whaleal does not support port forwarding.

### Backup and Monitoring

Whaleal supports backup and monitoring only for MongoDB version 5.0 and later.

For more information about backup, refer to [BackupAndRestore](../07-backup-and-restore/01-backup/01-create-repository.md)

For more information about backup, refer to [Monitor](../06-monitor/01-monitoring-instructions.md)

#### MongoDB  Backup Support

- Increased disk usage, disk I/O, and network I/O on each MongoDB host with backup enabled while a snapshot is being taken.
- Increased inbound network load to the Agent host or hosts while a snapshot is being taken.
- Snapshots and backups use no storage capacity on Whaleal application.

### MongoDB Agent System User Permissions

If you want the MongoDB Agent to manage your MongoDB deployments, the MongoDB Agent System User must have permission:

- To stop the MongoDB processes. The MongoDB Agent System User restarts the processes using the agent's own set of MongoDB binaries.

- To `Read` and `Write` the MongoDB data directories and log directories.

- Set to the same user ID (UID) and group ID (GID) of the MongoDB process to be automated. If the MongoDB processes to be automated are not running as the same user and group, the Agent cannot manage those processes.

  

  ## EXAMPLE

  If your MongoDB Agent runs as the `mongod` root user in the `mongod` root group, the MongoDB process must also run as the `mongod` root user in the `mongod` root group.




## Installation Options

### Installing MongoDB Enterprise Dependencies

#### Ubuntu 

##### Ubuntu 18.04

```
sudo apt-get install \
     libcurl4 libgssapi-krb5-2 libldap-2.4-2 liblzma5 \
     libsasl2-2 libsasl2-modules \
     libsasl2-modules-gssapi-mit libwrap0 openssl snmp
```

##### Ubuntu 20.04

```
sudo apt-get install \
     libcurl4 libgssapi-krb5-2 libldap-2.4-2 liblzma5 \
     libsasl2-2 libsasl2-modules \
     libsasl2-modules-gssapi-mit libwrap0 openssl snmp
```

##### Ubuntu 22.04

```
sudo apt-get install \
     libcurl4 libgssapi-krb5-2 libldap-2.4-2 liblzma5 \
     libsasl2-2 libsasl2-modules \
     libsasl2-modules-gssapi-mit libwrap0 openssl snmp
```

#### RHEL/CentOS

##### RHEL/CentOS 6.x

```
sudo yum install cyrus-sasl cyrus-sasl-gssapi \
     cyrus-sasl-plain krb5-libs libcurl net-snmp \
     net-snmp-libs openldap openssl xz-libs
```

##### RHEL/CentOS 7.x

```
sudo yum install cyrus-sasl cyrus-sasl-gssapi \
     cyrus-sasl-plain krb5-libs libcurl \
     lm_sensors-libs net-snmp net-snmp-agent-libs \
     openldap openssl tcp_wrappers-libs xz-libs
```

##### RHEL/CentOS 8.x

```
sudo yum install cyrus-sasl cyrus-sasl-gssapi \
     cyrus-sasl-plain krb5-libs libcurl \
     lm_sensors-libs net-snmp net-snmp-agent-libs \
     openldap openssl xz-libs
```

#### SUSE

##### SUSE 12.x

```
sudo zypper install cyrus-sasl cyrus-sasl-plain \
     cyrus-sasl-gssapi krb5 libcurl4 libldap-2_4-2 \
     libopenssl1_0_0 libsensors4 libsnmp30 libwrap0 \
     liblzma5
```

##### SUSE 15.x

```
sudo zypper install cyrus-sasl cyrus-sasl-plain \
     cyrus-sasl-gssapi krb5 libcurl4 libldap-2_4-2 \
     libopenssl1_1 libsensors4 libsnmp30 libwrap0 \
     liblzma5
```



#### Installing to a Host Before Installing MongoDB

If you deploy the MongoDB Agent to a host onto which you want to have Automation install MongoDB, ensure the system user that owns the MongoDB Agent has `Read` and `Write` permissions on the MongoDB data and log directories you plan to use.

#### Installing to a Host that Already Runs MongoDB

If you install the MongoDB Agent to a host on which Automation is managing a MongoDB process, the MongoDB Agent system user must have the following permissions:

- To stop the MongoDB process. The MongoDB Agent restarts the process using its own set of MongoDB binaries. If you had installed MongoDB with a package manager, use the same package manager to install the MongoDB Agent. This gives the MongoDB Agent the same owner as MongoDB.
- To `Read` and `Write` to the MongoDB data and log directories.
