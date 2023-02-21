Optional Bonobo git server installation workout.

https://bonobogitserver.com/resources/releases/6_5_0.zip
Download the zip file
Unarchive the zip file
Copy the contents of the zip file folder to “c:\inetpub\wwwroot”
Change the security properties of the app_data folder to allow modify access to the IIS user
Check anonymous authentication is enabled
Visit Http://localhost/bonobo.git.server
Create a user
Amend settings to “allow user repository creation” and “allow push to create repositories”
Create a repo
Push repo to your server