const crypto = require('crypto')

module.exports = async (context, { customerId }) => {
  const { smileApiSecret } = context.config
  if (!(smileApiSecret && customerId)) {
    return { customerDigest: null }
  }

  const customerDigest = crypto
    .createHash('md5')
    .update(`${customerId}${smileApiSecret}`)
    .digest('hex')

  return { customerDigest }
}
