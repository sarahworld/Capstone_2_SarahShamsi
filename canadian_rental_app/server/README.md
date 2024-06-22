# Server side of the App

This project was bootstrapped with [Create React App]. This is the frotend part of the app that is react based and bootstrap and reactstrap is used.

## Setup

In the server directory, you can do following steps:

Install dependencies:
```
$ npm init -y
$ npm install
```
As the mongoDB is installed. The server folder has a .env file.
Open the file and copy the uri connection string.

Now open the db_schema_dump folder and export the collection data in json format.
```
$ cd db_schema_dump

```
Install MongoDB Compass GUI from here https://downloads.mongodb.com/compass/mongodb-compass-1.43.1-win32-x64.exe
Then connect the database using the URI connection string in .env file.Once databse is established the collections are imported from the .json files in db_schema_dump folder.

To run the app in development mode

### Run Database and then server
```
$ cd server
$ mongod
$ npm start
```


