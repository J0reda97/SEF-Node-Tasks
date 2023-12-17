const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = "proj-1"

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('Error has occured')
    }

    console.log('All Perf')

    const db = res1.db(dbName)

    /*
    insert one 2 
    insert many 10 (5 age 27y)
    find match 27y
    limit 3 match 27y
    $set name 1-4
    $inc age 1-4 (4y)
    update many inc age 10
    delete many 41y
    */

    // empty collection 

    db.collection('users').deleteMany()
        .then((data) => console.log(data.deletedCount))
        .catch((error) => console.log(error))

    // insert one 2

    db.collection('users').insertOne({ name: "Jozef", age: 26 }, (error, data) => {
        if (error) {
            return console.log('Unable  to insert data')
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertOne({ name: "Mina", age: 28 }, (error, data) => {
        if (error) {
            return console.log('Unable  to insert data')
        }
        console.log(data.insertedId)
    })

    // insert many 10 (5 age 27y)

    db.collection('users').insertMany([
        {
            name: "Mariam", age: 27
        },
        {
            name: "Shady", age: 27
        },
        {
            name: "Yousef", age: 27
        },
        {
            name: "Magday", age: 27
        },
        {
            name: "Markos", age: 27
        },
        {
            name: "Marina", age: 27
        },
        {
            name: "Tony", age: 27
        },
        {
            name: "Irene", age: 27
        },
        {
            name: "Michael", age: 27
        },
        {
            name: "Veronica", age: 27
        },
    ], (error, data) => {
        if (error) {
            return console.log('Unable to insert data')
        }
        console.log(data.insertedCount)
    })

    // find match 27y

    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        if (error) {
            return console.log("No users found")
        }
        console.log(users)
    })

    // limit 3 match 27y

    db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) => {
        if (error) {
            return console.log("No users found")
        }
        console.log(users)
    })

    // $set name 1-4
    // $inc age 1 - 4(4y)

    db.collection('users').updateOne({ _id: mongodb.ObjectId("657eeba1e6d0ce13a33a537b") }, { $set: { name: "mark" }, $inc: { age: 4 } })
        .then((data) => console.log(data.modifiedCount))
        .catch((error) => console.log(error))

    db.collection('users').updateOne({ _id: mongodb.ObjectId("657eeba1e6d0ce13a33a537e") }, { $set: { name: "Mirna" }, $inc: { age: 4 } })
        .then((data) => console.log(data.modifiedCount))
        .catch((error) => console.log(error))

    db.collection('users').updateOne({ _id: mongodb.ObjectId("657eeba1e6d0ce13a33a537f") }, { $set: { name: "Micky" }, $inc: { age: 4 } })
        .then((data) => console.log(data.modifiedCount))
        .catch((error) => console.log(error))

    db.collection('users').updateOne({ _id: mongodb.ObjectId("657eeba1e6d0ce13a33a5380") }, { $set: { name: "Vero" }, $inc: { age: 4 } })
        .then((data) => console.log(data.modifiedCount))
        .catch((error) => console.log(error))

    // update many inc age 10

    db.collection('users').updateMany({}, { $inc: { age: 10 } })
        .then((data) => console.log(data.modifiedCount))
        .catch((error) => console.log(error))

    // delete many 41y

    db.collection('users').deleteMany({ age: 41 })
        .then((data) => console.log(data.deletedCount))
        .catch((error) => console.log(error))
})
