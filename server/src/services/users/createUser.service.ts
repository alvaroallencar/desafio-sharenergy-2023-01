import bcrypt from "bcrypt";
import { User } from "../../models/User";
import { ICreateUserRequest, ICreateUserResponse } from "../../interfaces/users";
import { AppError } from "../../errors/appError";

const createUserService = async (data: ICreateUserRequest) => {
  const { email, name, password, username } = data;

  const emailAlreadyExists = await User.findOne({ email }).exec();
  const usernameAlreadyExists = await User.findOne({ username }).exec();

  if (emailAlreadyExists || usernameAlreadyExists) {
    throw new AppError("Email and/or username already being used.", 400);
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const createdUser = await User.create({
    name,
    username,
    email,
    password: hashedPassword,
    rememberMe: data.rememberMe ? data.rememberMe : false,
  });

  const { password: removedPassword, ...user } = createdUser._doc as ICreateUserResponse;

  return user;
};

export { createUserService };
