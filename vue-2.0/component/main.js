
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
        },
        len : {
            type: Number
        }
    },

    data(){
        return{
            name: '',
            school: '',
        }
    },
    template:`
        <div>
            <p>Length: {{len}}</p>
            <div  v-for="i in sortedInfo">
                <h1>{{i.id}} -- {{i.name}}</h1>
                <p>{{i.school}}</p>
                <button @click="$emit('remove', i.id)">Delete</button>
            </div>

            <div>
                <h1>Insert Form</h1>
                <input type='text' placeholder='name...' v-model='name'>
                <input type='text' placeholder='school...' v-model='school'>
                <button @click="insert">Add</button>
            </div>
            
        </div>
    `,
    methods: {
        hello(){
            console.log('Hello Hello!');
            this.$emit('ev');
        },
        insert(){
            console.log('inserting info...',this.name, this.school);

            this.$emit('insert', this.name, this.school);

            this.name = '';
            this.school = '';
        }
    },

    computed:{
        sortedInfo(){
            return this.info.sort((a, b) => a.id - b.id);
        }
    }
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
        },

        insert(name, school){
            latest_id = this.info.sort((b,a) => a.id - b.id)[0].id;
            new_id = latest_id + 1;
            const obj = {
                id: new_id,
                name : name,
                school : school
            };

            this.info.push(obj);
            //console.log('Final function...', name, school)
        }
    },
})