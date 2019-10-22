const SmileApi = require('../SmileApi')

module.exports = async (context, { smileCustomerId, rewardId }) => {
  const api = new SmileApi(context)
  const { points_purchase: pointsPurchase = null } = await api
    .purchaseReward(smileCustomerId, rewardId)

  return { pointsPurchase }
}
