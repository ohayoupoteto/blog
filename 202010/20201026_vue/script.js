const UserList = {
    template: "#user-list"
};

const router = new VueRouter({
    routes: [
        {
            path: "/top",
            component: {
                template: "<div>トップページです</div>"
            }
        },
        {
            path: "/users",
            component: UserList
        }
    ]
});

const app = new Vue({
    router: router
}).$mount("#app");