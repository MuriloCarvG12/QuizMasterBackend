import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("subjects")
export class Subject {
    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    SubjectName: string
}