const app = Vue.createApp({
    // data, functions 
    // template: '<h2>I am the template</h2>'
    data () {
        return {
            showBooks: true,
            title: 'idk',
            author: 'Brandon Lu',
            age: 20
        }
    },
    methods: {
toggleShowBooks() {
this.showBooks = !this.showBooks
    }
}
});
    // methods: {
    //     changeTitle(title) {
    //         // this.title = 'words of Randiances'
    //         this.title = title
    //     }
    // }


app.mount('#app');