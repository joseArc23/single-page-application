const resolveRoutes = (route) => {
  if (route.length <= 3) {  /* es parte de un id */
    let validRoute = route === '/' ? route : '/:id'
    return validRoute
  }
  /* en caso de no ser un id */
  return `/${route}`  /* /about */
}

/* aqui llega o un id o una seccion  3  */

export default resolveRoutes