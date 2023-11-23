import { MongoClient, ServerApiVersion } from "mongodb";
import log      from '@ajar/marker';

export let db;

export async function connect_db(uri , db_name){
    const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();
    log.magenta(' ✨  Connected to Mongo DB ✨ ');
    db = client.db(db_name);
    return db;
}