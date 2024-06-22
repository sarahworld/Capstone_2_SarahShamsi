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




