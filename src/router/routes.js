import Index from '@src/pages/index/index.vue'
import TableList from '@src/pages/table-list/index.vue'
import Chart from '@src/pages/chart/index.vue'

export default [
    {
        path: '/',
        title: '上传数据',
        component: Index
    },
    {
        path: '/table',
        title: '查看列表',
        component: TableList
    },
    {
        path: '/chart',
        title: '查看图表',
        component: Chart
    },
    {
        path: '*',
        redirect: '/'
    }
]
