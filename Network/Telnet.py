import getpass
import telnetlib

# https://www.tutorialspoint.com/python_network_programming/python_telnet.htm
# Putty connection on AWS.
# https://github.com/v76s/Clarusway/tree/master/Network

HOST = "http://54.87.158.38/"
user = input("Enter your remote account: ")
password = getpass.getpass()

tn = telnetlib.Telnet(HOST)

tn.read_until("login: ")
tn.write(user + "\n")
if password:
    tn.read_until("Password: ")
    tn.write(password + "\n")

tn.write("ls\n")
tn.write("exit\n")

print(tn.read_all())