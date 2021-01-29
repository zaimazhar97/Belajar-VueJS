Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.nama }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        posting: null,
        groceries: [
            { id:1, nama: "devzaim" },
            { id:2, nama: "Muhammad Zaim" },
            { id:3, nama: "zaimazhar" }
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
        borang: "Borang",
        namabaru: null,
        nilai_borang: "",
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
                nama: this.namabaru
            })
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
