import ftplib
 
# https://www.tutorialspoint.com/python_network_programming/python_ftp.htm
# Terminal connection to ftp.nluug.nl.
# https://github.com/v76s/Clarusway/tree/master/Network
 
ftp = ftplib.FTP("ftp.nluug.nl")
ftp.login("anonymous", "ftplib-example-1")
 
data = []
 
ftp.dir(data.append)
 
ftp.quit()
 
for line in data:
    print("-", line)