const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDoApp", (err, db) => {
    if(err){
        return console.log("Mongo Connection failed to connect");
    }

    console.log("Mongo is on!");

    db.db('ToDoApp').collection('ToDo').insertOne({
        desc : 'junk value',
        completed : false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert, ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});