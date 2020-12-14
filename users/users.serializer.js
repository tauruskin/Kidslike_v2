exports.serializeUser = (user) => {
  return {
    id: user._id,
    email: user.email,
    // avatarURL: user.avatarURL,
    childId: user.childId,
    // verificationToken: user.verificationToken,
    // tokens: user.tokens
  };
};
