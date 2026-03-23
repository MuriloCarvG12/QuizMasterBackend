import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Subject } from "./Subject.js"

@Entity({ name: "Topics" })
export class Topic {
    @PrimaryGeneratedColumn()
    Id: number

    @Column({ type: "varchar" })
    TopicName: string

    @ManyToOne(() => Subject, { eager: false }) 
    @JoinColumn({ name: "SubjectId" }) 
    subject: Subject

    @Column({ type: "integer" })
    SubjectId: number 
}