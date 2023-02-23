The purpose of this workout is to understand the details of using stashes.

1 ] cd Repositories
    Open a terminal and go to the folder that contains your repositories, called "Repositories"

2 ] Create a folder called Project5
    
3 ] cd Project5
    Get inside the Project5 folder.

4 ] git init
    This command converts Project5 folder into an actual repository.  

5 ] Open the Project5 folder in VSCode
  
6 ] Create an empty file called index1.html in VSCode
   
7 ] <h1>This is index1.html in master branch first commit.</h1>
    Write the above line in index1.html
   
8 ] git status
    Go to terminal and type git status, do you see index1.html displayed in red?
  
9 ] git add . 
    Add the current file with git add . or git add index1.html 
    
10 ] git commit -m "index1.html committed in master branch"
    Create the first commit with the message above

11 ] git log 
    Display the details about existing commits.

12 ] Create an empty file called index2.html in VSCode

13 ] <h1>This is index2.html in master branch second commit.</h1>
    Write the above line in index2.html

14 ] git add .
    Add the current file with git add . or git add index2.html

15 ] git commit -m "index2.html committed in master branch"
    Create the second commit with the message above

16 ] "Some changes yet not committed"
     Write the above text in index1.html and index2.html

17 ] git status
     We need to see these changes as red.
    
18 ] Create a stash for these changes but not commit.
     git stash save "Temporary Changes"

19 ] git checkout [HASH OF THE FIRST COMMIT]
     observe that we are in the first commit. 

20 ] git checkout master
     Get back to the latest commit. 

21 ] git stash apply
     Apply the active stash, observe the uncommitted changes.

22 ] Observe the 
     git stash list
     git stash save "The comment"
     git stash pop
     git stash apply
     git stash drop 0

23 ] git reset . --hard
     We forget about the changes, this option can be used if we'd like 
     to ignore the changes.

24 ] go to your Github account and create a new repository called Project4

25 ] git remote add origin "" (link of your repository)
    
26 ] git remote -v
     git remote show
     git remote remove origin (if needed)
     Display pull/push endpoints.
   
27 ] git push -f -u origin master
     git push --set-upstream origin master
   
28 ] git log --graph --oneline --all
     Display a list of the repository history. 
    
29 ] git status -s -b -v  short branch verbose
     git status -s -b -v --show-stash

30 ] Create several feature/bugfix commits and push them to the repositories,
     push different repositories. git push origin feature1, git push origin master.

31 ] Update some documents in Github. 
     git pull.
   
32 ] Summary:
    Created a repository called Project5.
    Created commits.
    Introduced remote repository to git.
    Pushed our code to Github.

