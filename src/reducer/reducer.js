const initialState = {
    jsonData: [],
    tabs: ""
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE':
            return { ...initialState, jsonData: [...state.jsonData, action.payload], tabs: state.tabs };

        case 'TAB_UPDATE':
            console.log(action.payload)
            return { ...initialState, jsonData: [...state.jsonData], tabs: action.payload };

        default:
            return { ...initialState, state }
    }
}

export default Reducer; 