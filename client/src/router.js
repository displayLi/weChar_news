import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/message',
      component: _ => import('./views/Home'),
      children: [
        {
          path: "/message",
          name: 'message',
          component: _ => import('./views/Message')
        },
        {
          path: "/tongxunlu",
          name: 'tongxunlu',
          component: _ => import('./views/Tongxunlu')
        },
        {
          path: "/faxian",
          name: 'faxian',
          component: _ => import('./views/Faxian')
        },
        {
          path: "/me",
          name: 'me',
          component: _ => import('./views/Me')
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: _ => import('./views/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: _ => import('./views/Login')
    },
    {
      path: '/moments',
      name: 'moments',
      component: _ => import('./views/Moments')
    },
    {
      path: '/lookImg',
      name: 'lookImg',
      component: _ => import('./views/LookImg')
    },
    {
      path: '/upload',
      name: 'upload',
      component: _ => import('./views/Upload')
    },
    {
      path: '/userdetails',
      name: 'userDetails',
      component: _ => import('./views/UserDetails')
    },
    {
      path: '/char',
      name: 'char',
      component: _ => import('./views/Char')
    },
    {
      redirect: '/',
      path: '*'
    }
  ]
});

// 导航守卫
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.token ? true : false
  if (to.path == '/login' || to.path == '/register') {
    next()
  } else {
    isLogin ? next() : router.push('/login');
  }
})

export default router
