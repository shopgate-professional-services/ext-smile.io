class SmileApi {
  /**
   * SmileApi Constructor
   * @param {PipelineContext} context Context object.
   */
  constructor (context) {
    this.baseUrl = context.config.smileApiUrl
    this.request = context.tracedRequest('ShopgateProjectSmileAPI')
    this.logger = context.log
    this.token = context.config.smileApiSecret
    this.smileChannelKey = context.config.smileChannelApiKey
  }

  /**
   * Sanitizes params for use in logging
   * @param {*} params Params to be logged
   * @return {*|{}}
   */
  sanitizeForLogging (params) {
    let sanitizedForLoggingBody = params
    if (typeof params === 'object') {
      sanitizedForLoggingBody = { ...params }
      for (let key in sanitizedForLoggingBody) {
        if (typeof sanitizedForLoggingBody[key] === 'string') {
          sanitizedForLoggingBody[key] = sanitizedForLoggingBody[key].slice(0, 60)
        }
        if (typeof sanitizedForLoggingBody[key] === 'object') {
          sanitizedForLoggingBody[key] = this.sanitizeForLogging(sanitizedForLoggingBody[key])
        }
      }
    }

    return sanitizedForLoggingBody
  }

  /**
   * Evaluate response code for error
   * @param {number} code Response code
   * @return {boolean}
   */
  isErroredCode (code) {
    if (code < 200) {
      return true
    }

    if (code >= 300) {
      return true
    }

    return false
  }

  /**
   * Make API call
   * @param {string} path Path to api endpoint
   * @param {string} method Request method
   * @param {[Object]} body Optional request body
   * @param {[Object]} qs Optional query string object
   * @param {[Object]} headers Optional headers object
   * @return {Promise<any>}
   */
  async call ({ path, method, body, qs, headers }) {
    const additionalHeaders = headers || {}
    return new Promise((resolve, reject) => {
      const params = {
        url: `${this.baseUrl}/${path}`,
        method,
        json: true,
        timeout: 5000,
        headers: {
          'Authorization': `Bearer ${this.token}`,
          ...additionalHeaders
        }
      }
      if (body) {
        params.body = body
      }
      if (qs) {
        params.qs = qs
      }
      this.logger.debug(this.sanitizeForLogging(params), 'Calling SmileAPI')
      this.request(params, (err, res, body) => {
        if (err) {
          this.logger.error({
            body,
            qs,
            httpCode: res.statusCode
          }, 'SmileAPI request error')
          return reject(err)
        }

        this.logger.debug(this.sanitizeForLogging(body), 'Received response from SmileAPI')

        if (this.isErroredCode(res.statusCode)) {
          this.logger.error({
            body,
            httpCode: res.statusCode
          }, 'ReCharge request error')
          return reject(new Error(`Received error code from the API: ${res.statusCode}`))
        }

        return resolve(body)
      })
    })
  }

  /**
   * Receive a list of all PointsProducts
   * @see https://docs.smile.io/docs/points-product
   * @return {Promise<any>}
   */
  async getPointsProducts () {
    return this.call({
      path: 'points_products',
      method: 'GET'
    })
  }

  /**
   * Receive a list of smile customers by email address
   * @see https://docs.smile.io/docs/customer
   * @param {string} email
   * @return {Promise<any>}
   */
  async getSmileCustomerByEmail (email) {
    return this.call({
      path: 'customers',
      method: 'GET',
      qs: {
        email
      }
    })
  }

  /**
   * Receive a list of rewards by smile customer id
   * @param {number} smileCustomerId
   * @return {Promise<any>}
   */
  async getYourRewards (smileCustomerId) {
    return this.call({
      path: 'reward_fulfillments',
      method: 'GET',
      qs: {
        include: 'image_svg',
        is_transient: 'false',
        customer_id: smileCustomerId
      }
    })
  }

  /**
   * Receive ways to earn
   * @param {[number]} smileCustomerId Smile customer id
   * @return {Promise<any>}
   */
  async getWaysToEarn (smileCustomerId) {
    const callParams = {
      path: 'customer_activity_rules',
      method: 'GET',
      headers: {
        'smile-channel-key': this.smileChannelKey
      },
      qs: {
        include: 'activity_rule.image_svg'
      }
    }

    if (smileCustomerId) {
      callParams.qs.customer_id = smileCustomerId
    }

    return this.call(callParams)
  }
}

module.exports = SmileApi
