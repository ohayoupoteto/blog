console.assert(typeof SVGUseElement !== "undefined");
let foods = [
    {
        name: "唐揚げ",
        meat: "鶏肉",
        price: 700,
        quantity: 1
    },
    {
        name: "竜田揚げ",
        meat: "鶏肉",
        price: 900,
        quantity: 0
    },
    {
        name: "角煮",
        meat: "牛肉",
        price: 1200,
        quantity: 0
    }
];

let vm = new Vue({
    el: "#app",
    data: {
        foods: foods
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (!value) {
                return "0"
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")
        }

    },
    methods: {
        doBuy: function () {
            alert(this.totalPriceWithTax + "円お買い上げ!");
            this.foods.forEach(function (food) {
                food.quantity = 0;
            });
        }
    },
    computed: {
        totalPrice: function () {
            return this.foods.reduce(function (sum, food) {
                return sum + (food.price * food.quantity);
            }, 0);
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08);
        },
        canBuy: function () {
            return this.totalPrice >= 1000;
        },
        errorMessageStyle: function () {
            return {
                border: this.canBuy ? "" : "solid 1px #ff0000",
                color: this.canBuy ? "" : "#ff0000"
            }
        }
    }
});

Vue.component("list-item", {
    template: "<ul><li>foo</li></ul>"
});
new Vue({
    el: ".app2"
})

