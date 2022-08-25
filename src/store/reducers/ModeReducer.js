const modeReducer = (state = "light", action) => {
    switch (action.type) {
        case "CHANGE_MODE":
            return action.payload    
        default:
            return state
    }
}

export default modeReducer