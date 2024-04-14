/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ClustersController = () => import('#controllers/clusters_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('clusters', [ClustersController, 'index'])
