import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Subject } from "./Subject"

@Entity({ name: "topics" })
export class Topic {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    TopicName: string

    @ManyToOne(() => Subject, { eager: false }) 
    @JoinColumn({ name: "SubjectId" }) 
    subject: Subject

    @Column()
    SubjectId: number 
}