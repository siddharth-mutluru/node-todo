const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err) {
        return console.log('Error while connecting to mongo.');
    }

    db.db('ToDoApp').collection('ToDo').findOneAndDelete({ desc: 'junk value' }).then(result => console.log('Deleted ', result), err => console.log('Something went wrong', err));
});