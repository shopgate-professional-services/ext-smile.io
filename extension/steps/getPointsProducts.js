// @see https://docs.smile.io/docs/points-product
const ReChargeApi = require('../SmileApi')

module.exports = async (context, { useCache = false }) => {
  const api = new ReChargeApi(context)
  const { points_products = [] } = await api.getPointsProducts()

  return { pointsProducts: points_products }
}
