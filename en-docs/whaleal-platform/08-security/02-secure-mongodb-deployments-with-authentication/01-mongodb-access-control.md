# Configure MongoDB Authentication and Authorization

Your  MongoDB deployment can use the access control mechanisms described on this page. You can specify authentication settings when you add a deployment. After you add a deployment, you can edit the security settings.

If your deployment uses access control, the WAP Agent must authenticate to the deployment as a MongoDB user with appropriate access permissions. Enable and configure authentication through the WAP application.

## Precautions

After enabling access control, you must create a MongoDB user so that clients can access your database.

By default, WAP automatically creates a user for WAP Agent. WAP Agent can manage other users. Therefore, the first user you create can have any role.

## Access control mechanism

### SCRAM-SHA-1 and SCRAM-SHA-256

In the following table, the default authentication mechanism for the release series is marked with "✓"

and acceptable authentication mechanisms are marked with "*"

| MongoDB Release Series | SCRAM-SHA-1 | SCRAM-SHA-256 |
| :--------------------- | :---------- | :------------ |
| 5.x.x                  | *           | ✓             |
| 4.4.x                  | *           | ✓             |
| 4.2.x                  | *           | ✓             |
| 4.0.x                  | *           | ✓             |

To enable SCRAM-SHA-1 or SCRAM-SHA-256 for your WAP project, complete the following tasks:

* [Enable Username and Password Authentication](02-enable-username-password-authentication.md) for your WAP Project.

### X.509

MongoDB supports X.509 certificate authentication for use with a secure TLS connection. The X.509 client authentication allows clients to authenticate to servers with certificates rather than with a username and password.

To enable X.509 authentication for your WAP project, complete the following tasks:

* Enable x.509 Authentication for your WAP Project.

You can also [use X.509 certificates for membership authentication](https://www.mongodb.com/docs/manual/tutorial/configure-x509-member-authentication/) for the processes that WAP monitors.