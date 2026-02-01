import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Topic } from "./Topic.js"

@Entity("SubTopics")
export class Subtopic {
    @PrimaryGeneratedColumn()
    Id: number

    @Column({ type: "varchar"})
    SubTopicName: string

    @ManyToOne(() => Topic, { eager: false }) 
        @JoinColumn({ name: "Id" }) 
        Topic: Topic
    
        @Column({ type: "integer" })
        TopicId: number 
}