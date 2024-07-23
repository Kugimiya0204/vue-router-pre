import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: () => import('../views/HomeVue.vue'),
        Navbar1: () => import('../views/HomeNavbar01.vue'),
        Navbar2: () => import('../views/HomeNavbar02.vue')
      },
      children: [
        {
          path: 'child',
          name: 'Child',
          component: () => import('../views/ChildrenVue.vue')
        }
      ],
      alias: ['/home', '/tohome']
    },
    {
      path: '/User/:id(\\d+)',
      name: 'User01',
      component: () => import('../views/UserData01.vue'),
      meta: { id: 4 }
    },
    {
      path: '/User/:groupName',
      name: 'User02',
      component: () => import('../views/UserData02.vue'),
      meta: { groupName: 'USA' }
    },
    {
      path: '/:patMatch(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  console.log('from =' + from.name)
  console.log('to =' + to.name)
  if (to.name == 'User01' && to.params.id != to.meta.id) {
    return false
  }
  if (to.name == 'User02' && to.params.groupName != to.meta.groupName) {
    return false
  }
  return true
})
export default router
