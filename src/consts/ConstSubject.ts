interface ConstSubjects<T> {
  [Key: string]: T;
}

const ConstSubjects: ConstSubjects<string> = {
  "NoSubject": "Couldn't find a subject with that name!",
  "NoName": "A Subject Name must be provided!",
  "NoId": "Couldnt fetch the subject's id!",
  "SubjectUpdated": "Subject updated successfully",
  "SubjectDeleted": "Subject deleted successfully",
  "GenericError": "An error occured while acessing this route! "

};

export default ConstSubjects;