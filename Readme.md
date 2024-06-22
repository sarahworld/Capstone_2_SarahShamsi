# Canadian Rental App

This is a MERN stack application which provides the platform for renting items of 4 categories such as :- 

* Tools & Equipments,
* Party Supplies, 
* Baby & Kids Stuff,
* Books

 Each category has several items which have the attributes like name, price per day, description, renting Days, Return date.Once the user selects an item a modal opens that shows the item details. Once the user inputs the renting Days input the Total cost and returning date is calculated and user can book the item. Once a booking is booked, app redirects to bookings list page.


## App structure

```
    Capstone_2 
            | Readme.md
            | CAPSTONE-2_proposal.pdf
            | schema_files.txt
            + canadian_rental_app
                + client
                        | package.json
                        | package-lock.json
                        | README.md
                        + public
                        + src
                            | App.css
                            | App.js
                            | App.test.js
                            | index.css
                            | index.js
                            | reportWebVitals.js
                            | setupTests.js
                            + Components
                                | Bookings.js
                                | Categories.css
                                | Categories.js
                                | ItemDetailModal.js
                                | items.css
                                | items.js
                + server
                    | package.json
                    | package-lock.json
                    | server.js
                    |README.md
                    + routes
                        | bookings.js
                        | category.js
                    + db
                        | connection.js
```

## Steps to setup 

- Create folder in your machine
```
mkdir Capstone_2
```
- Clone the git repository.

- Go to canadian_rental_app folder
```
cd canadian_rental_app
```
Now there will be two folders server and client.

Check the respective folders for further instructions in the respective Readme files.


# Client side of the App

This project was bootstrapped with [Create React App]. This is the frotend part of the app that is react based and bootstrap and reactstrap is used.

## Setup

In the client directory, you can do following steps:

Install node modules based on package.json:
```
$ npm install
```

### Run client - with database & server

```
$ cd client
$ npm start

```

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
Then connect the database using the URI connection string in `.env` file.Once databse is established the collections are imported from the .json files in db_schema_dump folder.

To run the app in development mode

### Run Database and then server
```
$ cd server
$ mongod
$ npm start
```

