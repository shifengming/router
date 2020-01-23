import Vue from 'vue'
import Router from 'vue-router'
import pageA from '../views/pageA'
// import pageB from '../views/pageB'
// import Test from '../views/Test'

//安装路由到vue
Vue.use(Router)

const routes = [
  //默认展示为a
  {
    path:'/',
    // component: pageA
    redirect: '/a'
  },
  {
    path: '/a/:id',
    name: 'pageA',
    beforeEnter: (to, from, next) => {
      // console.log('before resolve',to,from)
      next()
    },
    component: 
    // ()=> import('./views/pageA')
    {
      // default: 
      pageA 
      // david: Test
    }
  },
  // {
  //   path: '/b/:id',
  //   props: true,
  //   component: pageB,
  //   children:[
  //     {
  //       path: 'test',
  //       component: Test
  //   }
  // ]
  // }
]
//把routes导出
export default new Router({
  // mode: 'history'就是把路由的#去掉
  mode: 'history',
  routes
})