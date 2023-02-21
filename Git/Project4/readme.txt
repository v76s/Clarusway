The purpose of this workout is to understand the details of conflicts.

1 ] cd Repositories
    Open a terminal and go to the folder that contains your repositories, called "Repositories"

2 ] Create a folder called Project4
    
3 ] cd Project4
    Get inside the Project4 folder.

4 ] git init
    This command converts Project4 folder into an actual repository.  

5 ] Open the Project4 folder in VSCode
  
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

16 ] git branch 
    Display a list of the existing branches.

17 ] Create these new branch by executing these commands ; 
    git branch feature1   

18 ] git checkout feature1
    Switch your current branch to another branch by the command above. 

19 ] Create a new html file called feature1.html
   
20 ] <h1>This is feature1.html in feature1 branch</h1>
    Write the above line in feature1.html

21 ] git add .
    Add the feature1.html in feature1 branch 

22 ] git commit -m "feature1.html committed in feature1 branch"
    Create the commit with the message above

23 ] git checkout master
    Get back to master branch, do you see the newly created feature1.html in the folder? Where is it?

24 ] git checkout feature1  / git switch feature1 
    Get back to feature1 branch and see that your feature1.html was not actually deleted.

25 ] git log --oneline --graph --all
     See all the commits

26 ] use git switch, git checkout for all available branches.

27 ] Go to feature1 branch again, make several commits, display graphically.

28 ] git checkout master
     Get back to the master branch

29 ] git merge feature1
     Invite the updates to master branch

30 ] go to your Github account and create a new repository called Project4

31 ] git remote add origin "" (link of your repository)
    
32 ] git remote -v
     git remote show
     git remote remove origin (if needed)
     Display pull/push endpoints.
   
33 ] git push -f -u origin master
     git push --set-upstream origin master
   
34 ] git log --graph --oneline --all
     Display a list of the repository history. 
    
35 ] git status -s -b -v  short branch verbose
     git status -s -b -v --show-stash

36 ] Create several feature/bugfix commits and push them to the repositories,
     push different repositories. git push origin feature1, git push origin master.
   
37 ] Summary:
    Created a repository called Project3.
    Created 6 commits.
    Introduced remote repository to git.
    Pushed our first code to Github.

