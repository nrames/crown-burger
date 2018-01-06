const locations = (state = [], action) => {
    switch (action.type) {
        case 'SET_LOCATIONS':
            return action.locations
        default:
            return state;
    }
}
export default locations;