# <center>Clarusway Linux Session Notes</center>

**<span style="color:Orange text-align: center;">All the titles that we covered in Linux Sessions**</span>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">1. Linux-Windows comparison</span>

    You may find the comparison link below;

[Windows-Linux Comparison](http://www.linuxandubuntu.com/home/10-reasons-why-linux-is-better-than-windows#:~:text=Linux%20can%20be%20installed%20and,as%20per%20the%20user%20requirements.)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">2. Linux Distro List</span>

    The complete list of recent Linux distributions:

[Linux Distribution Treeview](https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg)<br/>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">3. Using Linux on Different Platforms</span>

    Alternatives of Linux on different platforms:

LMS : https://lms.clarusway.com/mod/lti/view.php?id=1317<br>
WSL : https://www.microsoft.com/en-us/search/shop/apps?q=wsl<br>
VirtualBox : https://www.virtualbox.org/wiki/Downloads<br>
Docker : https://www.docker.com/products/docker-desktop/<br>
Emulators :
https://www.qemu.org/download/<br>
http://topologi-linux.sourceforge.net/index.php?menu=3

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">4. Debian based light-weight Linux distributions</span>

    Please follow the link to try some alternatives of light-weight linux distributions:

https://itsfoss.com/lightweight-linux-beginners/ # Main link that contains all the links below;

Some examples;<br>
https://q4os.org/downloads1.html : q4OS linux => 680MB iso file. <br>
https://www.slax.org/#getslax : slax linux => 278MB iso file. <br>
https://ubuntu-mate.org/download/ : Ubuntu Mate => 2.5GB iso file. <br>
https://zorin.com/os/download/16/lite/ : Zorin OS => 2.4GB iso file. <br>
https://peppermintos.com/guide/downloading/ : Peppermint => 1.3GB iso file.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">5. How to use WSL on Linux</span>

    A common way for using Linux on Windows is “WSL” which stands for “Windows Subsystem for Linux”. This alternative has almost all the capabilities of a Linux distro. At least it is more than enough for our purposes in this course.

Please check the details in /media/How to install WSL2 on windows.pdf file.

https://aka.ms/wslstore

We can download the available distributions on this link : https://www.microsoft.com/en-us/search/shop/apps?q=wsl

Steps to follow for WSL:

- wsl --install<br>
- reboot the computer<br>
- wsl --list --verbose (will display a list of installed Linux distro's on your computer)<br>
- wsl --list --online (will display a list of available online Linux distro's)<br>
- wsl --install -d debian<br>
- wsl --update (will install updates if available)<br>

- sudo apt-get install gedit -y (install an application such as gedit in Linux)<br>
- once gedit is installed, it will be available to run from start menu of Windows as well.<br>
- if you would like to have GUI also to be available in WSL2 than we need to do the
  configuration on one of these links: <br>
  https://youtu.be/8SuERIEJJUA<br>
  https://www.shogan.co.uk/how-tos/wsl2-gui-x-server-using-vcxsrv/<br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">6. How to install Ubuntu in VirtualBox?</span>

    Please follow the link below. Basically we need to install VirtualBox application in our host computer and later download the appropriate .iso file for Ubuntu.

[Ubuntu in VirtualBox](https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">7. Some of the webserver host links on Linux</span>

    You may find the famous linux http servers in links below;

[Apache HTTP Server](https://httpd.apache.org/)<br>
[NGinx](https://www.nginx.com/resources/glossary/nginx/)<br>
[Lighttpd](https://www.elegantthemes.com/blog/wordpress/lighttpd-web-server)<br/>
[Apache Tomcat](https://tomcat.apache.org)<br>
[Open Source Servers](https://opensource.com/business/16/8/top-5-open-source-web-servers)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">8. Investigation of the Linux Directory Structure </span>

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

\*\*\*\* Filesystem Hierarchy Standard (FHS) defines this structure, but it doesn’t mean that non-standard folders can’t exist.

<br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">9. 'pwd'</span>

    'pwd' command displays the current path of the working directory.

Usage:

- Open terminal
- Type 'pwd' to see your current working path directory.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">10. 'ls'</span>

    'ls' command displays the list of the files and folders in the current directory

Usage:

- Open terminal<br>
- Type 'ls' to see the current directory content.<br>
- Type 'ls -a' to see all the files/folders(including hidden)<br>
- Type 'ls -l' to see all the files/folders in detail.<br>
- Type 'ls -s' to see all the files/folders listed.<br>
- Type 'ls -t' to see all the files/folders sorted by time.<br>
- Type 'ls -alt' to see all the files/folders(including hidden) in detail, sorted by time(newest first).

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">11. 'cd'</span>

    'cd' command navigates from one directory to another.

Usage:

- Open terminal<br>
- cd [dir1] Navigates to a new directory called dir1.<br>
  Example : cd /var/log/installer
- cd .. Navigates to one level up.<br>
- cd / Navigates to the root directory<br>
- cd ~ Navigates to the home directory of the current logged in user.<br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">12. 'mkdir'</span>

    mkdir creates a new directory, also it's possible to create multiple directories.

Usage:

- Open Terminal<br>
- mkdir [dir] create a new directory<br>
- mkdir [dir1] [dir2] [dir3] creates 3 directories.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">13. 'rmdir'</span>

    'rmdir' [dir1] deletes the directory only if it's empty.
    If it contains some items inside, it will display an error.

Usage:

- Open Terminal<br>
- rmdir [dir1] deletes the directory if existing. If 'dir1' contains some files and folders inside, it will display an error.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">14. 'touch'</span>

    The purpose of the 'touch' command is to create a single or multiple files.

Usage:<br>

- Open Terminal
- touch [file1] [file2] [file3] Creates a single or multiple files as requested.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">15. 'rm'</span>

    rm [file] command deletes a file.

Usage:<br>

- touch testfile.css
- rm testfile.css (Remove the file)
- mkdir Test (Create a folder)
- touch Test/testfile.css
- rm -rf Test (Remove a directory recursively without requiring confirmation with force -f flag.)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">16. 'cp'</span>

    cp command copies a source file as a target file in the same or a different directory.

Usage:<br>

- Open Terminal
- cp [source_file] [target_file] copies the source file as a target file. It's also possible to rename the file while copying.<br>
  Example:cp /var/log/system.txt /home/user/logs.txt (renames the file from system.txt to logs.txt while copying)
- cp -i override the existing file with interaction.<br>
- cp -n override the existing file without interaction.
  <br>
  It's possible to rename a directory while copying as well:<br>
- mkdir TestDir<br>
- cp -r TestDir /tmp/TestNewDir (-r ensures the recursive operation)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">17. 'mv'</span>

    The purpose of the mv command is to move the file from source to target location. While moving it, it's also possible to rename the file.
    mv [source_file] [target_file]

Usage:<br>

- Open Terminal
- mv /var/log/memory.txt /home/user/logs.txt (moves the source file to target directory, also renames it as 'logs.txt' while moving it.)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">18. 'echo'</span>

    The purpose of echo command is to display a message. Re-direction operator makes it possible to save the message in a file as well.

Usage:<br>

- Open Terminal<br>
- echo "message" displays the message<br>
- echo "message" > [target_file] Saves the message to file.<br>
- echo "message" >> [target_file] Saves but actually appends the message to the file content, previous existing message will not be cleared.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">19. 'cat'</span>

    How to use the 'cat' command:

Usage:<br>

- Open Terminal
- cat [file1] displays the content of the file.<br>
- cat [file1] [file2] ... [fileN] displays the contents of the files sequentially, [file1] first, [file2] later, [file3] last, [fileN] ...
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">20. 'ls' (Using filters)</span>

    How to use the 'ls' command with single/multiple character filters:

Usage:<br>

- Open Terminal
- touch amr.txt (Create a text file)
- touch html1.txt html2.txt html3.txt (Create other text files)
- ls a*.* displays all the files starting with 'a' character.<br>
- ls ?tml\*.txt displays the contents of the files that starts with any character but ends with "tml.txt"
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">21. 'find'</span>

    Find command helps us to find a specific file or a pattern.

Usage:<br>

- Open Terminal<br>
- touch 1.js file1.txt see.log<br>
- find -name ‘\*.js’ : Find all files with js extension<br>
- find folder1 folder2 -name [file1.txt] : Find file1.txt in folder1 and folder2<br>
- find . -type f -size +100c : Find all files that are greater than 100bytes
  <br>
  Example:<br>
  find /home/clarusway -name “\*.js” # Single or double quotes will work.<br>
  find bin/ -name ‘see’
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">22. 'man'</span>

    "man" command displays info about the usage of a specific command.

Usage:<br>

- Open Terminal
- man dmesg : Display info about dmesg command
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">23. 'open'</span>

    "open" command executes the file with the registered application.

Usage:<br>

- Open Terminal
- touch 1.html clarusway.js latest.zip (Create the files)
- open 1.html (Open registered app for html extension)<br>
- open /home/clarusway/Documents/clarusway.js (Open registered app for .js extension<br>
- open latest.zip (Open registered app for .zip extension)
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">24. 'alias'</span>

    "alias" command creates a shortcut for a command.

Usage:<br>

- Open Terminal
- alias ll=’ls -al’ Here typing ll lists the files with all and detail list.
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">25. 'more' and 'less'</span>

    "less" command displays the file content similar to cat command but from top to a limit.
    "more" command could be used for this purpose as well.

Usage:<br>

- Open Terminal
- less /var/log/syslog (Observe the content of the long file by pressing enter key, press 'q' to quit)
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">26. 'head' and 'tail'</span>

    "tail" command displays the file content similar to cat command but the last 10 lines, useful to observe log files.
    "head" command displays the file content similar to cat command but the first 10 lines.

Usage:<br>

- Open Terminal
- tail -f /var/log/system.log (Display last 10 lines)
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">27. 'grep'</span>

    "grep" command shows the occurance of a searched text entry in a file.
    grep [pattern] [file_name]: Search for a pattern or text in a specific file
    grep -r [pattern] [directory_name] : Search for a pattern or text in a directory

Usage:

- Open Terminal
- grep transaction /var/log/syslog (Searches for the keyword 'transaction' in /var/log/syslog file. )

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">28. 'systemctl'</span>

    "systemctl" command displays a list of the background services.

Usage:<br>

- Open Terminal<br>
- systemctl –type=service<br> (Display all background services available)
- systemctl –type=service –state=running<br>(Display all background services that are running)<br>

It's possible to assign an alias and use it accordingly as well:<br>

- alias running_services='systemctl list-units --type=service --state=running'
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">29. 'gpg'</span>

    "gpg" command is used to encrypt and decrypt a file.

Usage:<br>

- Open Terminal<br>
- cd (Go to home folder)
- touch text.txt
- echo "This is a test" > test.txt<br>
- gpg -c test.txt (encrypted file will be test.txt.gpg)
- gpg test.txt.gpg (decrypt the file back)
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">30. 'wc'</span>

    "wc" wordcount command is used to display the amount of lines/words/characters in a file.

Usage:<br>

- Open Terminal<br>
- cd (Go to home folder)
- touch test.txt
- echo "This is a test with
  multiple lines and many words inside of it." > test.txt<br>
- wc test.txt
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">31. 'shred'</span>

    "shred" command deletes the file irreversably. The file still continues to exist but its content is totally filled with random data.

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- touch test.txt
- echo "This is a test with" > test.txt
- cat test.txt
- ls test.txt
- shred test.txt (Deleted irreversably, content of the file can not be recovered)
- cat test.txt (to see the content of the file)
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">32. 'diff'</span>

    "diff" command compares and displays the differences in 2 files.

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- touch file1.txt
- echo "This is for file1" > file1.txt
- echo "This is for file2" > file2.txt
- diff file1.txt file2.txt (Display the differences in 2 files)
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">33. 'source'</span>

    "source" command reads and executes the content of a file, similar to a script file.

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- touch file1.txt
- echo "clear" > file1.txt (clear the screen)
- echo "top" > file1.txt
- source file1.txt (The content of file1.txt will be considered as a script file, lines will be executed one by one.)
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">34. 'sort'</span>

    "source" command sorts the file content and displays the results, optionally we can save the sorted results in another file.

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- touch file1.txt
- Write some numbers in file1.txt by using nano editor.
- sort file1.txt > file2.txt
  <br>

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">35. 'tar' and 'gzip'</span>

    "tar" command compresses/decompresses a file.
    tar cf [compressed_file.tar] [file_name] : Compress  an existing file.
    tar xf [compressed_file.tar] : Decompress an existing tar file.
    tar czf [compressed_file.tar.gz]: Create a gzip compressed tar file.
    gzip [file_name] : compress a file with .gz extension.

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- touch file1.txt
- echo "Tar file contents" > file1.txt
- tar cf compressed.tar file1.txt (Compress the file)
- tar xf compressed.tar (Decompress the file)
- tar czf compressed.tar (Gunzip the compressed file)
- gzip file1.txt (compress the file with .gz extension)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">36. 'scp'</span>

    "scp" secure copy command copies a source file to another computer/server folder.
    scp [file_name.txt] [server/tmp]

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- touch file1.txt
- echo "Tar file contents" > file1.txt
- scp -r test.jpg volkan@192.168.1.84:~/ (Here we copy file1.txt to the user volkan at 192.168.1.84 machine's root folder. We will need to provide the current users password for it.)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">37. 'id' and 'last' and 'who' and 'w'</span>

    "id" Shows the details about active users.
    "last" Shows details about recent logins.
    "who" Displays who is currently logged in to the system.
    "w" Same as who command but with activities of users.

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- id (Display details about active users.)
- last (Detailed logins)
- who (Current users login details)
- w (Current logged in users with their activities)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">38. Process related commands</span>

    ps : A snapshot of the active processes
    pstree : Tree-like view of the active processes.
    pmap : Memory usage map of the processes. (Usage: pmap 3198)
    top : See all running processes
    bashtop, htop : Alternative application. (apt-get install bashtop)
    kill : Terminate a linux process with the given ID
    pkill [proc_name]:
    fs : Display foreground services.
    bg : Display background services.
    lsof : Display a list of open files by the services.

Usage:<br>

- Open Terminal
- cd (Go to home folder)
- ps (Display processes)
- pstree (Tree-like view of the active processes.)
- pmap 3198
- top (See all running processes)
- bashtop (Alternative application, install by : apt-get install bashtop)
- kill 3198 (Terminate a linux process with the given ID
- pkill application (pkill by name [proc_name])
- fs (Foreground services)
- bg (Background services)
- lsof (Display a complete list of open files.)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">39. General process to install a package by using source code</span>

    tar zxvf [source_code.tar.gz] (Extract downloaded source)
    cd [source_code]
    ./configure
    make
    make install

- The package is generally in tar format. We download the desired package from a repository such as Github. Later we extract it, use the configure script to do the necessary configuration, later use make to compile the application. Last step is to compile it with the install option.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">40. 'apt'</span>

    "apt" is a package manager for Debian based distributions, lets us to install or remove the applications.
    apt install package_name
    apt-get remove package_name

Usage:<br>

- apt install mc (install Midnight Commander)
- apt-get remove mc (Remove Midnight Commander)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">41. 'dmesg'</span>

    "dmesg" displays the boot messages, this is just like to loggers in programming languages.

Usage:<br>

- Open Terminal
- sudo dmesg (Displays the boot messages)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">42. System Management and Information</span>

- uname: Displays system core information.
- uname -r : Displays system information
- uptime : Display how long the system has been running.
- hostname: See the system hostname
- hostname -i : Show the system hostname with IP address.
- last reboot : List system reboot history.
- date: See current system date time.
- timedatectl : Query and check the system clock.
- w : list logged in users.
- whoami : see which user we are using.
- finger [user_name] : Show information about a particular user.
- history : Display the list of previously executed commands.
- !! : Execute the latest command once again.
- cat /proc/cpuinfo : see the CPU information in detail.
- free -h : display the free memory in detail

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">43. User and Group Management</span>

- getent group : Display a list of available groups on the system. Also cat /etc/group
- groupadd [group_name] : Add a new user group to system.
- adduser [user_name] : Add a new user.
- usermod -aG [group_name] [user_name] : Add an existing user to a group.
- sudo [command_to_be_executed_as_superuser]:Temporarily elevate user privileges to superuser or root.
- userdel [user_name] : Delete a user
- usermod [user_name] : Change user attributes in linux such as : sudo - usermod -d /home/newhome user1

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">44. Disk Usage</span>

- df - h : See free space and used space
- sudo fdisk -l : Display disk partitions, sizes and types
- findmnt : Display target mount point for all filesystem.
- hdparm -i /dev/disk : display disk data
- hdparm -tT /dev/[device] : read speed test
- badblocks -s /dev/[device] : display bad blocks on disk
- fsck [disk-or-partition-location] : run a disk check

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">45. Hardware Related Commands</span>

- lshw : Hardware configuration
- lsblk : Some information about block devices
- lspci -tv : PCI devices in tree structure
- lsusb -tv : USB devices in tree structure
- dmidecode : Display Hardware information in BIOS

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">46. Network Related Commands</span>

- ip addr show : List IP addresses and network interfaces
- ip address add [IP_address] : Assign an IP Address to interface eth0:
- ifconfig : Display IP addresses of all network interfaces.
- netstat -pnltu : See listening ports
- netstat -nutlp : Show tcp and udp ports and their programs.
- wget : wget https://wordpress.org/latest.zip
- nslookup [domain-name] : Receive information about an internet domain. (nslookup www.clarusway.com)
- curl -o [file_url] : save a file from a remote server. (curl https://wordpress.org/latest.zip -O

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">47. SSH Connection</span>

- ssh user@host : Connect to a host as a user.
- ssh host : Connect securely via SSH default port 22.
- ssh -p [port] user@host : Connect to a host usin a particular port.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">48. File Related Commands</span>

- chmod 777,755,766 [file_name]<br>
  chmod command changes the attributes of the file for the users and groups.<br>
  For Ex: Let's evaluate 754<br>
  7 = 111 in binary: Read = 1, Write = 1, Execute = 1 for group.<br>
  5 = 101 in binary: Read = 1, Write = 0, Execute = 1 for current user.<br>
  4 = 100 in binary: Read = 1, Write = 0, Execute = 0 for others.<br>  
  The sequence is :  
  group/user/others

- chown [user] [file_name] : Change the ownership of a file
- chown [user]:[group] [file_name] : Change the owner and the group of a file.

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">49. Using Scripts</span>

    Bash scripts are used to execute multiple lines of commands.

- Script1:<br>
  Write the content to file: script1.sh:<br>
  
        #!/bin/bash
        #Echo and printf commands
        printf '%d mul %f = %f\n' 6 6,0 36,0
    
- chmod +x script1.sh
- ./script1.sh (Run the script)

- Script2:<br>
  Write the content to file: script2.sh:<br>
  
        #!/bin/bash
        echo 'Basic math formatting'
        printf '%-7d %-7s %-7.2f =\t%-7.2f\n' 23 plus 5,5 28,5
        printf '%-7.2f %-7s %-7d =\t%-7.2f\n' 50,50 minus 20 30,50
        printf '%-7d %-7s %-7d =\t%-7d\n' 10 mul 5 50
        printf '%-7d %-7s %-7d =\t%-7.2f\n' 27 div 4 6,75

- chmod +x script2.sh
- ./script2.sh (Run the script)

- Script3:<br>
  Write the content to file: script3.sh:<br>

        #Using variables
        #!/bin/bash
        book="Linux Shell Scripting" # Stores string value
        total_chapters=8 # Stores integer value
        number_of_pages=210 # Stores integer value
        average_pages_per_chapter=26,25 # Stores float value
        printf 'Number of pages: %-7.2f\n'
        $average_pages_per_chapter

- chmod +x script3.sh
- ./script3.sh (Run the script)

Script4:<br>
- Write the content to file: script4.sh:<br>
  
        #The unset script command
        #!/bin/bash
        #Filename: unset.sh
        #Description: Unsetting value of a variable

        fruit="Apple"
        quantity=6
        echo "Fruit = $fruit , Quantity = $quantity"
        unset fruit
        echo "Fruit = $fruit , Quantity = $quantity"

- chmod +x script4.sh
- ./script4.sh (Run the script)

Script5:<br>
- Write the content to file: script5.sh:<br>
- 
        #Definition and usage of constant variables 
        #!/bin/bash
        #Filename: constant.sh
        #Description: constant variables in shell

        readonly text='Welcome to Linux Shell Scripting'
        echo $text
        declare -r number=27
        echo $number
        text='Welcome'

- chmod +x script5.sh
- ./script5.sh (Run the script)

Script6:<br>
- Write the content to file: script6.sh:<br>
  
        #Reading variables from user input and using them 
        #!/bin/bash
        #Filename: constant.sh
        #Description: Reading the user input

        read -p 'Enter Name, Surname, Password : ' name loginname password
        echo $name $loginname $password

        read -p -s 'Enter password hidden: ' password
        echo $password

- chmod +x script6.sh
- ./script6.sh (Run the script)

Script7:<br>
- Write the content to file: script7.sh:<br>
- 
        #A sample script that searches a file  
        #!/bin/bash
        #Filename: read.sh
        #Description: Find a file in a path entered by user

        read -p 'Enter filename to be searched:'
        filename=$REPLY
        read -p 'Enter path for search:' path
        echo 'File $filename search matches to'
        find $path -name $filename

- chmod +x script7.sh
- ./script7.sh (Run the script)
  

Script8:<br>
- Write the content to file: script8.sh:
  
        #The if / fi usage
        #!/bin/sh

        a=10
        b=20

        if [ $a == $b ]
        then
            echo "a is equal to b"
        else
            echo "a is not equal to b"
        fi

- chmod +x script8.sh
- ./script8.sh (Run the script)


Script9:<br>
- Write the content to file: script9.sh:<br>
  
        #The while do done
        #!/bin/bash
        x=1
        while [ $x -le 5 ]
        do
        echo "Welcome $x times"

        x=$(( $x + 1 ))
        done

- chmod +x script9.sh
- ./script9.sh (Run the script)


Script10:<br>
- Write the content to file: script10.sh:<br>
- 
        #!/bin/sh
        #if and while usage
        a=0
        while [ "$a" -lt 10 ]    # this is loop1
        do
            b="$a"
            while [ "$b" -ge 0 ]  # this is loop2
        do
            echo -n "$b "
            b=`expr $b - 1`
        done
            echo
        a=`expr $a + 1`
        done

- chmod +x script10.sh
- ./script10.sh (Run the script)


Script11:<br>
- Write the content to file: script11.sh:<br>
  
        #!/bin/bash
        Daytime=$(date)
        echo "Opening hours for $Daytime ..."
        case "$Daytime" in
            Mon)
            echo "09:00 - 17:30"
            ;;
            Tue)
        echo "09:00 - 17:30"
            ;;
            Wed)
        echo "09:00 - 12:30"
            ;;
            Thu)
        echo "09:00 - 17:30"
            ;;
            Fri)
        echo "09:00 - 16:30"
            ;;
            Sat)
        echo "09:30 - 16:00"
            ;;
            Sun)
        echo "Closed all day"
            ;;
            *)
            ;;
        esac

- chmod +x script11.sh
- ./script11.sh (Run the script)


Script12:<br>

- Write the content to file: script12.sh:<br>
  
        #!/bin/sh    
        Hello () {
            echo "Hello World"
        }    
        Hello

- chmod +x script12.sh
- ./script12.sh (Run the script)


Script13:<br>
- Write the content to file: script13.sh:<br>
  
        #!/bin/bash
        shopt -s nocasematch --
        echo "Enter month: "
        read month
        case "$month" in
            February)
                echo "28/29 days in $month" ;;
            April | June | September | November)
                echo "30 days in $month" ;;
            January | March | May | July | August | October | December)
                echo "31 days in $month" ;;
            *)
                echo "Invalid month entry : $month" ;;
        esac

- chmod +x script13.sh
- ./script13.sh (Run the script)


Script14:<br>
- Write the content to file: script14.sh:<br>

        #!/bin/bash
        echo "Enter a number between 1..3 : "
        read Number
        case $Number in
            "1")
            echo "1 entered ... " ;;
            "2")
            echo "2 entered ... " ;;
            "3")
            echo "3 entered ... " ;;
            *)
            echo "Invalid entry ... " ;;
        esac

- chmod +x script14.sh
- ./script14.sh (Run the script)


Script15:<br>
- Write the content to file: script15.sh:<br>

        #!/bin/bash
        for File in $(ls)
        do 
        Extension=${File##*.}

        case "$Extension" in
            sh) 
                echo "Shell script: $File";;
            md) 
                echo "Markdown file: $File" ;;
            png) 
                echo "PNG file: $File" ;;
            *) 
                echo "Unknown file: $File";;
        esac
        done

- chmod +x script15.sh
- ./script15.sh (Run the script)

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">50. Project1 implementation</span>

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

##### <span style="color:red;font-weight:bold;font-size: 30px;">51. Project2 implementation</span>

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

    echo '<!DOCTYPE html>' > website1/main.html

echo command writes '<!DOCTYPE html>' inside website1/main.html file.

    echo '<html><head></head><body></body></html>'  >> website1/main.html

The above echo command with >> operator appends new lines of text to the existing text.

    cat website1/main.html

cat command displays the content of the file.

    ls website1/main.html -al

ls command with a file specification displays the file details.

    echo 'h3 { color : dodgerblue } ' > website1/site.css

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

##### <span style="color:red;font-weight:bold;font-size: 30px;">52. Project3 implementation</span>

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

Display the installer.sh with the details.User-Group-Other is the sequence of attributes for the displayed information of our script.<br>
Read-Write-Execute is the sequence of the file attributes for the information of our script.

    chmod 777 scripts/installer.sh

chmod command changes the attributes of the file as desired.

    chmod u=rw,og=r scripts/installer.sh

Updates the user/group/others as such.

    chmod ugo=rwx installer.sh

Updates the permission for user/group/others rwx.

    chmod ugo=rw installer.sh

Updates the permission for user/group/others rw.

    chmod -R ugo=rw *.sh

Updates the read-write permissions for user/group/others

    chmod 664 *.sh

Updates all the files with sh extension as 664.

    chmod -R ugo=rwx *.sh

Recursively assigns the attributes to the file types

    mv installer.sh .installer.sh

mv command can be used to create hidden file/folder

    mv .installer.sh installer.sh

mv command can be used to set visible for hidden file/folder.

END OF PROJECT3

---

##### <span style="color:red;font-weight:bold;font-size: 30px;">53. Project4 implementation</span>

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

##### <span style="color:red;font-weight:bold;font-size: 30px;">54. Project5 implementation</span>

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
