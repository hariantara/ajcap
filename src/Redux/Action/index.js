import axios from  'axios'
import moment from 'moment'
import _ from 'lodash'

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

export const itemsCheckBox = (data) => ({
    type: 'CHECKBOX',
    payload: {
        data
    }
})

export const comparisonData = (dataArray) => ({
    type: 'COMPARE',
    payload: {
        datas: dataArray
    }
})

export const resetCheckBoxDatas = () => ({
    type: 'RESET_CHECKBOX_DATA',
    payload: {
        data: []
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

export const itemsCheckBoxAPI = (data) => {
    return async (dispatch, getState) => {
        try{
            dispatch(itemsCheckBox(data))
        }catch(err){
            console.log(err)
        }
    }
}

export const comparisonDataAPI = (data) => {
    return async (dispatch, getState) => {
        try{
            let fetch = await axios.get(`http://localhost:3000/content`)
            let dataArray = []
            let newSelectedData = await data.map(datum => {
                return _.filter(fetch.data, (res)=>{
                    return res.plan.id === datum
                })
            })
            
            await newSelectedData.map(data => {
                dataArray.push(data[0])
            })
            console.log('dataArray: ', dataArray)
            if(dataArray.length > 0)dispatch(comparisonData(dataArray))
        }catch(err){
            console.log(err)
        }
    }
}

export const resetCheckBoxDatasAPI = () => {
    return async (dispatch, getState) => {
        try{
            dispatch(resetCheckBoxDatas())
        }catch(err){
            console.log(err)
        }
    }
}