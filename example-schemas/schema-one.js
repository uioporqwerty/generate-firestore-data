const keyReducers = {
  // "{env}": fakerjs => {
  //   return fakerjs.random.arrayElement(["staging"]);
  //   return fakerjs.random.arrayElement(["prod", "staging"]);
  // },
  // "{userID}": fakerjs => {
  //   return fakerjs.random.alphaNumeric(5);
  // },
  // "{postID}": fakerjs => {
  //   return fakerjs.random.alphaNumeric(5);
  // }
};

const schema = {
  // "{env}": {
  user_conversations: {
    "{userID}": {
      conversations: {
        "{conversationID}": {
          created_at: "timestamp",
          updated_at: "timestamp",
          is_two_sided: "boolean"
        }
      }
    }
  },
  conversations: {
    "{conversationID}": {
      messages: {
        "{messageID}": {
          content: "string"
        }
      }
    }
  }
};

const count = 5;
module.exports = {
  schema,
  keyReducers,
  count
};
