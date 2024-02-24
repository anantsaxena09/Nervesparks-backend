export const omitSensitiveInfo = (user) => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  };
  