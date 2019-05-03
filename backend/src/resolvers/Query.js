const { forwardTo } = require('prisma-binding')

const Query = {
  topics: forwardTo('db'),
  topic: forwardTo('db'),
}

module.exports = Query
