import {User} from '../models/User';
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