import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Subject } from "./Subject.js"
import { Topic } from "./Topic.js"
import { Subtopic } from "./SubTopic.js"
import { Image } from "./Images.ts"

@Entity("questions")
export class Question {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    QuestionId: string

    @Column()
    QuestionText: string

    @Column()
    QuestionPrompt: string

    @Column()
    QuestionAltA: string

    @Column()
    QuestionAltB: string

    @Column()
    QuestionAltC: string

    @Column()
    QuestionAltD: string

    @Column()
    QuestionAltE: string

    @Column()
    CorrectAlternative: string

    @ManyToOne(() => Subject, { eager: false }) 
        @JoinColumn({ name: "SubjectId" }) 
        subject: Subject
    
    @Column()
    SubjectId: number 

    @ManyToOne(() => Topic, { eager: false }) 
        @JoinColumn({ name: "TopicId" }) 
        Topic: Topic
    
    @Column()
    TopicId: number 

    @ManyToOne(() => Subtopic) 
        @JoinColumn({ name: "SubTopicId" })
        SubTopic: Subtopic
    
    @Column()
    SubTopicId: number 

    @OneToMany("Image", "question")
    images: Image[];
}