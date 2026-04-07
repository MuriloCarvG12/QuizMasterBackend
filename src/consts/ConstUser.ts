interface ConstUsers<T> {
  [Key: string]: T;
}

const ConstUsers: ConstUsers<string> = {
  "NoName": "No name has specified!",
  "NoPassword": "No password has specified!",
  "NoEmail": "No email has specified!",
  "UserAlreadyExists": "This user already exists",
  "UserNotFound": "Specified User has not been found!"
};

export default ConstUsers;