console.assert(typeof SVGUseElement !== "undefined");
let foods = [
    {
        name: "唐揚げ",
        meat: "鶏肉",
        price: 700,
        quantity: 3
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
        },

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
        }
    }
});

