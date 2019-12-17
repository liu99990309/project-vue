export default {
    INT(state, { list }) {
        state.list = list
    },
    DEL(state, { id }) {
        state.list = state.list.filter(item => item.id !== id)
    }
}