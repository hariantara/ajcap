const defaultState = {
    data: {},
    datas: [],
    error_status: '',
    detail: {},
    sortDateData: [],
    sortAmountData: []
}

const insurancesReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'GET_LIST_DATA': 
            return {...state, datas: action.payload.listInsurances}
        case 'GET_BY_ID': 
            return {...state, detail: action.payload.detail}
        case 'GET_SORT_DATE': 
            return {...state, sortDateData: action.payload.sort_date}
        case 'GET_SORT_AMOUNT': 
            return {...state, sortAmountData: action.payload.sort_amount}
        case 'ERROR': 
            return {...state, error_status: action.payload.message}
        default: 
            return state
    }
}

export default insurancesReducer