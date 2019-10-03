const ReChargeApi = require('../SmileApi')

module.exports = async (context, { smileCustomerId }) => {
  const api = new ReChargeApi(context)
  const { customer_activity_rules: waysToEarn = [] } = await api.getWaysToEarn(smileCustomerId)

  return { waysToEarn }
}
