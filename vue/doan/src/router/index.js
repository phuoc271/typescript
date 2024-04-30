import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import FoodDetail from "../views/FoodDetail.vue";
import CartView from "../views/CartView.vue";
import PaymentView from "../views/PaymentView.vue";
import signup from "../components/signup.vue";
import forgot from "../components/forgot.vue";
import login from "../components/login.vue";
import reset from "../components/reset.vue";
import DashBoard from "../views/DashBoard.vue";
import AddProduct from "../views/AddProduct.vue";
import AddAdmin from "../views/AddAdmin.vue";
import AdminLogin from "../views/AdminLogin.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "FoodsView",
    component: FoodsView,
  },
  {
    path: "/foods/:id",
    name: "FoodsViewDetail",
    component: FoodDetail,
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/payment",
    name: "PaymentView",
    component: PaymentView,
    props: true, // Đảm bảo nhận props từ đường dẫn
  },
  {
    name: "forgot",
    component: forgot,
    path: "/forgot",
  },
  {
    name: "signup",
    component: signup,
    path: "/sign-up",
  },
  {
    name: "login",
    component: login,
    path: "/login",
  },
  {
    name: "reset",
    component: reset,
    path: "/reset",
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: DashBoard,
  },
  {
    path: "/AddProduct",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/AddAdmin",
    name: "AddAdmin",
    component: AddAdmin,
  },
  {
    path: "/AdminLogin",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
