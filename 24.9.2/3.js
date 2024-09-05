const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('testdb');
        const collection = database.collection('testcollection');

        deletletResualt = await collection.deleteOne({ name : '' })
        console.log('Deleted document count: ' , deletletResualt.deleteCount);
        
    } catch(error){
        console.error('Error :' , error);
    } finally { 
        await client.close();
    }
};
 

main(); 