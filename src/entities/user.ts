import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Subject } from "./Subject.js"

@Entity({ name: "Users" })
export class User {
    @PrimaryGeneratedColumn()
    Id: number

    @Column({ type: "text"})
    Name: string

    @Column({ type: "text", unique: true })
    Email : string

    @Column({ type: "text" })
    Password: string

    @Column({ type: "integer", default: 0  })
    QuestionsCompleted : number

    @Column({ type: "integer", default: 0  })
    ExamsCompleted : number
}