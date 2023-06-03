import User from "../models/User"
import { IUser } from "../Interfaces"

export const createUser = async ({name,userName}:IUser) : Promise<User | null> => {
    try {
        const response = await User.create({
            name,
            userName
        })
        return response
    } catch (error) {
        console.error(error)
        return null;
    }
}

export const readUser =async (id :number) : Promise<User | null> => {
    try {
        const response = await User.findByPk(id)
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const readAllUsers = async (): Promise<User[] | null> => {
    try {
        const response = await User.findAll();
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }  
};