var app = new Vue({
    el: '#app',
    data: {
        insans: [
            {
                nama: 'kasut A',
                harga: 25,
                kuantiti: 2
            },
            {   
                nama: 'kasut B',
                harga: 100,
                kuantiti: 17
            },
            {
                nama: 'kasut C',
                harga: 5,
                kuantiti: 0
            },
        ],
        masatitle: 'Dimasukkan pada ' + new Date().toLocaleString()
    }
})