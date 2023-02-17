The purpose of this workout is to understand the details of staging area and commits

1 ] cd Repositories
    Open a terminal and go to the folder that contains your repositories, called "Repositories"

2 ] Create a folder called Project2
    
3 ] cd Project2
    Get inside the Project2 folder.

4 ] git init
    This command converts Project2 folder into an actual repository.  

5 ] Open the Project2 folder in VSCode
  
6 ] Create an empty file called index1.html in VSCode
   
7 ] <h1>This is index1.html in first commit.</h1>
    Write the above line in index1.html
   
8 ] git status
    Go to terminal and type git status, do you see index1.html displayed in red?
  
9 ] git add . 
    Add the current file with git add . or git add index1.html 
    
10 ] git commit -m "index1.html committed"
    Create the first commit with the message above

11 ] git log 
    Display the details about existing commits.

12 ] Create an empty file called index2.html in VSCode

13 ] <h1>This is index2.html in second commit.</h1>
    Write the above line in index2.html

14 ] git add .
    Add the current file with git add . or git add index2.html

15 ] git commit -m "index2.html committed"
    Create the second commit with the message above

16 ] Create an empty file called index3.html in VSCode
   
17 ] <h1>This is index3.html in third commit.</h1>
    Write the above line in index3.html

18 ] git status 
    Do you see all the commits that we have made till now? There should be no more changes displayed. 

19 ] <h2>This is index1.html in fourth commit.</h2>
    Add the above line in index1.html, it will be a record that will exist in the 4th commit.

20 ] git add .
    Add the current file with git add . or git add index1.html

21 ] git commit -m "This is the fourth commit that contains changes in index1.html only"
    Do the commit with the explanation.

22 ] Add these line in all the files, index1.html, index2.html, index3.html
    <h1>This is the fifth commit.</h1>

23 ] git status
    See that now we have 3 files modified, they are all waiting to be added to the staging area.

24 ] git add .
    Add all 3 files to the indexing/staging area.

25 ] git commit -m "This is the fifth commit that contains 3 file updates."

26 ] git log --oneline --graph --all
     See all the commits

27 ] git checkout [HASHCODE] # (IMPORTANT : Select the first commit to go to)
     Entering 2 bytes of the hash code will be enough. Observe the file changes.

28 ] git log --oneline --graph --all
     How many commits do you see?
 
29 ] Add these line in all the files, index1.html, index2.html, index3.html
    <h1>This is the sixth commit.</h1>

30 ] Create a file called main.js, write "This is a js file for the 6th commit" inside of it. 

31 ] git status
     Do you see all the files and the main.js inside the changeset?

32 ] git add .
     Add all the files/changes in the staging area.

33 ] Later remove main.js from the staging area, we may be unsure about the changes, we will add it in the 7th commit. 
     git reset HEAD -- main.js   or maybe unstage all changes by using;
     git reset HEAD -- .
     Observe by git status

34 ] Create another folders in Project2 called "media" and "css"
     Inside media and css create files such as "sample.mp4" and "sample.css"
     Add "This is for the 6th commit" inside these files.

35 ] git add .
     Add all the modifications back to the staging area and do the commit. 

36 ] git commit -m "This is for the 6th commit"
     Add all the changes of files and folders to the 6th commit

37 ] git checkout [HASHCODE] # (IMPORTANT : Select the first commit to go to)
     Do you see the files and folders from the 6th commit?

38 ] git checkout master
     Go to the latest commit back again.

39 ] go to your Github account and create a new repository called Project2

40 ] git remote add origin "" (link of your repository)
    
41 ] git remote -v
     git remote show
     git remote remove origin (if needed)
     Display pull/push endpoints.
   
42 ] git push -f -u origin master
     git push --set-upstream origin master
   
43 ] git log --graph --oneline --all
     Display a list of the repository history. 
    
44 ] git status -s -b -v  short branch verbose
     git status -s -b -v --show-stash
   
45 ] Summary:
    Created a repository called Project2.
    Created 6 commits.
    Introduced remote repository to git.
    Pushed our first code to Github.

