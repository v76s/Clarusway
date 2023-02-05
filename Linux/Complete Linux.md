# <center>Clarusway Linux Session Notes</center>

**<span style="color:Orange text-align: center;">All the titles that we covered in Linux Sessions**</span>

---
##### <span style="color:red">1. How to install WSL in Windows?</span>
    Please check the details in /media/How to install WSL2 on windows.pdf file. 
---
##### <span style="color:red">2. How to install Ubuntu in VirtualBox?</span>
    Please follow the link below. Basically we need to install VirtualBox application in our host computer and later download the appropriate .iso file for Ubuntu.    
[Ubuntu in VirtualBox](https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview)

---   
##### <span style="color:red">3. Linux-Windows comparison</span>
    You may find the comparison link below; 
[Windows-Linux Comparison](http://www.linuxandubuntu.com/home/10-reasons-why-linux-is-better-than-windows#:~:text=Linux%20can%20be%20installed%20and,as%20per%20the%20user%20requirements.)

---   
##### <span style="color:red">4. Some of the server links on Linux</span>
    You may find the famous linux http servers in links below; 
[Apache HTTP Server](https://httpd.apache.org/)<br>
[NGinx](https://www.nginx.com/resources/glossary/nginx/)<br>
[Lighttpd](https://www.elegantthemes.com/blog/wordpress/lighttpd-web-server)<br/>
[Apache Tomcat](https://tomcat.apache.org)<br>
[Open Source Servers](https://opensource.com/business/16/8/top-5-open-source-web-servers)

---

##### <span style="color:red">5. Linux Distro List</span>
    The complete list of recent Linux distributions: 
[Linux Distribution HTTP Server](https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg)<br/>

---

##### <span style="color:red">6. Using Linux on Different Platforms</span>
    Alternatives of Linux on different platforms: 
LMS 		: https://lms.clarusway.com/mod/lti/view.php?id=1317<br>
WSL		: https://www.microsoft.com/en-us/search/shop/apps?q=wsl<br>
VirtualBox	: https://www.virtualbox.org/wiki/Downloads<br>
Docker	: https://www.docker.com/products/docker-desktop/<br>
Emulators	: 
https://www.qemu.org/download/<br>
http://topologi-linux.sourceforge.net/index.php?menu=3

---


##### <span style="color:red">7. How to use WSL on Linux</span>
    The details about configuring WSL2 on Windows: 
Another common way for using Linux on Windows is “WSL” 
which stands for “Windows Subsystem for Linux”. 

This alternative has almost all the capabilities of a Linux distro. 
At least it is more than enough for our purposes in this course.
https://aka.ms/wslstore

We can download the available distributions on this link : https://www.microsoft.com/en-us/search/shop/apps?q=wsl

Steps to follow for WSL: 

wsl --install<br>
reboot the computer<br>
wsl --list --verbose 	(will display a list of installed Linux distro's on your computer)<br>
wsl --list --online 	(will display a list of available online Linux distro's)<br>
wsl --install -d debian<br>
wsl --update (will install updates if available)<br>

sudo apt-get install gedit -y (install an application such as gedit in Linux)<br>
once gedit is installed, it will be available to run from start menu of Windows as well.<br> 
if you would like to have GUI also to be available in WSL2 than we need to do the 
configuration on one of these links: <br>
    https://youtu.be/8SuERIEJJUA<br>
    https://www.shogan.co.uk/how-tos/wsl2-gui-x-server-using-vcxsrv/<br>

---


##### <span style="color:red">8. ls command in bash</span>
    How to use ls command with parameters:
ls -l, ls -a, and ls -al are mostly used options for ls command.<br>
It should be space between options and command<br>
ls -a : display all items starting with . as well.<br>
ls -l : use long listing format.<br>
ls -as :  display all items sort by s (largest first).<br>
ls -t : sort by time (newest first)

---


##### <span style="color:red">9. cd command in bash</span>
    How to use the cd command:
cd [dir]	change (current) directory<br>
cd ..	change current directory to one level up<br>
cd /		change current directory to the root directory<br>
cd ~	change current directory to the home directory

---

##### <span style="color:red">10. mkdir command in bash</span>
    How to use the mkdir command:
mkdir [dir]	create a new directory<br>
mkdir [dir1] [dir2] [dir3]<br>
creates 3 directories as displayed above.

---

##### <span style="color:red">11. rmdir command in bash</span>
    How to use the rmdir command:
rmdir [dir]	deletes the directory only if it's empty. If it contains some items inside it will display an error. 

---