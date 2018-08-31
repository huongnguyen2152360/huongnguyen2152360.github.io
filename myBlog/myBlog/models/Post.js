import Sequelize from "sequelize";
import { sequelize } from "../databases/database";

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT
  },
  content: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  tags: {
    type: Sequelize.STRING
  },
  createdAt: {
      field: 'createdat',
      type: Sequelize.DATE
  },
  updatedAt: {
    field: 'updatedat',
    type: Sequelize.DATE
  }
});

export default Post;
