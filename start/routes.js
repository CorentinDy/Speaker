'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const User = use('App/Models/User')


Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/users', async () => {
  return await User.all()
})

Route.get('/user/:id', async ({ params }) => {
  const user = await User.findOrFail(params.id)
  return user
})

Route.post('/user', async () => {
  const user = new User()

  user.username = 'virk2'
  user.password = 'some-password2'
  user.email = "2some@email.me"

  await user.save()

})
