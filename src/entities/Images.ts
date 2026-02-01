import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("images")
export class Image {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne("Question", "images")
  @JoinColumn({ name: "QuestionId" })
  question: any;

  @Column()
  QuestionId: number;

  @Column()
  ImageUrl: string;
}