const MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to the server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do ',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todos',err) ;
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // db.collection('Users').insertOne({
    //     name: 'Zineb',
    //     age: 25,
    //     location: 'Morocco'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to connect tu mongoDb server');
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});