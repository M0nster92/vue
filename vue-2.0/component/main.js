
Vue.component('message', {
    props: ['title', 'body'],
    data(){
        return {
            isVisible : true
        }
    },
    template:`
        <div v-if='isVisible'>
            <h1>{{title}}</h1><button @click='hide'>Hide</button>
            <p>{{body}}</p>
        </div>
    `,
    methods: {
        hide(){
            this.isVisible = false;
        }
    },
})

Vue.component('event', {
    props: {
        info:{
            type: Array
        }
    },
    template:`
        <div>
            <div  v-for="i in info">
                <h1>{{i.name}}</h1>
                <p>{{i.school}}</p>
                <button @click="$emit('remove', i.id)">Delete</button>
            </div>
            
        </div>
    `,
    methods: {
        hello(){
            console.log('Hello Hello!');
            this.$emit('ev');
        }
    },
})

Vue.component('test', {
    template: `<div>Testing</div>`
})

const app = new Vue({
    el:'#root'
})

const app1 = new Vue({
    el: '#root1',
    data(){
        return{
            info : [
                {id:1, name: 'Rick', school: 'school1'},
                {id:2, name: 'John', school: 'school2'},
                {id:3, name: 'Dave', school: 'school3'}
            ]
        }
    },
    methods: {
        remove(id){
            console.log('removing id.....', id);
            this.info=this.info.filter(e => e.id != id );
        }
    },
})