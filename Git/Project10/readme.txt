1 ] In this assignment we will create a common repository and work collaboratively on it. 
2 ] How to remove all the history log in a git repository
    git checkout --orphan latest_branch
    git add -A
    git commit -am "commit message"
    git branch -D master
    git branch -m master
    git push -f origin master
3 ] Using the amend parameter:
    git pull
    git status // ensure no local changes do exist
    git commit --amend -m "Version Updates"
    git push origin master -f

4 ] How to work with .gitignore file
    Create a folder "Log" in the current repository
    Create some files with .log extension
    Create a .gitignore file in the repository.
    Write inside;
    *.log
    Log
    Do the commit and demonstrate.
    Demonstrate the .gitignore templates in Github new repository interface as well.
