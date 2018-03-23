// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to the server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({ name: 'Zineb' });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5ab5276743cac6d2bcada52b') }).then((result) => {
        // console.log(JSON.stringify(result, undefined, 2));
        console.log(result);
    });

    // client.close();
});