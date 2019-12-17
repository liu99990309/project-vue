const transDate = dateNum => {
    const date = new Date(1900, 0, dateNum - 1)
    return {
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
}

export default {
    INT({ commit }, { list }) {
        commit({
            type: 'INT',
            list: list.map((item, index) => {
                const { month, year } = transDate(~~item.date)
                return { ...item, id: index + 1, year, month, price: parseInt(item.price, 10), count: parseInt(item.count, 10), total: parseInt(item.total, 10), monthString: `${year}_${('0' + month).slice(-2)}` }

            })
        })
    },
    DEL({ commit }, { id }) {
        commit({
            type: 'DEL',
            id
        })
    }
}