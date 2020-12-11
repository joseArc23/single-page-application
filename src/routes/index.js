import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
/* rutas de nuestra aplication */

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
}

/* mostrar los elementos por el enrutador */

const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  header.innerHTML = await Header()
  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404
  console.log(hash,route)
  content.innerHTML = await render()

}

export default router