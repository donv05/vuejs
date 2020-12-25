import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { requireAuth: true },
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { requireAuth: true },
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    },
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/*",
        name: "not-found",
        component: () =>
        import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
    },
];

const router = createRouter({
history: createWebHashHistory(),
routes,
});

router.beforeEach((to, from, next) => {
    // if (to.name !== 'Login' && to.meta.requireAuth) {// need to login
    if (to.matched.some((record) => record.meta.requireAuth)) {
        // need to login
        // if(!store) {
        // next({ name: 'Login' })
        // } else {
        //   next()
        // }
        if (!localStorage.getItem("jwt")) {
            next({ name: "Login" });
        } else {
            next();
        }
    } else next();
});

export default router;
