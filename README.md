# kolomolo-problem-solving
<em>Files with applied changes are in this directory (without npm modules)</em>
## Report
### The objective of the exercise was to get the API to return "Test user" data for ID: 1.
* After downloading files from the repository and running
   ```ts
   npm install
   ```
   in the **/nodejstest-master** directory in order to install all the neccessary modules, we have to remove a syntax error (";" at the end of line) in
   ```ts
   \nodejstest-master\models\index.js:3
   ```
   in order to start our server with **"npm run start"**
 * Once the server is running, 
 
    ```ts
    http://localhost:3000/users/1
    ```
    returns **"Invalid user id."**  
  * The reason for that behavior is in  
    ```ts
    \nodejstest-master\routes\users.js:11 
    ```
    We can see that the server will only return user data for ID: 0. We want ID: 1 to return "Test user", so we change the 'if' statement to:
    ```ts
    if (user_id === 1)
    ```
     Now for  <em>/users/1</em> the server returns **"user info for user: null"** 
   * To fix this we need to import the object exported by
     ```ts
     \nodejstest-master\models\users.js
     ```
     to 
     ```ts
     \nodejstest-master\models\index.js
     ```
     The <em>get</em> method of the object serves as a simple test API, which contains our "Test user" data. We add
     ```ts
     const userAPI = require("./users.js");
     ```
     to the \models\index.js file. The <em>users.get</em> method in \models\index.js always returns null. We want it take "id" as argument and return a user with that id. This is exactly what <em>userAPI.get</em> method does so we make the <em>users.get</em> method return <em>userAPI.get(id)</em> like so:
     ```ts
     const users = {
        // TODO: connect to proper API later
        get: id => {
            return userAPI.get(id);
        }
      }
     ```
   * Now the server will return **"user info for user: undefined"** for <em>users/1</em>. This is because in \models\users.js our "Test user" data is stored in the **users** object under "0" insead of "1". After we change that
      ```ts
     const users = {
        1: { // CHANGE
          name: "Test User",
          email: "test@user.com"
        }
     }
     ```
     the server returns **"user info for user: { "name": "Test User", "email": "test@user.com" }"** for <em>http://localhost:3000/users/1</em> which was the objective.
