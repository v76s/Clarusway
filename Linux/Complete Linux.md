# <center>Clarusway Linux Session Notes</center>

**<span style="color:Orange text-align: center;">All the titles that we covered in Linux Sessions**</span>

---
##### <span style="color:red;font-size:30">1. How to install WSL in Windows?</span>
    Please check the details in /media/How to install WSL2 on windows.pdf file. 
---
##### <span style="color:red;font-size:30">2. How to install Ubuntu in VirtualBox?</span>
    Please follow the link below. Basically we need to install VirtualBox application in our host computer and later download the appropriate .iso file for Ubuntu.    
[Ubuntu in VirtualBox](https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview)

---   
##### <span style="color:red;font-size:30">3. Linux-Windows comparison</span>
    You may find the comparison link below; 
[Windows-Linux Comparison](http://www.linuxandubuntu.com/home/10-reasons-why-linux-is-better-than-windows#:~:text=Linux%20can%20be%20installed%20and,as%20per%20the%20user%20requirements.)

---   
##### <span style="color:red;font-size:30">4. Some of the server links on Linux</span>
    You may find the famous linux http servers in links below; 
[Apache HTTP Server](https://httpd.apache.org/)<br>
[NGinx](https://www.nginx.com/resources/glossary/nginx/)<br>
[Lighttpd](https://www.elegantthemes.com/blog/wordpress/lighttpd-web-server)<br/>
[Apache Tomcat](https://tomcat.apache.org)<br>
[Open Source Servers](https://opensource.com/business/16/8/top-5-open-source-web-servers)

---

##### <span style="color:red;font-size:30">5. Linux Distro List</span>
    The complete list of recent Linux distributions: 
[Linux Distribution HTTP Server](https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg)<br/>

---

##### <span style="color:red;font-size:30">6. Using Linux on Different Platforms</span>
    Alternatives of Linux on different platforms: 
LMS 		: https://lms.clarusway.com/mod/lti/view.php?id=1317<br>
WSL		: https://www.microsoft.com/en-us/search/shop/apps?q=wsl<br>
VirtualBox	: https://www.virtualbox.org/wiki/Downloads<br>
Docker	: https://www.docker.com/products/docker-desktop/<br>
Emulators	: 
https://www.qemu.org/download/<br>
http://topologi-linux.sourceforge.net/index.php?menu=3

---


##### <span style="color:red;font-size:30">7. How to use WSL on Linux</span>
    Another common way for using Linux on Windows is “WSL” which stands for “Windows Subsystem for Linux”. This alternative has almost all the capabilities of a Linux distro. At least it is more than enough for our purposes in this course.

https://aka.ms/wslstore

We can download the available distributions on this link : https://www.microsoft.com/en-us/search/shop/apps?q=wsl

Steps to follow for WSL: 

- wsl --install<br>
- reboot the computer<br>
- wsl --list --verbose 	(will display a list of installed Linux distro's on your computer)<br>
- wsl --list --online 	(will display a list of available online Linux distro's)<br>
- wsl --install -d debian<br>
- wsl --update (will install updates if available)<br>

- sudo apt-get install gedit -y (install an application such as gedit in Linux)<br>
- once gedit is installed, it will be available to run from start menu of Windows as well.<br> 
- if you would like to have GUI also to be available in WSL2 than we need to do the 
configuration on one of these links: <br>
    https://youtu.be/8SuERIEJJUA<br>
    https://www.shogan.co.uk/how-tos/wsl2-gui-x-server-using-vcxsrv/<br>

---

##### <span style="color:red;font-size:30">8. pwd command in bash</span>
    pwd displays the current path of the working directory. 
---

##### <span style="color:red;font-size:30">9. ls command in bash</span>
    ls command displays the list of the files and folders in the current directory

ls, ls -a, and ls -al are mostly used options for ls command.<br>
ls -a : display all items starting with . as well.<br>
ls -l : use long listing format.<br>
ls -as :  display all items sort by s (largest first).<br>
ls -t : sort by time (newest first)

---


##### <span style="color:red;font-size:30">10. cd command in bash</span>

    cd [dir]	change (current) directory
    cd ..	change current directory to one level up
    cd / change current directory to the root directory
    cd ~ change current directory to the home directory

---

##### <span style="color:red;font-size:30">11. mkdir command in bash</span>
    mkdir creates a new directory, also it's possible to create multiple files.

mkdir [dir]	create a new directory<br>
mkdir [dir1] [dir2] [dir3]<br> creates 3 directories as displayed above.

---

##### <span style="color:red;font-size:30">12. rmdir command in bash</span>
    rmdir [dir]	deletes the directory only if it's empty.
    If it contains some items inside, it will display an error. 

---

##### <span style="color:red;font-size:30">13. touch command in bash</span>
    The purpose of the touch command is to create a single or multiple files.
Example:<br>
touch [file1] [file2] [file3] ... creates a single or multiple files. 

---

##### <span style="color:red;font-size:30">14. rm command in bash</span>
    rm [file] command deletes a file.
--- 

##### <span style="color:red;font-size:30">15. cp command in bash</span>
    cp command copies a source file as a target file in the same or a different directory.
cp [source_file] [target_file] copies the source file as a target file. It's also possible to rename the file while copying.<br>

cp -i override the existing file with interaction.<br>

cp -n override the existing file without interaction.

--- 

##### <span style="color:red;font-size:30">16. mv command in bash</span>
    The purpose of the mv command is to move the file from source to target location. While moving it, it's also possible to rename the file.

mv [source_file] [target_file]

--- 

##### <span style="color:red;font-size:30">17. echo command in bash</span>
    The purpose of echo command is to display a message. Re-direction operator makes it possible to save the message in a file as well. 
echo "message" displays the message<br>
echo "message" > [target_file]<br> Saves the message to file.
echo "message" >> [target_file]<br> Saves but appends the message to the file content. 

--- 

##### <span style="color:red;font-size:30">18. cat command in bash</span>
    How to use the 'cat' command:
cat [file1] displays the content of the file.<br>
cat [file1] [file2] ... [fileN] displays the contents of the files. 
<br>

--- 


##### <span style="color:red;font-size:30">19. ls command with filter in bash</span>
    How to use the 'ls' command with single/multiple character filters:
cat a*.* displays all the files starting with a character.<br>
cat ?tml.txt displays the contents of the files that starts with any character but ends with "tml.txt" 
<br>

--- 


##### <span style="color:red;font-size:30">20. find command usage</span>
    Find command helps us to find a specific file or a pattern. 
find -name ‘*.js’ : Find all files with js extension<br>
find folder1 folder2 -name [file1.txt] : Find file1.txt in folder1 and folder2<br>
find . -type f -size +100c : Find all files that are greater than 100bytes
<br>
Example:<br>
find /home/clarusway -name “*.js”<br>
find bin/ -name ‘see’
<br>

--- 

##### <span style="color:red;font-size:30">21. man command in bash</span>
    "man" command displays info about the usage of a specific command.
Example:<br>
man dmesg : Display info about dmesg command 
<br>

--- 

##### <span style="color:red;font-size:30">22. open command in bash</span>
    "open" command executes the file with the registered application.
Example:<br>
open 1.html<br>
open /home/clarusway/Documents/clarusway.js<br>
open latest.zip
<br>

--- 

##### <span style="color:red;font-size:30">23. alias command in bash</span>
    "alias" command creates a shortcut for a command.
Example:<br>
alias ll=’ls -al’  Here typing ll lists the files with all and detail list.
<br>

--- 


##### <span style="color:red;font-size:30">24. less command in bash</span>
    "less" command displays the file content similar to cat command but from top to a limit.
Example:<br>
alias ll=’ls -al’  Here typing ll lists the files with all and detail list.
<br>

--- 

##### <span style="color:red;font-size:30">25. tail command in bash</span>
    "tail" command displays the file content similar to cat command but the last 10 lines, useful to observe log files.

Example:<br>
tail -f /var/log/system.log 
<br>

--- 

##### <span style="color:red;font-size:30">26. grep command in bash</span>
    "grep" command shows the occurance of a searched text entry in a file.

Example:<br>
grep document.getElementById index.md 
<br>

--- 

##### <span style="color:red;font-size:30">27. systemctl command in bash</span>
    "systemctl" command displays a list of the background services.

Example:<br>
systemctl –type=service<br>
systemctl –type=service –state=running<br>

It's possible to assign an alias and use it accordingly as well:<br>
alias running_services='systemctl list-units  --type=service  --state=running'
<br>

--- 

##### <span style="color:red;font-size:30">28. A List of bash commands</span>
- ls: List files in a directory
- ls -a: List files in a directory including the hidden files and folders
- pwd: Show directory that we are currently working in.
- mkdir [directory]: Create a directory.
- rm [file_name]: Remove a file
- rm -r [directory_name]: remove a directory recursively. 
- rm -rf [directory_name]: Recursively remove a directory without requiring confirmation.
- cp [file_name1] [file_name2]: Copy the contents of a file to another.
- cp -r [directory_name1] [directory_name2]: Copy one directory as another.
- mv [file_name1] [file_name2]: Rename a directory.
- ln -s /path/to/[file_name] [link_name]: Create a symbolic link to a file.
- touch [file_name] : Create a new file.
- more [file_name] : Show the contents of a file. 
- cat [file_name]:  Show the contents of a file.
- cat [file_name1] >> [file_name2] : Append file contents to another file. 
- head [file_name] : Display the first 10 lines of a file
- tail [file_name] : Display the last 10 lines of a file
- gpg -c [file_name] : Encrypt a file.
- gpg [file_name.gpg] : Decrypt a file. (make a demonstration)
- wc : Find word counts in a file.(Lines, words, characters displayed)
- shred -u [filename] : Delete the file to prevent recovery. (TestDisk to recover)
- diff [file1] [file2] : Display the differences in 2 files.
- source [filename]: Read and execute the file content in the current shell.
- sort [options] filename : Sort the file contents and display results. sort file.txt > sorted_file.txt
- cd command evaluation : Display all abilities to root or etc.
- tar cf [compressed_file.tar] [file_name] : Compress an existing file. 
- tar xf [compressed_file.tar] : Decompress an existing tar file. 
- tar czf [compressed_file.tar.gz]: Create a gzip compressed tar file.
- gzip [file_name] : compress a file with .gz extension. 
- scp [file_name.txt] [server/tmp] : Copy a file securely to a server.
---
- id: See the details about the active users. 
- last : Show last logins. 
- who : Display who is currently logged in the system.
- w : Same as who but with their current activities.
---
- getent group : Display a list of available groups on the system. Also cat /etc/group 
- groupadd [group_name] : Add a new user group to system.
- adduser [user_name] : Add a new user.
- usermod -aG [group_name] [user_name] : Add an existing user to a group. 
- sudo [command_to_be_executed_as_superuser]:Temporarily elevate user privileges to superuser or root using;
- userdel [user_name] : Delete a user
- usermod [user_name] : Change user attributes in linux such as : sudo - usermod -d /home/newhome user1
---
- yum is a package manager for Linux distributions that use the RPM
  package format, such as Fedora, Red Hat Enterprise Linux (RHEL), and CentOS. Ubuntu uses a different package format (.deb) and package manager (apt), so yum cannot be used on Ubuntu.:
- yum list installed : Display all installed packages for yum package manager. 
- yum search [keyword] 
- apt install package_name   : APT package manager for  
- apt-get remove package_name: 
---
- General process to install a package from source-code: 
  tar zxvf [source_code.tar.gz]
  cd [source_code]
  ./configure
  make
  make install
---
- Process related commands: 
- ps : A snapshot of the active processes
- pstree : Tree-like view of the active processes.
- pmap : Memory usage map of the processes. (Usage: pmap 3198)
- top : See all running processes
- bashtop, htop : Alternative application. (apt-get install bashtop) 
- kill : Terminate a linux process with the given ID
- pkill [proc_name]: 
---
- Background Service related commands: 
- bg : List and resume stopped jobs in the background:
- fg: Bring the most recently suspended job to the foreground:
- lsof : Display a complete list of open files by the processes running in memory. 
---
- System Management and Information : 
- uname: System core information.
- uname -r : Show system information
- uptime : Display how long the system has been running. 
- hostname: See the system hostname
- hostname -i : Show the system hostname with IP address.
- last reboot : List system reboot history. 
- date: See current system date time.
- timedatectl : Query and check the system clock.
- w : list logged in users.
- whoami : see which user we are using. 
- finger [user_name] : Show information about a particular user. 
---
- Disk usage 
- df - h : See free space and used space
- sudo fdisk -l : Display disk partitions, sizes and types
- findmnt : Display target mount point for all filesystem. 
---
- SSH :
- ssh user@host : Connect to a host as a user.
- ssh host : Connect securely via SSH default port 22.
- ssh -p [port] user@host : Connect to a host usin a particular port.
---
- File Permission:
- chmod 777,755,766 [file_name] (We will talk about the permissions later)
- chown [user] [file_name] : Change the ownership of a file
- chown [user]:[group] [file_name] : Change the owner and the group of a file. 
---
- Network Related Commands: 
- ip addr show  : List IP addresses and network interfaces
- ip address add [IP_address] : Assign an IP Address to interface eth0:
- ifconfig : Display IP addresses of all network interfaces.
- netstat -pnltu : See listening ports 
- netstat -nutlp : Show tcp and udp ports and their programs. 
- wget : wget https://wordpress.org/latest.zip
- nslookup [domain-name] : Receive information about an internet domain. (nslookup www.clarusway.com)
- curl -o [file_url] : save a file from a remote server. (curl https://wordpress.org/latest.zip -O
---
- Defining variables 
- let “MyVar”= 12, echo $MyVar : Assign value to a variable
- declare “MyVar”=44 echo $MyVar : Assign and display a bash variable.
---
- man ls : Display man pages for ls command
- history : A list of previously executed commands
- !! : run the last command
---
- dmesg : displays the boot messages, this is just like to loggers in programming languages. 
- cat /proc/cpuinfo : see the CPU information in detail.
- free -h : display the free memory in detail 
- lshw : hardware configuration 
- lsblk : some information about block devices
- lspci -tv : PCI devices in tree structure
- lsusb -tv : USB devices in tree structure
- dmidecode : hardware information in BIOS
- hdparm -i /dev/disk : display disk data
- hdparm -tT /dev/[device] : read speed test
- badblocks -s /dev/[device] : display bad blocks on disk
- fsck [disk-or-partition-location] : run a disk check
- locate name : find files or folders related with name
- grep [pattern] [file_name]: Search for a pattern or text in a specific file
- grep -r [pattern] [directory_name] : Search for a pattern or text in a directory
- find [/folder/location] -name [a]: List names that begin with a specified character [a] in a specified location [/folder/location] by using the find command.
- find [/folder/location] -size [+100M] : See files larger than a specified size [+100M] in a folder:

<br>

--- 

##### <span style="color:red;font-size:30">29. Investigation of the Linux Directory Structure </span>
  - / this is the top level root directory 
  - /bin : Essential user binaries 
  - /sbin : Essential system administration binaries.
  - /boot : Files needed to boot the system.
  - /cdrom: Temporary location for the cd-rom content (not standard)
  - /dev : Device files, linux treats devices as files. for ex (sda : sata drive), dev/null is special, no input-output, can be ignored.
  - /etc : configuration files exist here. 
  - /home: Home folder for each user exists here. Every user contains a folder in. 
  - /lib : Shared libraries, all applications use this folder as a common share folder. 
  - /lost+found : if a system crash happens, linux saves the content here if possible, next boot it should be checked if needed.
  - /media : Removable media treated as file again. 
  - /tmp : Temporary mount points. For instance if you mount a windows partition, it would be /mnt/windows.
  - /opt : The optional packages for apps that do not obey the standart file hierarchy.
  - /proc : Similar to dev, but more specific to running processes in memory, files created by those processes. 
  - /root : It is the home directory for the current user. which is distinct from the / system root directory. 
  - /run : it is a fairly new standard. it gives the apps to store transient storage area, like sockets and process ID’s. 
  - /srv : Service data, just like IIS in windows Apache HTTP Server’s data can be stored here. 
  - /usr : User binaries, read-only data. Non-essential applications, user specific applications.
  - /var : This is a writable counterpart of /usr directory. /var/logs are pretty much used to check application logs.

  **** Filesystem Hierarchy Standard (FHS) defines this structure, but it doesn’t mean that non-standard folders can’t exist.

<br>

--- 

##### <span style="color:red;font-size:30">30. project1 implementation</span>
    
Info: The purpose of this project is to create a project folder and manage the folders inside of it. Please follow the instructions step by step and read the instructions associated with every action taken.<br>

    pwd

Path of the working directory (pwd) command displays where we are. It displays the absolute address from the / folder.

    cd

cd command when used alone, takes the user from the current folder to the users home folder.

    mkdir project1
    cd project1
    mkdir website1 website2 website3

mkdir command creates a folder but multiple folder creation is also supported.

    touch /website3/main.html
    
Touch command can create an empty file in the desired directory.

    rmdir website3
    
rmdir command deletes an empty directory, the above command won't be able to delete website3 folder because it's not empty, main.html is inside of it. 

    rmdir website1 website2

rmdir command deletes website1 and website2 successfully, they are empty.

    rm -r website3

rm command deletes the file and folder if -r (recursively) option is provided.

END OF PROJECT1

--- 


##### <span style="color:red;font-size:30">31. project2 implementation</span>

Info : The purpose of this project is to demonstrate how to create and copy and move files/folders. Step by step perform the operations in linux bash shell.    
 
    pwd

Path of the working directory (pwd) command displays where we are. It displays the absolue address from the / folder.

    cd

cd command when used alone, takes the user from the current folder to the users home folder.
  
    mkdir project2  
    cd project2
    mkdir website1 website2
    
mkdir command creates directories passed as parameter

    touch website1/main.html

Touch command can create an empty file in the desired directory.

    echo "<!DOCTYPE html>" > website1/main.html

echo command writes "<!DOCTYPE html>" inside website1/main.html file.

    echo "<html><head></head><body></body></html>"  >> website1/main.html

The above echo command with >> operator appends new lines of text to the existing text.

    cat website1/main.html

cat command displays the content of the file.

    ls website1/main.html -al

ls command with a file specification displays the file details.

    echo "h3 { color : dodgerblue } " > website1/site.css

echo command creates and fullfills the content with above details. We could be creating the file with touch command and later open one of our favorite editor(nano, vim, VSCode, gedit, etc..) later modify and save our content as we needed.

    cat website1/main.html website1/site.css

cat command will display both file contents with the specified parameters above. 

    touch website1/1.html website1/2.html website1/3.html

touch command will create these 3 files

    ls website1/ -al

ls command displays the content of website1, with "all" and "list detailed" option

    ls website1/*.css

ls command will display all the files with css extension. 

    ls website1/ "*.html"

ls command will display all the files with html extension.

    ls website1/{1..5}.html
    cp website1/{1..5}.html website2/

cp command will copy only the main.html here, why?

    mv website1/m*{1..5}.html website2/

move command will only move 1 file, why?

    open website2/main.html

open command tries to open the file with the system associated application. 

END OF PROJECT2

--- 


##### <span style="color:red;font-size:30">32. project3 implementation</span>

Info : The purpose of this project is to investigate the file and folder attributes. Step by step perform the operations in linux bash shell.
 
    pwd	

Path of the working directory (pwd) command displays where we are. It displays the absolue address from the / folder.

    cd

cd command when used alone, takes the user from the current folder to the users home folder.

    mkdir project3
    cd project3   
    mkdir website1 website2 scripts

mkdir command creates directories passed as parameter

    touch scripts/installer.sh

Touch command can create an empty file in the desired directory.

    echo "echo This is an installer script" > scripts/installer.sh

echo command writes the message inside the installer.sh (script file).

    echo "top" >> scripts/installer.sh

The above echo command with >> operator appends new lines of text to the existing text.

    cat scripts/installer.sh -al

cat command displays the content of the file

    ./scripts/installer.sh

Try to run the script and see the error (permission denied)

    ls scripts/installer.sh -l

Display the installer.sh with the details.User-Group-Everyone is the sequence of attributes for the displayed information of our script.<br>
Read-Write-Execute is the sequence of the file attributes for the information of our script. 

    chmod 777 scripts/installer.sh

chmod command changes the attributes of the file as desired.

    chmod u=rw,og=r scripts/installer.sh

Updates the user/group/everyone as such.

    chmod uga=rwx installer.sh

Updates the permission for user/group/everyone rwx.

    chmod uga=rw installer.sh 

Updates the permission for user/group/everyone rw.

    chmod -R ugo=rw *.sh

Updates the read-write permissions for user/group/everyone

    chmod 664 *.sh

Updates all the files with sh extension as 664.

    mv installer.sh .installer.sh

mv command can be used to create hidden file/folder

    mv .installer.sh installer.sh 
  
mv command can be used to set visible for hidden file/folder.

END OF PROJECT3

--- 

##### <span style="color:red;font-size:30">33. project4 implementation</span>

Info : The purpose of this project is to provide an introduction to bash shell scripts. Step by step perform the operations in linux bash shell.
 
    pwd	
  
Path of the working directory (pwd) command displays where we are. It displays the absolue address from the / folder.

    cd

cd command when used alone, takes the user from the current folder to the users home folder.

    mkdir project4
    cd project4
    echo '#!/bin/bash' > script1.sh
    echo 'echo THIS IS SCRIPT 1' >> script1.sh
    echo 'echo Starting the execution of the script ...' >> script1.sh
    echo "#Using comments in scripts" >> script1.sh
    echo "printf "%d mul %f = %f\n" 6 6.0 36.0" >> script1.sh
    echo "gnome-terminal"
  
It's possible to run a command in a terminal as well.

    echo '#!/bin/bash' > script2.sh
    echo 'echo THIS IS SCRIPT 2' >> script2.sh
    echo 'book="Linux Shell Scripting"' >> script2.sh
    echo 'total_chapters=8' >> script2.sh
    echo 'number_of_pages=210' >> script2.sh
    echo 'average_pages_per_chapter=26,25' >> script2.sh
    echo 'echo "Book name - $book"' >> script2.sh
    echo 'echo "Number of Chapters - $total_chapters"' >> script2.sh
    echo 'printf "Total number of pages in book - $number_of_pages\n"' >> script2.sh
    echo 'printf "Average pages in each chapter - %-.2f\n" $average_pages_per_chapter' >> script2.sh
    chmod u=x script2.sh

END OF PROJECT4

--- 


##### <span style="color:red;font-size:30">34. project5 implementation</span>

Info : The purpose of this project is to read some details from a shell script. Step by step perform the operations in linux bash shell.
 
    pwd	
  
Path of the working directory (pwd) command displays where we are. It displays the absolue address from the / folder.

    cd

cd command when used alone, takes the user from the current folder to the users home folder.

    mkdir project5
    cd project5
    nano script.sh

open up nano editor or any other editor that you prefer to fill these lines below. 

    #Reading variables from user input and using them
    #!/bin/bash
    #Filename: inputs.sh
    #Description: Reading the user input

    read -p "What is your name? "    # -p allows to prompt user a message
    echo Hello $REPLY, please follow the instructions below;

    read -s -p "Enter your secret key:" key # -s doesn't echo input in console
    echo $key

    read -p "Enter filename to be searched:"
    filename=$REPLY
    read -p "Enter path for search:" path
    echo "File $filename search matches to"
    find $path -name $filename

END OF PROJECT5

--- 

