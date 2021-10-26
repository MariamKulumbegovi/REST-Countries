import { UserModel } from './userModel';

export const formatUser = user =>
  `${UserModel.firstName} ${UserModel.lastName}`;
export const currentUser = new UserModel('Emma', 'Watson');

export const userList = [
  new UserModel('Emma', 'Watson'),
  new UserModel('Gal', 'Gadot'),
  new UserModel('Megan', 'Fox'),
  new UserModel('Meredith', 'Grey'),
];
