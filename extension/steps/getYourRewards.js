const ReChargeApi = require('../SmileApi')

module.exports = async (context, { smileCustomerId }) => {
  if (!smileCustomerId) {
    return { yourRewards: [] }
  }
  const api = new ReChargeApi(context)
  const { reward_fulfillments: yourRewards = [] } = await api.getYourRewards(smileCustomerId)

  return { yourRewards }
}
