import * as echarts from 'echarts'
import { mapState } from 'vuex'

const xKeyOptions = [
    {
        label: 'Month',
        value: 'monthString'
    },
    {
        label: 'Color',
        value: 'color'
    },
    {
        label: 'Trans',
        value: 'trans'
    },
    {
        label: 'Brand',
        value: 'brand'
    }
]
const yKeyOptions = [
    {
        label: 'Count',
        value: 'count'
    },
    {
        label: 'TotalPrice',
        value: 'total'
    }
]

export default {
    data() {
        return {
            // select options
            xKeyOptions,
            yKeyOptions,
            xKey: 'monthString',
            yKey: 'total',
            monthIndex: 0
        }
    },
    computed: {
        ...mapState(['list']),
        initData() {
            const years = this.getKey(this.list, 'year')
            const yearList = years.reduce((arr, year) => {
                Array.from({ length: 12 }, (item, index) => {
                    arr.push(`${year}_` + `0${index + 1}`.slice(-2))
                })
                return arr
            }, [])
            return {
                monthString: yearList,
                color: this.getKey(this.list, 'color'),
                trans: this.getKey(this.list, 'trans'),
                brand: this.getKey(this.list, 'brand')
            }
        },
        monthList() {
            return Array.from({ length: Math.ceil(this.initData.monthString.length / 4) }, (item, index) => {
                return {
                    label: `${this.initData.monthString[index * 4]}-${this.initData.monthString[index * 4 + 3]}`,
                    value: index
                }
            })
        },
        chartData() {
            const data = [...this.list]
            const initObj =
                this.initData[this.xKey] &&
                this.initData[this.xKey].reduce((obj, key) => {
                    obj[key] = []
                    return obj
                }, {})
            data.map(item => {
                const key = item[this.xKey]
                initObj[key].push(item)
            })
            const types = this.getKey(this.list, 'type')
            const initTypeData = types.reduce((obj, type) => {
                obj[type] = 0
                return obj
            }, {})
            const source = Object.keys(initObj).map(key => {
                return initObj[key].reduce(
                    (obj, item) => {
                        const v = item.type
                        obj[v] += item[this.yKey]
                        return obj
                    },
                    { ...initTypeData, [this.xKey]: key }
                )
            })
            const dimensions = [this.xKey, ...types]
            const series = types.map(() => ({ type: 'bar' }))
            return {
                dimensions,
                source: this.xKey === 'monthString' ? source.slice(this.monthIndex * 4, (this.monthIndex + 1) * 4) : source,
                series
            }
        }
    },
    watch: {
        chartData(v) {
            this.setChartOption(v)
        }
    },
    methods: {
        getKey(data, key) {
            return [...new Set(data.map(item => item[key]))]
        },
        setChartOption(data) {
            const { dimensions, source, series } = data
            const option = {
                legend: {},
                tooltip: {},
                dataset: {
                    dimensions,
                    source
                },
                xAxis: { type: 'category' },
                yAxis: {},
                series
            }
            this.chart.setOption(option)
        }
    },
    mounted() {
        this.chart = echarts.init(this.$refs.chart)
        this.setChartOption(this.chartData)
    },
    beforeDestroy() {
        this.chart.dispose()
    }
}
