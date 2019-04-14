# Database_Dictionary_Handler
A database management app including dictionaries, making change of multiple documents at the same time possible.

# To Install
Locate the project directory and run
``` npm build ``` to install dependencies and
``` npm start ```   to start the application

If it doesn't work, please try to install concurrently by ``` npm install -g concurrently ``` or run ``` npm install ``` on server and client directories manually.

![Application Screenshot](https://imgur.com/ibGjdmN.png)

# How It Works
The application uses a Mongo database, set on Atlas cloud, and the collection is fed with an example data schema (Products, Color and Price). 

When  ``` npm start ``` script starts both Server and Client side at the same time. Client side renders a react page, which sends a request for data to the Express server in the backend. Server fetches the data from database and sends it to the Client side. Data here is processed and rendered into 2 different tables, one shows the whole database, and the other shows only unique key-value mappings. When one of these mappings are changed through the Dictionary table, the whole database is effected.

Backend runs on Express, Mongo Database is managed by Mongoose and XMLHttpRequests are sent by Axios, wherease frontend is rendered by React. 

Example:

<h3>Database</h3><br/>
iPhone XS - Jet Black - 350 CHF<br/>
iPhone XS - Jet Black - 250 CHF<br/>
iPhone XS - Space Blue - 300 CHF<br/>

Dictionary<br/>
iPhone XS - Jet Black<br/>
iPhone XS - Space Blue<br/>

Changing Jet "Black" to "Black" will create the following result in the database section:
iPhone XS - Black - 350 CHF<br/>
iPhone XS - Black - 250 CHF<br/>
iPhone XS - Space Blue - 300 CHF

# Usage

Database is fetched from Mongodb Atlas, and then put into a table view under the text Database. Entries in the database can be deleted from this table, or new entries can be added. While adding a new element, its ID must be unique, or an error will occur.

The upper table means the Dictionary, it only shows Product types and their properties, and if there's more than one of the same product in the database, even with a different price, they will not show up in this table. Editing one of these properties will change that property for all of the products.
