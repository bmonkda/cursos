import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },

    {
        path: "/courses",
        name: "CoursesList",
        component: () => import("../views/courses/CoursesList.vue"),
    },

    {
        path: "/courses/:id",
        name: "CourseDetails",
        component: () => import("@/views/courses/CourseDetails.vue"),
    },

    {
        path: "/courses/:id/edit",
        name: "CourseEdit",
        component: () => import("@/views/courses/CourseEdit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/AboutView.vue"),
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/DashboardView.vue'),
        meta: {
            requiresAuth: true
        }
    },
    
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/auth/LoginView.vue"),
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('auth')) {
                next('/dashboard');
            }else{
                next();
            }
        }
    },
    
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/auth/RegisterView.vue"),
    },
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const protectedRoute = to.matched.some(record => record.meta.requiresAuth);
    if (protectedRoute && !localStorage.getItem('auth')) {
        next('/login')    
    } else{
        next();
    }
})

export default router;
