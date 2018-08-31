import User from '../models/User';
import {Op} from '../databases/database';
import bcrypt from 'bcrypt'; //Ma hoa

export const listAllUsers = async params => {
    const allUsers = await User.findAll({
        order: ['id'],
    });
    try {
        return allUsers; //chi controller moi viet tnay
    } catch (error) {
        throw error;
    }
}

//REGISTER
export const newUser = async params => {
    const {username,password,image} = params;
    try {
        const newUser = await User.create({
            username,
            password,
            image
        },
        {
            fields: ['username','password','image']
        }
    );
        return newUser;
    } catch (error) {
        throw error;
    }
}

//LOGIN
export const userLogin = async params => {
    const {username,password} = params;
    try {
        const findUsername = await User.findOne({
            where: {
                username
            }
        });
        if (!findUsername) {
            return;
        } else {
            if(password === findUsername.password) {
                findUsername.password = "leu leu"
                return findUsername
            }
            else{
                return
            }
        }
    } catch (error) {
        throw error;
    }
}