interface ConstTopics<T> {
  [Key: string]: T;
}

const ConstTopics: ConstTopics<string> = {
  "NoTopic": "Couldn't find a topic with that name!",
  "NoSpecificTopic": "Couldn't find the specified Topic!",
  "NoTopicName": "A Topic Name must be provided!",
  "NoSubjectId": "A Subject Id must be provided!",
  "NoId": "The Topic's id was not provided!",
  "NoSubject": "Couldn't find a subject with that code!",
  "TopicAlreadyExists": "This topic already exists!",
  "TopicUpdated": "Topic Updated! ",
  "TopicDeleted": "Topic deleted successfully",
  "GenericError": "An error occured while acessing this route! "

};

export default ConstTopics;