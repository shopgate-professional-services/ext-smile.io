const { SMILE_CUSTOMER_ID_KEY } = require('../constants')

module.exports = async (context, { smileCustomerId, customer }) => {
  if (customer) {
    const { id } = customer
    await context.storage.user.set(SMILE_CUSTOMER_ID_KEY, id)

    return { smileCustomerId: id }
  }

  return { smileCustomerId: smileCustomerId || null }
}
