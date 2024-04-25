import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue");
const BoardAdmin = () => import("./components/BoardAdmin.vue");
const BoardModerator = () => import("./components/BoardModerator.vue");
const BoardUser = () => import("./components/BoardUser.vue");
//
const Create = () => import("./components/crud/AdminCreate.vue");
const Gantt = () => import("./components/Chart/GanttChart.vue");
const Products = () => import("./components/crud/Products.vue");
const SetProducts = () => import("./components/crud/ProductsCRUD.vue");
const ProductItem = () => import("./components/crud/ProductItem.vue");

const LineUser = () => import("./components/lineLogin/LineUser.vue");
const Dashboard = () => import("./components/Chart/index.vue");

const LiffForm = () => import("./components/Forms/LiffForm.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/create",
    name: "create",
    // lazy-loaded
    component: Create,
  },
  {
    path: "/setproduct",
    name: "setproduct",
    // lazy-loaded
    component: SetProducts,
  },
  {
    path: "/products",
    name: "products",
    // lazy-loaded
    component: Products,
  },
  {
    path: "/productitem",
    name: "productitem",
    // lazy-loaded
    component: ProductItem,
  },

  {
    path: "/gantt",
    name: "gantt",
    // lazy-loaded
    component: Gantt,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    // lazy-loaded
    component: Dashboard,
  },
  // {
  //   path: "/linelogin",
  //   name: "linelogin",
  //   // lazy-loaded
  //   component: LineLogin,
  // },
  {
    path: "/lineuser",
    name: "lineuser",
    // lazy-loaded
    component: LineUser,
  },
  {
    path: "/liffform",
    name: "liffform",
    // lazy-loaded
    component: LiffForm,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   const publicPages = [
//     "/login",
//     "/register",
//     "/home",
//     "/",
//     "/dashboard",
//     "/products",
//     "/productitem",
//     "/gantt",
//     "/profile",
//   ];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user_id");

//   if (authRequired && !loggedIn) {
//     next("/login");
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  const publicPages = [
    "/",
    "/login",
    "/register",
    "/home",
    "/dashboard",
    "/products",
    "/productitem",
    "/lineuser",
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    // next("/login");
    next("/");
  } else {
    next();
  }
});

export default router;
