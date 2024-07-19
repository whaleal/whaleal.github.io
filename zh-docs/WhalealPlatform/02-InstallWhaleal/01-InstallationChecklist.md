# Installation Checklist

You must make several decisions based on the content of this page before you install Whaleal. During the installation process, you will make choices based on these decisions.

To install Whaleal:

1. Read the Whaleal Overview.

2. Plan your installation according to the questions on this page.

3. Provision servers that meet the Whaleal Platform System Requirements.

4. Install the Application Database and optional Backup Database.

5. Install Whaleal.

### Will you deploy managed MongoDB instances on servers that have no internet access?

If the servers where you deploy MongoDB don’t have internet access and if you use Automation, then before you create the first managed MongoDB deployment from Whaleal, you must configure local mode and store the binaries. Agents can then download the binaries directly from Whaleal. 
