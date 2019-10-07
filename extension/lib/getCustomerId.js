module.exports = async (context, { externalCustomerId }) => {
  const customerId = externalCustomerId || context.meta.userId

  return { customerId: customerId || null }
}
