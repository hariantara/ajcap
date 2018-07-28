import axios from  'axios'

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