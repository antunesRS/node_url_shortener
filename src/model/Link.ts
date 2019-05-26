import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class Link {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    oldUrl: string;

    @Column()
    newUrl: string;

    @Column()
    short_id: string;

    constructor(id: number, oldUrl: string, newUrl: string, short_id: string){
        this.id = id
        this.oldUrl = oldUrl
        this.newUrl = newUrl
        this.short_id = short_id
    }
}