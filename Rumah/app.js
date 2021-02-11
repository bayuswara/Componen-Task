Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { judul: '', pengarang: '', sinopsis : '', penerbit: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.judul = "";
            this.data.pengarang = "";
            this.data.sinopsis = "";
            this.data.penerbit = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        buku: {}
    },
    methods: {
        getData: function (value) {
            this.buku = {
                judul : value.judul,
                pengarang : value.pengarang,
                sinopsis : value.sinopsis,
                penerbit : value.penerbit
            }
        }
    }
})