import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {category} from "./Category";


@Entity("post",{schema:"ztest" } )
export class post {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"title"
        })
    title:string;
        

    @Column("text",{ 
        nullable:false,
        name:"text"
        })
    text:string;
        

   
    @ManyToMany(type=>category, category=>category.posts,{  nullable:false, })
    @JoinTable({ name:'post_categories_category'})
    categorys:category[];
    
}
