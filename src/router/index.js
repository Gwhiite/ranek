import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Produto from "../views/Produto.vue";
import Login from "../views/Login.vue";
import Usuario from "../views/usuario/Usuario.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue";
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue";
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue";
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/usuario",
    component: Usuario,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos,
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras,
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar,
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas,
      },
    ],
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
