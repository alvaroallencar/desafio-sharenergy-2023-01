import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../../models/User";
import { ILoginRequest, ILoginResponse } from "../../interfaces/sessions";
import { AppError } from "../../errors/appError";
import { ICreateUserResponse } from "../../interfaces/users";

const userLoginService = async (loginData: ILoginRequest): Promise<ILoginResponse> => {
  const { username, password } = loginData;

  const foundUser = await User.findOne<ICreateUserResponse>({ username }).exec();

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  if (!bcrypt.compareSync(password, foundUser.password)) {
    throw new AppError("Wrong email or password", 403);
  }

  const { _id: id } = foundUser;

  const accessToken = jwt.sign({ id }, String(process.env.SECRET_KEY), {
    expiresIn: "1d",
  });

  const refreshToken = jwt.sign({ id }, String(process.env.SECRET_KEY), {
    expiresIn: "30d",
  });

  return { accessToken, refreshToken };
};

export { userLoginService };
