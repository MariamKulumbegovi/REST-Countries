import { User } from "../models/userModel";

 

export const formatUser = (user) => `${user.firstName} ${user.lastName}`;
export const  currentUser = new User ("Emma", "Watson")

currentUser.bio="acting is my life"
currentUser.age=29