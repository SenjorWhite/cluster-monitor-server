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

router.get('clusters', [ClustersController, 'index'])
router.get('clusters/:id', [ClustersController, 'show'])
router.get('clusters/:id/iops/read', [ClustersController, 'getClusterReadIops'])
router.get('clusters/:id/iops/write', [ClustersController, 'getClusterWriteIops'])
