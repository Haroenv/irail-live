import choo from 'choo'

import model from './models/app'
import home from './pages/home'
import station from './pages/station'

const app = choo()

app.model(model)

app.router([
  [ '/', home ],
  [ '/:station', station ]
])

const tree = app.start()

document.body.appendChild(tree)
