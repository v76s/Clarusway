The purpose of this workout is to understand the details of using cherry-pick.

1 ] cd Repositories
    Open a terminal and go to the folder that contains your repositories, called "Repositories"

2 ] Create a folder called Project7
    
3 ] cd Project7
    Get inside the Project7 folder.

4 ] git init
    This command converts Project5 folder into an actual repository.  

5 ] Open the Project7 folder in VSCode
  
6 ] Create an empty file called index1.html in VSCode
   
7 ] "First commit in master branch"
    Write the above line in index1.html, stage and commit it with the same message. 

8 ] "Second commit in master branch"
    Write the above line in index1.html, stage and commit it with the same message. 

9 ] "Third commit in master branch"
    Write the above line in index1.html, stage and commit it with the same message.
   
10 ] Now we have 3 commits on the master branch. 

11 ] git branch feature1
     Create a feature1 branch.

12 ] "First commit in feature1 branch"
    Write the above line in index1.html, stage and commit it with the same message.
    Repeat the above process 3 times to do 3 commits on feature1 branch. 

13 ] git checkout master.
    Get back to the master branch.

14 ] git log 
    Display the HASH code of feature1\commit1

15 ] git cherry-pick HASH of the feature1\commit1
    Do the same operation for other commits on feature1 branch.

16 ] Make cherry-pick for the last branch 2 times and see the conflict.
    git cherry-pick --abort 
    To roll-back the changes made by the cherry-pick. 

17 ] go to your Github account and create a new repository called Project4

18 ] git remote add origin "" (link of your repository)
    
19 ] git remote -v
     git remote show
     git remote remove origin (if needed)
     Display pull/push endpoints.
   
20 ] git push -f -u origin master
     git push --set-upstream origin master
   
21 ] git log --graph --oneline --all
     Display a list of the repository history. 
    
22 ] git status -s -b -v  short branch verbose
     git status -s -b -v --show-stash

23 ] Create several feature/bugfix commits and push them to the repositories,
     push different repositories. git push origin feature1, git push origin master.

24 ] Update some documents in Github. 
     git pull.
   
25 ] Summary:
    Created a repository called Project7.
    Created commits.
    Introduced remote repository to git.
    Pushed our code to Github.

// Comments here ..

