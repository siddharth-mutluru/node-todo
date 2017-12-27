const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if(err){
        return console.log("Mongo Connection failed to connect");
    }

    console.log("Mongo is on!");

    db.db('ToDoApp').collection('ToDo').find({completed : true}).toArray().then((result) => {
        console.log(JSON.stringify(result));
    }, (err) => {
        console.log("Error while searching");
    });

    db.close();
});