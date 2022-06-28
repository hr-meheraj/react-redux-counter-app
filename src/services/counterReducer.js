const initialCounterState = { count : 1};

const counterReducer = (state = initialCounterState, action) => {
    switch(action.type){
        case "INCREMENT_BY_ONE" : 
            return {
                ...state,
                count : state.count + 1
            }
        
        case "INCREMENT_BY_FIVE" : 
            return {
                ...state,
                count : state.count + 5
            }
        
        case "DECREMENT_BY_ONE" : 
            return {
                ...state,
                count : state.count - 1
            }
        
        case "DECREMENT_BY_FIVE" : 
            return {
                ...state,
                count : state.count - 5
            }
            
        
        case "RESET" : 
            return {
                ...state,
                count : 0
            }
            
        default : 
            return state;
    }
}

export default counterReducer;