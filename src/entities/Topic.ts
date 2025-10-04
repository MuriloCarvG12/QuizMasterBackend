import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Subject } from "./Subject"

@Entity()
export class Topic {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    TopicName: string

    @ManyToOne(() => Subject, { eager: false }) 
    @JoinColumn({ name: "subjectId" }) 
    subject: Subject

    @Column()
    subjectId: number 
}