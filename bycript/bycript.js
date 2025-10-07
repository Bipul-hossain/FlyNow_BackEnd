import bcrypt from "bcrypt";

const bcryptPassword = async (password) => {
  const hash = await bcrypt.genSalt(5);
  const hashPassword = await bcrypt.hash(password, hash);
  return hashPassword;
};

const comparePassword = async (password, bcrptPassword) => {
  const isPasswordCorrect = await bcrypt.compare(password, bcrptPassword);
  return isPasswordCorrect;
};

export { bcryptPassword, comparePassword };
