// @see https://docs.smile.io/docs/customer
const ReChargeApi = require('../SmileApi')

module.exports = async (context, { mail }) => {
  if (!mail) {
    return { customer: null }
  }
  const api = new ReChargeApi(context)
  const { customers = [] } = await api.getSmileCustomerByEmail(mail)

  return { customer: customers[0] || null }
}
