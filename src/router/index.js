import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Cart from "@/views/Cart";

//Admin
import Index from "@/views/admin/Index";
import New from "@/views/admin/New";
import Products from "@/views/admin/Products";
import Edit from "@/views/admin/Edit";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Index,
    children: [
      {
        path: 'new',
        name: 'New',
        component: New,
      },
      {
        path: '',
        name: 'Products',
        component: Products,
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: Edit,
      }
    ]
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
