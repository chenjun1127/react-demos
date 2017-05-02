const counter = (state = {count:0,text:'This is a Counter'}, action) => {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return {
                count: count + 1,
                text: action.text
            }
        case 'decrease':
            return {
                count: count - 1,
                text: action.text
            }
        default:
            return state
    }

}

export default counter
