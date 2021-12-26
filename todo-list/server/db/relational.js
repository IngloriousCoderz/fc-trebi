// @see https://dev.to/projectescape/a-crash-course-to-bookshelf-js-2ejb

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'burp',
    database: 'fc-trebi',
    charset: 'utf8',
    typeCast: (field, next) => {
      if (field.type === 'TINY' && field.length === 1) {
        let value = field.string()
        return value ? value === '1' : null
      }
      return next()
    },
  },
})
const bookshelf = require('bookshelf')(knex)

const Task = bookshelf.model('Task', { tableName: 'tasks' })

async function prepare() {
  const exists = await knex.schema.hasTable('tasks')

  if (!exists) {
    await knex.schema.createTable('tasks', (table) => {
      table.increments()
      table.string('text')
      table.boolean('completed')
    })

    await Task.forge({ text: 'Learn Express', completed: true }).save()
    await Task.forge({ text: 'Look for a job', completed: false }).save()
    await Task.forge({ text: 'Forget everything' }).save()
  }
}

module.exports = { find, findOne, create, replace, update, delete: remove }

async function find() {
  await prepare()
  const tasks = await Task.fetchAll()
  return tasks.toJSON()
}

async function findOne(id) {
  await prepare()
  const task = await Task.where({ id }).fetch()
  return task.toJSON()
}

async function create(body) {
  await prepare()
  const task = await Task.forge(body).save()
  return task.toJSON()
}

async function replace(id, body) {
  await prepare()
  const task = await Task.forge({ id, ...body }).save()
  return task.toJSON()
}

async function update(id, body) {
  await prepare()
  const task = await Task.forge({ id }).save(body)
  return task.toJSON()
}

async function remove(id) {
  await prepare()
  const task = await Task.where({ id }).destroy()
  return task.toJSON()
}
