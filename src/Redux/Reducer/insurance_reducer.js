const defaultState = {
    data: {},
    datas: [],
    error_status: ''
}

const insurancesReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'GET_LIST_DATA': 
            return {...state, datas: action.payload.listInsurances}
        case 'ERROR': 
            return {...state, error_status: action.payload.message}
        default: 
            return state
    }
}

export default insurancesReducer