import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login/login.vue'], resolve); }
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['@/views/main-components/lockscreen/components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: '首页', name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); } },
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/access',
    icon: 'key',
    name: 'access',
    title: '权限管理',
    component: Main,
    children: [
      {
        path: 'access_user', title: '组织架构', name: 'access_user', component: resolve => {
          require([ '@/views/access/organization/index.vue' ], resolve);
        }
      },
      {
        path: 'access_role', title: '角色管理', name: 'access_role', component: resolve => {
          require([ '@/views/access/role/index.vue' ], resolve);
        }
      },
      {
        path: 'access_menu', title: '菜单管理', name: 'access_menu', component: resolve => {
          require([ '@/views/access/system-menus/index.vue' ], resolve);
        }
      }
    ]
  },
  {
    path: '/table',
      icon: 'key',
      name: 'table',
      title: 'iview表格',
      component: Main,
      children: [ {
          path: '/iview_table',
          title: '用户管理',
          name: 'iview_table',
          component: () =>
            import ('@/components/Table/index.vue')
          }
      ]
  }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    locking,
    ...appRouter,
];
