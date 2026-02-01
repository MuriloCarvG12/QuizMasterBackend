import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Subject } from "./Subject.js"
import { Topic } from "./Topic.js"
import { Subtopic } from "./SubTopic.js"
import { Image } from "./Images.ts"

@Entity("questions")
export class Question {
    @PrimaryGeneratedColumn()
    Id: number

    @Column("integer")
    QuestionId: string

    @Column("text")
    QuestionText: string

    @Column("text")
    QuestionPrompt: string

    @Column("text")
    QuestionAltA: string

    @Column("text")
    QuestionAltB: string

    @Column("text")
    QuestionAltC: string

    @Column("text")
    QuestionAltD: string

    @Column("text")
    QuestionAltE: string

    @Column("char")
    CorrectAlternative: string

    @ManyToOne(() => Subject, { eager: false }) 
        @JoinColumn({ name: "SubjectId" }) 
        subject: Subject
    
    @Column("integer")
    SubjectId: number 

    @ManyToOne(() => Topic, { eager: false }) 
        @JoinColumn({ name: "TopicId" }) 
        Topic: Topic
    
    @Column("integer")
    TopicId: number 

    @ManyToOne(() => Subtopic) 
        @JoinColumn({ name: "SubTopicId" })
        SubTopic: Subtopic
    
    @Column("integer")
    SubTopicId: number 

    @OneToMany("Image", "question")
    images: Image[];
}