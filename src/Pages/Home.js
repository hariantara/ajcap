import React, {Component} from 'react'

import Navbar from  '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Category from '../Components/Category'
import Detail from '../Components/Detail'

import { connect } from 'react-redux'
import {
    getDataInsuranceAPI, 
    getSortInsuranceDataDateAPI,
    getDataInsuranceDataAmountAPI
} from '../Redux/Action'

import '../Styles/content.css'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            listDataInsurane: [],
            searchBar: '',
            getDetailById: '',
            getDetailByIdStatus: false,
            search: '',
            searchData: [],
            sortStatus: false,
            sortData: [],
            sortAmountStatus: false,
            sortAmountData: []
        }
    }

    componentDidMount(){
        this.props.fetchInsuranceData()
        this.setState({listDataInsurane: this.props.insuranceDatas})
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps: ', nextProps)
        if(nextProps.hasOwnProperty('insuranceDatas')){
            this.setState({listDataInsurane: nextProps.insuranceDatas})
        }
    }
    getDetailById = async(e) => {
        console.log('masuk getDetailById ===> Home', e)
        await this.setState({getDetailById: e, getDetailByIdStatus: true})
    }
    getBackDetail = () => {
        this.setState({
            getDetailByIdStatus: false
        })
    }
    search = (e) => {
        this.setState({search: e})
    }
    sort = async (e) => {
        console.log('SORT: ',e)
        if(e === true){
            await this.props.fetchInsuranceSortDate()
            await this.setState({
                sortStatus: e,
                sortData: this.props.sortDate   
            })
        }
    }

    sortByTotalAmount = async(e) => {
        console.log(e)
        if(e === true) {
            await this.props.fetchInsuranceSortAmount()
            await this.setState({
                sortAmountStatus: e,
                sortAmountData: this.props.sortAmount
            })
        }
    }
    render(){
        console.log('props: ', this.props)
        console.log('state HOME: ', this.state) 
        let oldData
        let searchFilter
        if(this.state.search !== ''){
            searchFilter = this.state.listDataInsurane.filter(
                (data) => {
                  return data.plan.insuranceProviderName.toLowerCase().indexOf(this.state.search) !== -1
                }
            )
            oldData = searchFilter
        }
        else if(this.state.sortStatus) {
            oldData = this.state.sortData
        }
        else if(this.state.sortAmountStatus){
            oldData = this.state.sortAmountData
        }
        else {
            oldData = this.state.listDataInsurane
        }
        console.log('searchFilter: ', searchFilter)
        return(
            <div>
                <div className='Header row'>
                    <Navbar/>
                </div>  
                <div className='Content row'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <Category 
                                    search={this.search}
                                    sort={this.sort}
                                    sortByTotalAmount={this.sortByTotalAmount}
                                />
                            </div>
                            <div className='col-md-9'>
                                {
                                    this.state.getDetailByIdStatus ?
                                    <div>
                                        <div className='row'>
                                            <Detail
                                                dataDetail={this.state.getDetailById}
                                            />
                                        </div>
                                        <div className='row'>
                                            <button type="button" className="btn btn-danger" onClick={this.getBackDetail}>Back</button>
                                        </div>
                                    </div>
                                    :
                                    <Card 
                                        data={oldData}
                                        getDetailById={this.getDetailById}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='Footer row'>
                    <Footer/>
                </div>  
            </div>
        )
    }
}


//take reducer state 
const mapStateToProps = (state) => {
    console.log('state: ', state)
    return {
        insuranceDatas: state.insurances.datas,
        clientError: state.insurances.error_status,
        serverError: state.insurances.error_status,
        sortDate: state.insurances.sortDateData,
        sortAmount: state.insurances.sortAmountData
    }
}

//to run the axios to get or post data from the server endpoint
const mapDispatchToProps = (dispatch) => {
    return {
        fetchInsuranceData: () => dispatch(getDataInsuranceAPI()),
        fetchInsuranceSortDate: () => dispatch(getSortInsuranceDataDateAPI()),
        fetchInsuranceSortAmount: () => dispatch(getDataInsuranceDataAmountAPI())
    }
}

//wrap and send it to store
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedComponent