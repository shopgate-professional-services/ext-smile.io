const crypto = require('crypto')

module.exports = async (context, { externalCustomerId }) => {
  const { smileApiSecret } = context.config
  if (!(externalCustomerId && smileApiSecret)) {
    return { customerDigest: null }
  }

  const customerDigest = crypto
    .createHash('md5')
    .update(`${externalCustomerId}${smileApiSecret}`)
    .digest('hex')

  return { customerDigest }
}
