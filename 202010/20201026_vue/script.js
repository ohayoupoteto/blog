const getUsers = function (callback) {
    setTimeout(function () {
        callback(null, [
            {
                id: 1,
                name: "ゆんゆん"
            },
            {
                id: 2,
                name: "六花ちゃん"
            }
        ]);
    }, 100);
};


const UserList = {
    template: "#user-list",
    data: function () {
        return {
            loading: false,
            users: function () {
                return [];
            },
            error: null
        };
    },
    created: function () {
        this.fetchData();
    },
    watch: {
        "$route": "fetchData"
    },
    methods: {
        fetchData: function () {
            this.loading = true;
            getUsers((function (err, users) {
                this.loading = false;
                if (err) {
                    this.error = err.toString();
                }
                else {
                    this.users = users;
                }
            }).bind(this));
        }
    }
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