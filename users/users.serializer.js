exports.serializeUser = (user) => {
  return {
    id: user._id,
    email: user.email,
    // avatarURL: user.avatarURL,
    childrenId: user.childrenId,
    // verificationToken: user.verificationToken,
    // tokens: user.tokens
  };
};
