The purpose of this workout is to prepare the git environment and do the necessary configuration, the link with Github.com

1 ] Download git to your local system:
    https://git-scm.com/downloads

2 ] Download github client to your system (optional):
    https://cli.github.com/
   
3 ] Create a folder called Repositories
    Preferably create the folder in drive d:
    If you don't have d: drive than c: is ok.
   
4 ] cd Repositories<
    Get inside the Repositories folder.
   
5 ] Create a folder called Project1
    
6 ] cd Project1
    Get inside the Project1 folder.
   
7 ] git init
    This command converts Project1 folder into an actual repository.
    
8 ] Open an account in Github.
    This is extremely important: Open Github account with an 
    e-mail address that will always be as your primary address.
    While opening the account you will also specify the username
    for your Github account. Three things to save:
    - e-mail account registered to Github.
    - username registered to Github.
    - password used while registering to Github.
   
9 ] Configuration of git settings:
    * git config --global credential.email "x@y.com.com"
    git config --global credential.name "abc"
    git config --global credential.username "abc"
    git config --global user.email "x@y.com"
    git config --global user.name "abc"
    git config --global --list
    You can switch between different accounts by this configuration.
   
10 ] Configuration of github client(Optional):
    gh auth login  
    Choose "Github.com"  and press enter
    Choose "HTTPS"
    Choose "Paste an authentication token" (Or choose Web Browser option)
    Paste code which looks like this :  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
    
11 ] Open the Project1 folder in VSCode
  
12 ] Create an empty file called index.html in VSCode
    
13 ] Paste the codes below inside index.html file;
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Git Exercise Sample-Company - Customer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    <script
      src="index.js"
      language="javascript"
      type="text/javascript"
    ></script>
  </head>
  <body>
    <div class="container-fluid p-5 bg-secondary text-white text-center">
      <h1>Sample-Company - Git Session Customer List</h1>
      <p>Demonstration of GIT Session</p>
    </div>

    <!-- Margin top5-->
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <h3>Registry</h3>
          <p>Create Customer Registry</p>
          <p>Here we will add customer registry related links.</p>
        </div>
        <div class="col-sm-4">
          <h3>Transactions</h3>
          <p>Customer Transactions</p>
          <p>
            All operations with Customer Transactions will be displayed here
          </p>
        </div>
        <div class="col-sm-4">
          <h3>Survey</h3>
          <p>Customer Survey</p>
          <p>Customer will be able to fill-out a survey in this section</p>
        </div>
      </div>
    </div>

    <div class="container mt-3">
      <h2>Customers List</h2>
      <p>The list of all customers</p>

      <table
        id="myTable"
        cellspacing="1"
        class="table table-light table-striped table-hover"
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Total</th>
            <th>Discount</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr onclick="javascript:showRow(this);">
            <td>Wolf</td>
            <td>Collins</td>
            <td>28</td>
            <td>9.99</td>
            <td>20.3%</td>
            <td>+3</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Dimitar</td>
            <td>Collins</td>
            <td>33</td>
            <td>19.99</td>
            <td>25.1%</td>
            <td>-7</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Halil</td>
            <td>Collins</td>
            <td>18</td>
            <td>15.89</td>
            <td>44.2%</td>
            <td>-15</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Samet</td>
            <td>Collins</td>
            <td>45</td>
            <td>153.19</td>
            <td>44%</td>
            <td>+19</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Robin</td>
            <td>Collins</td>
            <td>56</td>
            <td>153.19</td>
            <td>23%</td>
            <td>+9</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Irina</td>
            <td>Collins</td>
            <td>56</td>
            <td>153.19</td>
            <td>23%</td>
            <td>+9</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Nureleign</td>
            <td>Collins</td>
            <td>56</td>
            <td>153.19</td>
            <td>23%</td>
            <td>+9</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Selim</td>
            <td>Collins</td>
            <td>56</td>
            <td>153.19</td>
            <td>23%</td>
            <td>+9</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Samir</td>
            <td>Collins</td>
            <td>56</td>
            <td>153.19</td>
            <td>23%</td>
            <td>+9</td>
          </tr>
          <tr onclick="javascript:showRow(this);">
            <td>Jiyeon</td>
            <td>Collins</td>
            <td>56</td>
            <td>153.19</td>
            <td>23%</td>
            <td>+9</td>
          </tr>
        </tbody>
      </table>

      <label style="display: inline-block; width: 100px" for="firstname"
        >First name:</label
      >
      <input type="text" id="firstname" name="firstname" /><br />

      <label style="display: inline-block; width: 100px" for="lastname"
        >Last name:</label
      >
      <input type="text" id="lastname" name="lastname" /><br />

      <label style="display: inline-block; width: 100px" for="age">Age:</label>
      <input type="text" id="age" name="age" /><br />

      <label style="display: inline-block; width: 100px" for="total"
        >Total:</label
      >
      <input type="text" id="total" name="total" /><br />

      <label style="display: inline-block; width: 100px" for="discount"
        >Discount:</label
      >
      <input type="text" id="discount" name="discount" /><br />

      <label style="display: inline-block; width: 100px" for="diff"
        >Difference:</label
      >
      <input type="text" id="diff" name="diff" /><br />
      <br />
      <br />

      <footer class="text-center footer text-white">
        <div
          class="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2023 Copyright:
          <a class="text-white" href="https://www.clarusway.com/"
            >www.clarusway.com</a
          >
        </div>
      </footer>
    </div>
  </body>
</html>
  
14 ] Create a file "index.js" in VSCode
   
15 ] Paste the content below inside index.js;
function showRow(row)
{
var x=row.cells;
document.getElementById("firstname").value = x[0].innerHTML;
document.getElementById("lastname").value = x[1].innerHTML;
document.getElementById("age").value = x[2].innerHTML;
document.getElementById("total").value = x[3].innerHTML;
document.getElementById("discount").value = x[4].innerHTML;
document.getElementById("diff").value = x[5].innerHTML;
}
    
16 ] git status
    Check the status of our repository called Project1
   
17 ] git add .
    Add all files to indexing area.
   
18 ] git commit -m "First Commit"
    
19 ] Modify index.html, find your name and give another
     surname(nickname) for your surname.
    
20 ] Ensure that you save the file or "Autosave" option is 
     enabled in VSCode.
    
21 ] git status
     Check the status of the project once again.
   
22 ] git add .
     Add the changes to the staging/indexing area.
  
23 ] git commit -m "Second commit"
    
24 ] go to your Github account and create a new repository called Project1
   
25 ] git remote add origin "" (link of your repository)
   
26 ] git remote -v
     git remote show
     Display pull/push endpoints.
    
27 ] git push -f -u origin master
     git push --set-upstream origin master
    
28 ] git log --graph --oneline --all
     Display a list of the repository history. 
    
29 ] git status -s -b -v  short branch verbose
     git status -s -b -v --show-stash
    
30 ] Summary:
    We downloaded git, github client(optionally)
    Configured git to communicate with Github.
    Created a folder "Repositories"
    Created first repository called Project1.
    Created 2 commits.
    Introduced remote repository to git.
    Pushed our first code to Github.