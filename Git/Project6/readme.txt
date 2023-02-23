Alternatives to Git Servers:
https://www.cyberciti.biz/open-source/github-alternatives-open-source-seflt-hosted/

Optional Bonobo git server installation workout.
https://bonobogitserver.com/resources/releases/6_5_0.zip
Download the zip file
Unarchive the zip file
Copy the contents of the zip file folder to “c:\inetpub\wwwroot”
Change the security properties of the app_data folder to allow modify access to the IIS user
Check anonymous authentication is enabled
Visit Http://localhost/bonobo.git.server
Create a user

Do the configuration for IIS Server in OS:
Turn Windows Features on off
Internet Information Services
World Wide Web Services
Application Development Features
Check (enable) the features, all but not CGI.

Amend settings to “allow user repository creation” and “allow push to create repositories”
Create a repo
Push repo to your server