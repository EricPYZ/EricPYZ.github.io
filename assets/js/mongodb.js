const { MongoClient } = require('mongodb')
const url = "mongodb+srv://PC:cfplhys@account.x07xst1.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

async function main(){
    const dbName = 'ACCOUNT'
    try {
        await client.connect();
        console.log('Connect to database!')
        const db = client.db(dbName);
        const result = await db.collection('panblog').find({}).toArray()
        console.log(result)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);