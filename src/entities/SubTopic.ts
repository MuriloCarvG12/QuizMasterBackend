import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Topic } from "./Topic"

@Entity()
export class Subtopic {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    SubTopicName: string

    @ManyToOne(() => Topic, { eager: false }) 
        @JoinColumn({ name: "topicId" }) 
        Topic: Topic
    
        @Column()
        TopicId: number 
}