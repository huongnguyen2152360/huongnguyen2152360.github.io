import User from "../models/User";
import { Op } from "../databases/database";
import bcrypt from "bcrypt"; //Ma hoa

export const listAllUsers = async params => {
  const allUsers = await User.findAll({
    order: ["id"]
  });
  try {
    return allUsers; //chi controller moi viet tnay
  } catch (error) {
    throw error;
  }
};

// GET INFO BY USERNAME
export const getInfoByUsername = async params => {
  const { username } = params;
  try {
    const findUsername = await User.findOne({
      where: {
        username
      }
    });
    return findUsername;
  } catch (error) {
    throw error;
  }
};

//REGISTER
export const newUser = async params => {
  const { username, password, image } = params;
  try {
    const findSameUsername = await User.findOne({
      where: {
        username
      }
    }); // findOne tra ve all data related to username hoac NULL
    if (!findSameUsername) {
      const newUser = await User.create(
        {
          username,
          password,
          image
        },
        {
          fields: ["username", "password", "image"]
        }
      );
      return newUser;
    } else {
      const newUser = null; // neu
      return newUser;
    }
  } catch (error) {
    throw error;
  }
};

//LOGIN
export const userLogin = async params => {
  const { username, password } = params;
  try {
    // Tim username trong database trung voi username vua nhap (params)
    const findUsername = await User.findOne({
      where: {
        username
      }
    });
    if (!findUsername) {
      return;
    } else {
      if (password === findUsername.password) {
        findUsername.password = "leu leu";
        return findUsername;
      } else {
        return;
      }
    }
  } catch (error) {
    throw error;
  }
};

// EDIT
export const userEdit = async params => {
  const { image, password, username } = params;

  try {
    const findOldPass = await User.findOne({
      where: {
        username
      }
    });
    //   console.log(`Old Pass: ${findOldPass.password}`);

    if (password != findOldPass.password && password) {
      const updateProfile = await User.update(
        {
          image,
          password
        },
        //   { fields: ["image", "password"] },
        {
          where: {
            username
          }
        }
      );
      // console.log(`updateProfile: ${updateProfile}`);
      return updateProfile;
    } else if (!password) {
      const updateProfile = await User.update(
        {
          image
        },
        {
          where: {
            username
          }
        }
      );
      return updateProfile;
    }
  } catch (error) {
    throw error;
  }
};
