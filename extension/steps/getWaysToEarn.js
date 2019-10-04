const SmileApi = require('../SmileApi')

module.exports = async (context, { smileCustomerId }) => {
  const api = new SmileApi(context)
  const { customer_activity_rules: waysToEarn = [] } = await api.getWaysToEarn(smileCustomerId)

  return { waysToEarn }
}
