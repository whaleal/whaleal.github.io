# MongoDBUpgradeDowngrade

## Check version compatibility

When upgrading, make sure the target version is higher than the current version. Similarly, when downgrading, make sure the target version is lower than the current version.

Version upgrades and downgrades cannot be performed across versions, and can only be performed between adjacent versions.
(For example, you cannot upgrade version 4.2 to 5.0 directly, but you can upgrade 4.2 to 4.4 and then 4.4 to 5.0. Similarly, you cannot downgrade 5.0 to 4.2 directly, but you can downgrade 5.0 to 4.4 and then 4.4 to 4.2.)



## Check the logs

Check the MongoDB log (mongod.log) for any errors.

View WAP event group log error information



## Backing up your data

Choose to back up data before upgrading or downgrading. If the upgrade or downgrading fails, you can choose to restore the mongodb data by backing up the snapshot.



## Notify the Whaleal Team

Provide the whale team with information about the problems encountered during the upgrade and downgrade process.



When upgrading, make sure the target version is higher than the current version. Similarly, when downgrading, make sure the target version is lower than the current version.

