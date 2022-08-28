const routes = [

  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [{
      path: '/',
      component: () => import('src/pages/Home.vue')
    },
    {
      path: '/register',
      component: () => import('pages/RegisterStudent.vue')
    },
    {
      path: '/list',
      component: () => import('pages/ListStudents.vue')
    },
    {
      path: '/student',
      component: () => import('pages/Student.vue')
    },
    {
      path: '/highestgrade',
      component: () => import('pages/HighestGrade.vue')
    }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
