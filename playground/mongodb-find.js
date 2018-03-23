// const { MongoClient } = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to the server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ab4db9d43cac6d2bcada502')
    // }).toArray().then((docs) => {

    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({
    //     name: new ObjectID('5ab4db9d43cac6d2bcada502')
    // }).count().then((count) => {

    //     console.log(`Todos count: ${count}`);

    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Zineb'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    })

    // client.close();
});