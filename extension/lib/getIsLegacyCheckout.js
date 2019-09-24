module.exports = async (context) => {
  const { webCheckout } = context.config

  return { isLegacyCheckout: !webCheckout }
}
