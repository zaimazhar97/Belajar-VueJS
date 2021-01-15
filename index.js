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
        masatitle: 'Dimasukkan pada ' + new Date().toLocaleString(),
        ayat_terbalik: 'Terbalikkan Saya',
        borang: "Borang",
        nilai_borang: "",
        kira: 0,
        intervalKiraStatus: true
    },
    methods: {
        terbalikkan: function() {
            this.ayat_terbalik = this.ayat_terbalik.split('').reverse().join('')
        },
        hantar_borang: function() {
            this.nilai_borang = this.borang
        },
        berhenti_kira: function() {
            if(this.intervalKiraStatus) {
                this.intervalKiraStatus = false
            } else {
                this.intervalKiraStatus = true
            }
        },
    },
    beforeMount() {
        this.intervalKira = setInterval( () => {
            if(this.intervalKiraStatus) {
                this.kira++
            } else {
                this.kira = this.kira
            }
        }, 1000)
    },
})
