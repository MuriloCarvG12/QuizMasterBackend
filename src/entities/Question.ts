import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Subject } from "./Subject"
import { Topic } from "./Topic"
import { Subtopic } from "./SubTopic"

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ImageUrl: string

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

    @Column()
    QuestionDifficulty: string

    @ManyToOne(() => Subject, { eager: false }) 
        @JoinColumn({ name: "subjectId" }) 
        subject: Subject
    
    @Column()
    subjectId: number 

    @ManyToOne(() => Topic, { eager: false }) 
        @JoinColumn({ name: "TopicId" }) 
        Topic: Topic
    
    @Column()
    TopicId: number 

    @ManyToOne(() => Topic, { eager: false }) 
        @JoinColumn({ name: "TopicId" }) 
        SubTopic: Subtopic
    
    @Column()
    SubTopicId: number 
}