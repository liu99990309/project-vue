import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            pageNo: 1,
            pageSize: 10
        }
    },
    computed: {
        ...mapState(['list']),
        tableData() {
            return this.list.slice((this.pageNo - 1) * this.pageSize, this.pageNo * this.pageSize)
        }
    },
    watch: {
        list(v) {
            if (Math.ceil(v.length / this.pageSize) < this.pageNo) {
                this.pageNo = Math.ceil(v.length / this.pageSize)
            }
        }
    },
    methods: {
        ...mapActions({
            del: 'DEL'
        })
    }
}
