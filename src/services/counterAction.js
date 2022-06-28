import { DECREMENT_BY_FIVE, DECREMENT_BY_ONE, INCREMENT_BY_FIVE, INCREMENT_BY_ONE, RESET } from "./counterConstants"

export const incrementByOne = () => {
    return {
        type : INCREMENT_BY_ONE
    }
}
export const incrementByFive = () => {
    return {
        type : INCREMENT_BY_FIVE
    }
}

export const decrementByOne = () => {
    return {
        type : DECREMENT_BY_ONE
    }
}

export const decrementByFive = () => {
    return {
        type : DECREMENT_BY_FIVE
    }
}

export const reset = () => {
    return {
        type : RESET
    }
}