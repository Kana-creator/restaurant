# Restaurant management application readme

# REQUIRED APPLICATION ON THE COMPUTER

1. Node.js. yuo can get it from https://nodejs.org/en/download
2. MonogoDB. you can get it from https://www.mongodb.com/try/download/community. I would recomend to download the msi format and chose your operating system.
3. Mongosh. you can get it from https://www.mongodb.com/try/download/shell
4. git. you can get it from https://git-scm.com/download/win
5. A browser (Chrome, firefox or microsoft edge)
6. visual studio code. you can get it from https://code.visualstudio.com/download

# INSTALLING MONGODB SERVER

After installing mongoDB make sure you include these two directories on the C drive of your computer (data/db) this is where mongodb stores data by default. In the process of installation the mongoDB server, let the "install as a service" option to be checked so that the mongodb server runs automatically on computer booting.

Depending on the mongoDB version you installed for example I installed version 6.0.1, include the following path to the environment variables on your computer "C:\Program Files\MongoDB\Server\6.0\bin". This makes easy for you the open the mongodb server in the comand prompt from any where.

# INSTALLING MONGOSH CONSOLE

After downloding the mongosh, extract the mongosh folder to "C:\Program Files\MongoDB". Then add the path "C:\Program Files\MongoDB\mongosh-1.9.1-win32-x64\bin" to your environment variables. Mongosh makes it easy to start the mongoDB server and interact with the database through a comand prompt console. Just open the comand prompt and type in comand "mongosh" to start the mongodb server and the interaction console.

# CREATING A NEW DATABASE

In the mongosh console type in comand "use Restaurant" to create a new database named "Restaurant" and switch to it. Note: You will not need to create a collection. A new collection named "restaurants" will be created automatically on the first data submision from the user interface.

Alternatively you can install a third-party software such us mongodb atlas through you can interact witht the mongodb database.

# INSTALLING GIT

Install git and add the path "c:\Program Files\Git\bin" to the environment variables on your computer.

# CLONING THE REPOSITORY

You can then get the soursecode from my github repository (https://github.com/Kana-creator/restaurant) and clone it on your computer in any prefered directory. To clone the repository, open comand prompt and navigate to the directory where you want to clone the repository. You can use the "cd" comand to change directory for example to change to documents you can use "cd Documents".

Once you are in the directory where you want to clone the repository in your comand prompt, type in comand "git clone https://github.com/Kana-creator/restaurant" then hit enter key to execute the comand.

# INSTALLING DEPENDENCIES

# backend dependencies:

In the comand prompt navigate to the directory where you cloned the repository, type in comand "cd restaurant/backend/server" hit enter then type in comand "npm install" to install all the backend dependencies.

# frontend dependencies:

In the comand prompt navigate to the directory where you cloned the repository, type in comand "cd restaurant/frontend" hit enter then typpe in comand "npm install" to install all the frontend dependencies.

# STARTING THE BACKEND SERVER

To start the backend server, open the comand prompt and navigate to the folder where you cloned the repository, and then type in comand "cd restaurant/backend/server" hit enter key and type in comand "npm run dev".

# STARTING THE FRONTEND SERVER

To start the frontend application, open the compand prompt and navigate to the folder where you cloned the repository, and type in comand "cd restaurant/frontend" hit enter key and type in comand "npm start".

You can alternatively insall visual studio code and do all the above like cloning the repository, starting the backend server and starting the fronend application.

# SUPPORT CONTACTS

In case of any challenges, I will always be available on;
+256779320075/+256706295932
akuwebwa@gmail.com
