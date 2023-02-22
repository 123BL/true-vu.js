const app = Vue.createApp({
    // data, functions 
    // template: '<h2>I am the template</h2>'
    data () {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
                {title: 'the way of kind', author: 'Brandon Lu', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true},
            ]
            // thing used to name the showBooks

            // title: 'idk',
            // author: 'Brandon Lu',
            // age: 20,
            // x: 0,
            // y: 0 
        }
    },
    methods: {
toggleShowBooks() {
this.showBooks = !this.showBooks
    },
    toggleFav(book){
        book.isFav = !book.isFav
    }
},
    computed: {
        filterdBooks() {
            return this.book.filter((book) => book.isFav)
        }
    }

})

    // handleEvent(e, data ) {
    //     console.log(e, e.type)
    //     if (data) {
    //         console.log(data)

//     handleMousemove(e) {
// this.x = e.offsetX
// this.y = e.offsetY
//     }
// }
// });
    // methods: {
    //     changeTitle(title) {
    //         // this.title = 'words of Randiances'
    //         this.title = title
    //     }
    // }

app.mount('#app');
