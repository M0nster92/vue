window.Event = new Vue();

Vue.component('coupon', {
    template: `
        <div>
            <label>coupon</label>
            <input type="text" @blur="onApplied">
        </div>
        
    `,
    methods: {
        onApplied(){
            this.$emit('applied');
        }
    },
});

Vue.component('siblings', {
    template:`
        <div>
            <button @click="trigger">Event</button>
        </div>
    `,
    methods:{
        trigger(){
            Event.$emit('applied');
        }
    }
});


new Vue({
    el:'#root',
    data(){
        return{
            couponApplied : false
        }
    },
    methods: {
        onApplied(){
            this.couponApplied = true;
        }
    },

    created(){
        Event.$on('applied', () => this.couponApplied = true);
    }
})