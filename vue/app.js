Vue.createApp({
    data() {
        return {
            goal: '',
            defaultGoal: 'Qua mon ung dung web',
            inputType: 'text'

        }
    },

    methods: {
        showGoal() {
            if (this.goal.length == 0) {
                alert(`${this.defaultGoal}`)
            } else {
                alert(`${this.defaultGoal + ' và ' + this.goal}`)
            }
        },
        showDiv() {
            alert(`${this.defaultGoal + this.goal}`)
        },
        changeType() {
            this.inputType = 'password'
        },
        changeGoal() {
            this.defaultGoal = this.goal
            this.goal = ''
        }
    }
}).mount("#app")