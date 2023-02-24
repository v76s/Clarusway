This project is a general review with the new concept, pull request.
Perform the operations below both from command line and VSCode extension. 

1 ] function prompt('>')
    Create 3 commits on master branch. 
    Create 3 commits on feature branch. 
    Create 1 commit on master branch. 
    git log --oneline --all --graph --decorate

2 ] git checkout master, git merge feature
    Observe on extension's UI and console the graphics. 

3 ] open project8 repository in Github
    git remote add origin "" (link of your repository)
    git remote -v
    git remote show
    git remote remove origin (if needed)
    git push origin master
    git push origin feature
    git push -f -u origin master
    git push --set-upstream origin master   
    For feature branch open a pull request.

4 ] Create 1 commit on master branch
    Create a bugfix branch and commit 3 times on it. 

5 ] git cherry-pick HASH of the bugfix\commit1
    Do the same operation for other commits on bugfix branch.
    Demonstrate the graph in VSCode extension
    git reset --hard SHA : Demonstrate the delete function

6 ] Make cherry-pick for the last branch 2 times and see the conflict.
    git cherry-pick --abort 
    To roll-back the changes made by the cherry-pick. 
    Cherry-pick must be clear now. 

7 ] Create 1 commit on master branch
     git branch ui
     ui.js, commit 1 time.
     git stash save 
     git stash list
     git stash save "The comment"
     git stash pop
     git stash apply
     git stash drop 0
     Commit and merge the stashed changes to the master branch.
     Display the graphical representations.
    
8 ] git push origin master
    git push origin ui
    For ui branch open a pull request.
    
9 ] git status -s -b -v  short branch verbose
    git status -s -b -v --show-stash

10 ] Summary:
    Created a repository called Project8.    