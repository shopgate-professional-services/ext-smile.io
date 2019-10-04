const SmileApi = require('../SmileApi')

module.exports = async (context, { smileCustomerId }) => {
  if (!smileCustomerId) {
    return { yourRewards: [] }
  }
  const api = new SmileApi(context)
  const { reward_fulfillments: yourRewards = [] } = await api.getYourRewards(smileCustomerId)

  return { yourRewards }
}
