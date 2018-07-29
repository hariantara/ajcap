import axios from  'axios'
import moment from 'moment'

export const getDataInsurance = (datas) => ({
    type: 'GET_LIST_DATA',
    payload: {
        listInsurances: datas
    }
})

export const Error = (err) => ({
    type: 'ERROR',
    payload: {
        message: err
    }
})

export const getDetailDataById = (detail) => ({
    type: 'GET_BY_ID',
    payload: {
        detail
    }
})

export const getSortInsuranceDataDate = (sort_date) => ({
    type: 'GET_SORT_DATE',
    payload: {
        sort_date
    }
})

export const getDataInsuranceDataAmount = (sort_amount) => ({
    type: 'GET_SORT_AMOUNT',
    payload: {
        sort_amount
    }
})

export const getDataInsuranceAPI = () => {
    return async (dispatch, getState) => {
        try{
            let fetch = await axios.get(`http://localhost:3000/content`)
            dispatch(getDataInsurance(fetch.data))
            // console.log('fetch: ', fetch)
        }catch(err){
            console.log('x=x=x=>', err.response)
            if(err.response === undefined){
                dispatch(Error(500)) // internal server error
            }else {
                dispatch(Error(err.response.status)) // bad request
            }
        }
    }
}

export const getDetailDataByIdAPI = (id) => {
    return async (dispatch, getState) => {
        try{
            console.log('actin id: ', id)
            let fetch = await axios.get(`http://localhost:3000/content`)
            console.log('fetchID: ', fetch)
            let detailDataPerId = []
            await fetch.data.map(data => {
                if(data.plan.id === id){
                    detailDataPerId.push(data)
                }
            })
            console.log('detailDataPerId: ', detailDataPerId)
            dispatch(getDetailDataById(detailDataPerId[0]))
        }catch(err){
            console.log('x=x=x=>', err.response)
            if(err.response === undefined){
                dispatch(Error(500)) // internal server error
            }else {
                dispatch(Error(err.response.status)) // bad request
            }
        }
    }
}

export const getSortInsuranceDataDateAPI = () => {
    return async (dispatch, getState) => {
        try{
            let fetch = await axios.get(`http://localhost:3000/content`)
            let sortir = fetch.data.sort((a, b)=>{
                console.log('aaaaa', a)
                console.log('bbbbb',b)
                return new Date(moment(b.plan.createdAt).format('YYYY-MM-DD')) - new Date(moment(a.plan.createdAt).format('YYYY-MM-DD'))
            })
            console.log('sortir: ', sortir)
            dispatch(getSortInsuranceDataDate(sortir))
        }catch(err){
            console.log('x=x=x=>', err.response)
            if(err.response === undefined){
                dispatch(Error(500)) // internal server error
            }else {
                dispatch(Error(err.response.status)) // bad request
            }
        }
    }
}

export const getDataInsuranceDataAmountAPI = () => {
    return async (dispatch, getState) => {
        try{
            let fetch = await axios.get(`http://localhost:3000/content`)
            let sortir = fetch.data.sort((a, b)=>{
                console.log('aaaaa', a)
                console.log('bbbbb',b)
                return b.totalAmount.amount - a.totalAmount.amount
            })
            console.log('sortir: ', sortir)
            dispatch(getDataInsuranceDataAmount(sortir))
        }catch(err){
            console.log('x=x=x=>', err.response)
            if(err.response === undefined){
                dispatch(Error(500)) // internal server error
            }else {
                dispatch(Error(err.response.status)) // bad request
            }
        }
    }
}