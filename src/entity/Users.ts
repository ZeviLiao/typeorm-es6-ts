import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("Users",{schema:"ztest" } )
export class Users {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"Id"
        })
    Id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"Name"
        })
    Name:string | null;
        
}
