interface ConstQuestion<T> {
  [Key: string]: T;
}

const ConstQuestion: ConstQuestion<string> = {
  "NoSubtopic": "No Subtopic specified!",
  "NoTopic": "Couldn't find the specified topic!",
  "NoSubTopicFound": "Couldn't find the specified SubTopic!",
  "SubTopicExists": "A subtopic with this name has already been created!",
  "SubTopicUpdated": "SubTopic updated successfully",
  "SubTopicDeleted": "Subtopic deleted successfully!",
  "SubTopicCreated":"New SubTopic Created! ",
  "GenericError": "An error occured while acessing this route! "

};

export default ConstQuestion;