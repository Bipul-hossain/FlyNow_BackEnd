import bcrypt from "bcrypt";

const bcryptPassword = async (password) => {
  const hash = await bcrypt.genSalt(5);
  const hashPassword = await bcrypt.hash(password, hash);
  return hashPassword;
};

export { bcryptPassword };
