import Sequelize from "sequelize";
import { sequelize } from "../databases/database";
import Post from './Post'
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
    status: {
      type: Sequelize.STRING
    }
},
{timestamps: false});


User.hasMany(Post,{foreignKey: "author", sourceKey:"username"})
Post.belongsTo(User,{foreignKey: "author", targetKey: "username"})
export default User;
