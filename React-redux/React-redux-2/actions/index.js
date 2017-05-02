const increaseAction = (count, text) => {
    return {type: 'increase', count, text}
}
const decreaseAction = (count, text) => {
    return {type: 'decrease', count, text}
}
export {increaseAction, decreaseAction}
