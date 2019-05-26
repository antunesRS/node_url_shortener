import "reflect-metadata"
import {createConnection} from "typeorm"
import Link from '../model/Link'

export default class Connection {

    static createConnection(){
        return createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "url_repo",
            entities: [
                Link
            ],
            synchronize: true,
            logging: false
        })
    }
   
}
