import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Topic } from "./Topic.js"

@Entity("subtopics")
export class Subtopic {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    SubTopicName: string

    @ManyToOne(() => Topic, { eager: false }) 
        @JoinColumn({ name: "Id" }) 
        Topic: Topic
    
        @Column()
        TopicId: number 
}