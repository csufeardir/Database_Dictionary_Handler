# Database_Dictionary_Handler
A database management app including dictionaries, making change of multiple documents at the same time possible.

# To Install
Locate the project directory and run
``` npm build ``` to install dependencies and
``` npm start ```   to start the application

If it doesn't work, please try to install concurrently by ``` npm install -g concurrently ``` or run ``` npm install ``` on server and client directories manually.

![Application Screenshot](https://imgur.com/ibGjdmN.png)

# Usage

Database is fetched from Mongodb Atlas, and then put into a table view under the text Database. Entries in the database can be deleted from this table, or new entries can be added. While adding a new element, its ID must be unique, or an error will occur.

The upper table means the Dictionary, it only shows Product types and their properties, and if there's more than one of the same product in the database, even with a different price, they will not show up in this table. Editing one of these properties will change that property for all of the products.
