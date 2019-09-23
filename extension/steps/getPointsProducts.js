// @see https://docs.smile.io/docs/points-product
const ReChargeApi = require('../SmileApi')

module.exports = async (context, { useCache = false }) => {
  const { userId } = context.meta || {}
  if (!userId) {
    return { customer: null }
  }

  const api = new ReChargeApi(context)
  const { customers = [] } = await api.getCustomerByShopifyUserId(userId, useCache)

  if (customers.length < 1) {
    return { customer: null }
  }

  return { customer: customers[0] }
}
