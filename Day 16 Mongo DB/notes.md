Mongo DB: 

CRUD:

1. Create --> 

Database:
use db_name
Column creation: 
db.Column_Name

2. Read --> 

// To read all columns
db.Column_Name.find()

// To read a specific column pass conditions
db.Column_Name.find({conditions})


3. Delete --> 

// To Delete a single object
db.Column_Name.deleteOne({condition})

// To delete mulitple objects
db.column_Name.deleteMany({condition})

// Do Not try
// Delete entire columns inside database
db.column_Name.deleteMany({})

4. Insert Data --> 

// Insert one object
db.column_name.insertOne({values_to_be_inserted})

// Insert multiple objects
db.column_name.insertMany([{},{}]);


SQL: 

// To get all the values

select * from database_name.Table

// to get specific columns 

select column_name from database_name.table

// To filter the values

select column_name from database_name.table
where filtering_condition


