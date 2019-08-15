const app = new Vue({
    el: '#app',
    data: {
        id: '',
        title: '',
        price: '',
        quantity: '',
        test: 'test',
        products:[{}],
    },
    methods: {
        testAdd(id , title, price, quantity){
            if (this.products.find(item =>item.id === id)||
                this.products.find(item =>item.title === title)){
                console.log('error > ');
                alert(`Данный id: ${id} или название: ${title} уже используется `)
            }else{
            this.products.push({id , title, price, quantity});
            }
        },
        viewConsole(){
            console.log(this.products);
        }
        // addPush(id, title){
        //     products.push({id , title});
        //      // console.log(productPush);
        //     console.log(this.data.products);
    },
});
let testJson = 'products.json';
let request = new XMLHttpRequest();
request.open('GET', testJson);
request.responseType = 'json';
request.send();


console.log(request);