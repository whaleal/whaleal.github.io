# Hardware And Software Requirements

This section describes the hardware, software, and networking requirements for the hosts that run the Whaleal components.

Before installing Whaleal Platform (WAP), you need to review the following materials:
- Server Requirement
- Agent Requirement

### Server Requirement

#### Hardware Requirement

All hosts that install the following Whaleal Platform (WAP) components must meet RAM and Disk requirements:

* Whaleal Platform Application
* Whaleal Platform Application Databases

**Whaleal Platform Application Hardware Requirement**

All hosts deploying Whaleal Platform Application must meet the following hardware requirements:

| Number of Monitored Nodes | CPU                  | Memory               | Disk                 |
| ------------------------- | -------------------- | -------------------- | -------------------- |
| 50                        | 8+                   | 8GB+                 | 200GB + logs storage |
| 200                       | 16+                  | 16GB+                | 500GB + logs storage |
| 200+                      | Contact Whaleal Team | Contact Whaleal Team | Contact Whaleal Team |

**Whaleal Platform Application Database Hardware Requirement**

All hosts deploying Whaleal Platform Application Database must meet the following hardware requirements:

| Number of Monitored Nodes | CPU                  | Memory               | Disk                 |
| ------------------------- | -------------------- | -------------------- | -------------------- |
| 50                        | 4+                   | 8GB+                 | 200GB                |
| 200                       | 8+                   | 16GB+                | 500GB                |
| 200+                      | Contact Whaleal Team | Contact Whaleal Team | Contact Whaleal Team |

> For better performance, it is recommended to use:
>
> * SSD for Application Database storage
> * WiredTiger storage engine for Application Database

#### Software Requirement

**Java Environment Requirement**

| JAVA     | Version |
| -------- | ------- |
| jdk      | 11+     |
| open-jdk | 11+     |

**Operating System Compatibility**

Whaleal Platform Application must be deployed on a 64-bit operating system.

| Operating System         | Version       |
| ------------------------ | ------------- |
| Red Hat Enterprise Linux | 6.x, 7.x, 8.x |
| CentOS                   | 6.x, 7.x, 8.x |

#### Network Security

**TCP Connection Requirement**

All Whaleal Platform Application services must be able to communicate properly with the following services:

* Whaleal Platform Application Database
* Whaleal Platform Application Agent Monitor MongoDB

**Hosts**

To facilitate easier usage, it is recommended to configure the hostname of the server where the Whaleal Platform Application is located

**Port**

Whaleal Platform Application must meet the following basic requirements:

* Users and Whaleal Platform Application Agent must be able to access via HTTP/HTTPS requests
* Whaleal Platform Application must be able to access Whaleal Platform Application Database
* All Whaleal Platform Application and Whaleal Platform Application Agent must be able to access the monitored MongoDB services
* Whaleal Platform Application must be able to send messages to users via email, SMS, and DingTalk

Therefore, Whaleal Platform Application must have the following ports open:

| Service   | Default Port | Transport | Direction | Description                  |
| --------- | ------------ | --------- | --------- | ---------------------------- |
| HTTP      | 8080         | TCP       | Inbound   | WAP application service port |
| Boot Page | 9599         | TCP       | Inbound   | WAP login page port          |
| Web       | 80           | TCP       | Inbound   | WAP Web Port                 |

> For custom ports, please open the specified ports.

**Ports on Host**

Whaleal Platform Application can complete most operations, but some processes require administrator access to the Whaleal Platform Application host to complete. Therefore, the following port must be open:

| Service | Default Port | Transport | Direction | Description                                 |
| ------- | ------------ | --------- | --------- | ------------------------------------------- |
| ssh     | 22           | TCP       | Inbound   | Default port for SSH (Secure Shell) service |

### Agent Requirement

#### Hardware Requirement

All hosts that install the following Whaleal Platform (WAP) components must meet RAM and Disk requirements:

* Whaleal Platform Application Agent

**Whaleal Platform Application Agent Hardware Requirement**

All hosts deploying Whaleal Platform Application Agent must meet the following hardware requirements:

| Number of Managed/Monitored Nodes | CPU                  | Memory               | Disk                 |
| --------------------------------- | -------------------- | -------------------- | -------------------- |
| 1                                 | 1+                   | 2GB+                 | 2GB + logs storage   |
| 5                                 | 2+                   | 4GB+                 | 2GB + logs storage   |
| 5+                                | Contact Whaleal Team | Contact Whaleal Team | Contact Whaleal Team |

#### Software Requirement

**Java Environment Requirement**

| JAVA     | Version |
| -------- | ------- |
| jdk      | 11+     |
| open-jdk | 11+     |

**Operating System Compatibility**

Whaleal Platform Application Agent must be deployed on a 64-bit operating system.

| Operating System         | Version       |
| ------------------------ | ------------- |
| Red Hat Enterprise Linux | 6.x, 7.x, 8.x |
| CentOS                   | 6.x, 7.x, 8.x |

#### Network Security

**TCP Connection Requirement**

All Whaleal Platform Application services must be able to communicate properly with the following services:

* Whaleal Platform Application Database
* Whaleal Platform Application Agent Monitor MongoDB

**Ports on Host**

Whaleal Platform Application Agent can complete most operations, but some processes require administrator access to the Whaleal Platform Application host to complete. Therefore, the following port must be open:

| Service | Default Port | Transport | Direction | Description |
| ------- | ------------ | --------- | --------- | ----------- |
| ssh     | 22           | TCP       | Inbound   |             |