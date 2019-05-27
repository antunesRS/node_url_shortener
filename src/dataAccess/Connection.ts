import nanoid from 'nanoid'

export default class Connection{
    collectionName: string
    dbName: string
    database: any

    constructor(collectionName: string, dbName: string){
        this.collectionName = collectionName
        this.dbName = dbName
    }

    public findAndUpdate(db:any, oldUrl:string): Promise<any>{
        const shortenedURLs = db.collection(this.collectionName);
        return shortenedURLs.findOneAndUpdate({ original_url: oldUrl },
        {
            $setOnInsert: {
                original_url: oldUrl,
                short_id: nanoid(7),
            },
        },
        {
            returnOriginal: false,
            upsert: true,
        }
    );
    }

    public find(db:any, short_id: string): Promise<any>{
        return db.collection(this.collectionName).findOne({ short_id: short_id });
    }

    public findOne(db: any, code: string, res:any){
        db.collection(this.collectionName).findOne({short_id: code},(err: any, result: any) => {
            if(err)
                throw err
            if(result)
                res.redirect(result.original_url.href)
        })
    }
}