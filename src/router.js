import * as VueRouter from 'vue-router'

const Home = () => import("./components/page/Home.vue")
const HomeMessage = () => import("./components/page/HomeMessage.vue")
const HomeNews = () => import("./components/page/HomeNews.vue")
const About = () => import("./components/page/About.vue")
const Profile = () => import("./components/page/Profile.vue")
const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    },

    children: [
      {
        path: '/message',
        component: HomeMessage,
        meta: {
          title: 'Message'
        },
      },
      {
        path: '/news',
        component: HomeNews,
        meta: {
          title: 'News'
        },
      },
    ]
  },
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    },
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/profile', component: Profile,
    meta: {
      title: 'Profile'
    }
  },
]


const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes,
  linkActiveClass: 'active'
})

export default router;