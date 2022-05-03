Vue.component("store-hero", {
    props: {
        name: String,
        address: String
    },
    template: `
        <div class="store-hero-wrapper">
            <h2 class="store-name">{{name}}</h2> - <h4 class="store-address">{{address}}</h4>
        </div>
    `
});

Vue.component("table-products", {
    props: {
        titles: {
            type: Array,
            required: true
        },
        entries: {
            type: Array,
            required: true
        },
        stylesObject: {
            type: Object,
            required: false
        },
        defaultStyles: Boolean
    },
    template: `
    <div>
        <table class="table table-striped table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                    <th v-for="(title, i) in titles" :key="i" scope="col">{{ title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entry, i) in entries" :key="i">
                    <th v-for="(row, r) in entry" :key="r">
                    <span  v-if="r!==3">{{row}}</span>
                    <img v-if="r===3" :src="row" width="60" height="60"/>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>`
});

var app = new Vue({
    el: "#app",
    data: {
        backgroundImg: './assets/background.jpg',
        tiendas: [
            {
                name: "Tienda 1",
                address: "San Martin 2299",
                stock: {
                    titles: ["ID", "Producto", "Cantidad", "PreView"],
                    entries: [
                        [1, "Notebook HP", 20, "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/8/V/8VW01LA-1_T1615590539.png"],
                        [2, "Notebook Lenovo", 40, "https://cdn.shopify.com/s/files/1/0511/7499/8190/products/Notebook-Lenovo-V15-Amd-Ryzen-5-15-Win10-pos-1@2x.jpg?v=1646335165"],
                        [3, "Tablet Samsung", 15, "https://images.samsung.com/is/image/samsung/ar-galaxy-taba-t290-sm-t290nzkaaro-frontblack-172109528?$2160_1728_PNG$"],
                        [4, "Teléfono Samsung", 25, "https://images.samsung.com/is/image/samsung/assets/latin/2203/galaxy-a-series/04_Product_list_A53_5g_mo.png?$FB_TYPE_J_F_MO_PNG$"],
                    ],
                },
                stylesObject: { 'crimson-font': true, 'light-mode': true },
                defaultStyles: false
            },
            {
                name: "Tienda 2",
                address: "San Martin 2299",
                stock: {
                    titles: ["ID", "Producto", "Cantidad", "PreView"],
                    entries: [
                        [5, "Notebook Mac", 20, "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/8/V/8VW01LA-1_T1615590539.png"],
                        [6, "Notebook MacBook", 40, "https://media.gq.com.mx/photos/5f21719a737a9d2e88e6dc7a/2:3/w_1332,h_1998,c_limit/MAC.jpg"],
                        [7, "Teléfono Iphone11", 15, "https://www.macstation.com.ar/img/productos/small/1680-1111.jpg"],
                        [8, "Teléfono Iphone13", 25, "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_HowToBuy_iPhone-13_GEO_09162021_carousel.jpg.large.jpg"],
                    ]
                },
                stylesObject: { 'sienna-font': true, 'burly-mode': true },
                defaultStyles: false
            },
            {
                name: "Tienda 3",
                address: "San Martin 2299",
                stock: {
                    titles: ["ID", "Producto", "Cantidad", "PreView"],
                    entries: [
                        [2, "Notebook Lenovo", 40, "https://cdn.shopify.com/s/files/1/0511/7499/8190/products/Notebook-Lenovo-V15-Amd-Ryzen-5-15-Win10-pos-1@2x.jpg?v=1646335165"],
                        [5, "Notebook Mac", 20, "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/8/V/8VW01LA-1_T1615590539.png"],
                        [6, "Notebook MacBook", 40, "https://media.gq.com.mx/photos/5f21719a737a9d2e88e6dc7a/2:3/w_1332,h_1998,c_limit/MAC.jpg"],
                        [3, "Tablet Samsung", 15, "https://images.samsung.com/is/image/samsung/ar-galaxy-taba-t290-sm-t290nzkaaro-frontblack-172109528?$2160_1728_PNG$"],
                    ]
                },
                stylesObject: { 'blue-font': true, 'blue-mode': true },
                defaultStyles: false
            }
        ],
    },
});