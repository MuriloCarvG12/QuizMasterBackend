import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("Subjects")
export class Subject {
    @PrimaryGeneratedColumn()
    Id: number

    @Column("text")
    SubjectName: string
}