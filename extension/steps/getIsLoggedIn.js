module.exports = async (context) => {
  return { isLoggedIn: !!context.meta.userId }
}
