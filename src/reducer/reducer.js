const initialState = {
    jsonData: [],
    tabs: 0
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE':
            return { ...initialState, jsonData: [...state.jsonData, action.payload], tabs: state.tabs };

        case 'TAB_UPDATE':
            return { ...initialState, jsonData: [...state.jsonData], tabs: state.tabs - (action.payload * -1) };

        case 'RESET':
            return { ...initialState, jsonData: [...state.jsonData], tabs: 0 };

        default:
            return { ...initialState, state }
    }
}

export default Reducer; 