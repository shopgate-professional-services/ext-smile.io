module.exports = async (context) => {
  const { isLegacyCheckout } = context.config

  return { isLegacyCheckout }
}
