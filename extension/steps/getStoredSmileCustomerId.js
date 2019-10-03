const { SMILE_CUSTOMER_ID_KEY } = require('../constants')

module.exports = async (context) => {
  if (!context.meta.userId) {
    return { smileCustomerId: null }
  }
  const smileCustomerId = await context.storage.user.get(SMILE_CUSTOMER_ID_KEY)

  return { smileCustomerId: smileCustomerId || null }
}
