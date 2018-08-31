import Sequelize from "sequelize";
import { sequelize } from "../databases/database";

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
  }
},
{timestamps: false});

export default User;
