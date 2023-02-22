The purpose of this workout is to understand the details of branching.

1 ] cd Repositories
    Open a terminal and go to the folder that contains your repositories, called "Repositories"

2 ] Create a folder called Project3
    
3 ] cd Project3
    Get inside the Project3 folder.

4 ] git init
    This command converts Project3 folder into an actual repository.  

5 ] Open the Project3 folder in VSCode
  
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

16 ] git branch 
    Display a list of the existing branches.

17 ] Create these new branches by executing these commands ; 
    git branch feature1
    git branch feature2
    git branch feature3
    git branch bugfix1
    git branch bugfix2
    git branch bugfix3

18 ] git checkout feature3
    Switch your current branch to another branch by the command above. 

19 ] Create a new html file called feature3.html
   
20 ] <h1>This is feature3.html in feature3 branch</h1>
    Write the above line in feature3.html

21 ] git add .
     Stage the file in feature3 branch.

22 ] git commit -m "feature3.html committed in feature3 branch"
    Create the commit with the message above

22 ] git checkout master
    Get back to master branch, do you see the newly created feature3.html in the folder? Where is it?

23 ] git checkout feature3  / git switch feature3 
    Get back to feature3 branch and see that your feature3.html was not actually deleted.

24 ] git log --oneline --graph --all
     See all the commits

25 ] use git switch, git checkout for all available branches.

26 ] Go to feature3 branch again, make several commits, display graphically.

27 ] git checkout master
     Get back to the master branch

28 ] git merge feature3
     Invite the updates to master branch

29 ] git branch --delete feature3
     Delete the merged branch, we don't need it anymore. 

30 ] git switch bugfix1  (OR) git checkout bugfix1
     Switch to the bugfix1 branch.

31 ] Create bugfix1.js and save the contents below in it;

function bugfix1() {
    console.log('This is the bugfix');
}

32 ] git add .
     Stage the bugfix1.js and stage the file.

33 ] git commit -m "This is the bugfix1.js in bugfix1 branch" 
    
34 ] Till now there is no problem with the Bugfix1 branch.
     But we will also do some modifications on the common
     files that will end up with a conflict, let's do it.
    
35 ] git checkout master.
     Switch back to master branch.

36 ] Replace the index1.html content with the line below;
     <h1>Updated index1.html</h1>
     git add .   git commit -m "index1.html updated"

37 ] As you remember we have index1.html existing also 
    in Bugfix1 branch, lets switch to that branch and 
    modify the contents in a different way.
    git checkout bugfix1

38 ] Modify the index1.html content with the lines below;
<h1>Here bugfix1 makes the updates.</h1>
<h1>Here bugfix1 makes the updates.</h1>
    git add . 
    git commit -m "Bugfix1 branch updates"

39 ] Now let's try to merge them;
   git checkout master
   git merge bugfix1
   What do you see? There will be a conflict; Fix it as follows;
<h1>This is index1.html in first commit.</h1>
<h1>Here bugfix1 makes the updates.</h1>
<h1>Updated index1.html</h1>
<h4>This is the latest decision made for the master branch, merged with bugfix1 branch.</h4>
  git add . 
  git commit -m "Conflict resolved, committed"

40 ] go to your Github account and create a new repository called Project3

41 ] git remote add origin "" (link of your repository)
    
42 ] git remote -v
     git remote show
     git remote remove origin (if needed)
     Display pull/push endpoints.
   
43 ] git push -f -u origin master
     git push --set-upstream origin master
   
44 ] git log --graph --oneline --all
     Display a list of the repository history. 
    
45 ] git status -s -b -v  short branch verbose
     git status -s -b -v --show-stash
   
46 ] Summary:
    Created a repository called Project3.
    Created commits.
    Introduced remote repository to git.
    Pushed our code to Github.

