Vue.component('todo-item', {
    props: ['todo', 'jumlah'],
    template: '<li><strong>{{ todo.nama }} mempunyai wang sebanyak {{ jumlah }}</strong></li>'
})



var app = new Vue({
    el: '#app',
    data: {
        posting: null,
        groceries: [
            { id:1, nama: "devzaim", duit: 3000 },
            { id:2, nama: "Muhammad Zaim", duit: 2411 },
            { id:3, nama: "zaimazhar", duit: 230 }
        ],
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
        teruskedepan: true,
        borang: "Borang",
        namabaru: null,
        nilai_borang: "",
        insan_nama: null,
        periksa: false,
        kira: 0,
        intervalKiraStatus: true,
        tukar_kelas: [
            'btn',
            'bg-btn',
            'btn-text',
        ]
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
        tambahnama: function() {
            this.groceries.push({
                id: this.groceries.length + 1,
                nama: this.namabaru,
                duit: this.getRandomInt(5000)
            })
        },
        kemaskini_insan: function() {
            this.insans.push({
                nama: this.insan_nama,
                harga: this.getRandomInt(50),
                kuantiti: this.getRandomInt(10)
            })
            
            this.insan_nama = null
        },
        getRandomInt: function(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },
        checkInsanNama: function() {
            if(this.insan_nama.length === 0) {
                this.insan_nama = null
            }
        }
    },
    created() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => { this.posting = data.slice(0, 5) })
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
