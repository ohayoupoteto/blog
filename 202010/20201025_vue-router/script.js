const router = new VueRouter({
    routes: [
        {
            path: "/top",
            component: {
                template: "<div>トップページだよ</div>"
            }
        },
        {
            path: "/users",
            component: {
                template: "<div>ユーザー一覧ページです。</div>"
            }
        }
    ]
});

const app = new Vue({
    router: router
}).$mount("#app");