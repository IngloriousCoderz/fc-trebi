/**
 * task service.
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::task.task', ({ strapi }) => ({
  async create(params) {
    const result = await super.create(params)
    const { results: tasks } = await this.find()
    strapi.service('api::push.push').send(tasks)
    return result
  },

  async update(entityId, params) {
    const result = await super.update(entityId, params)
    const { results: tasks } = await this.find()
    strapi.service('api::push.push').send(tasks)
    return result
  },

  async delete(entityId, params) {
    // some logic here
    const result = await super.delete(entityId, params)
    const { results: tasks } = await this.find()
    strapi.service('api::push.push').send(tasks)
    return result
  },
}))
