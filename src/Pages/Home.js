import React, {Component} from 'react'

import Navbar from  '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Category from '../Components/Category'

import { connect } from 'react-redux'
import {getDataInsuranceAPI} from '../Redux/Action'

import '../Styles/content.css'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            listDataInsurane: [],
            searchBar: ''
        }
    }

    componentDidMount(){
        this.props.fetchInsuranceData()
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps: ', nextProps)
        if(nextProps.hasOwnProperty('insuranceDatas')){
            this.setState({listDataInsurane: nextProps.insuranceDatas})
        }
    }

    getDataForFilterSearch = (e) => {
        console.log('getDataForFilterSearch: ', e)
        this.setState({searchBar: e})
    }
    render(){
        console.log('props: ', this.props)
        console.log('state: ', this.state.searchBar) 
        let filter 
        if(this.state.listDataInsurane.length !== 0){
            filter = this.state.listDataInsurane.filter(
                (data) => {
                console.log('home bro: ', data)
                  return data.plan.insuranceProviderName.toLowerCase().indexOf(this.state.searchBar.toLowerCase()) !== -1 
                }
            )
        }
        return(
            <div>
                <div className='Header row'>
                    <Navbar/>
                </div>  
                <div className='Content row'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <Category filter={this.getDataForFilterSearch}/>
                            </div>
                            <div className='col-md-9'>
                                <Card data={filter}/>
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
        serverError: state.insurances.error_status
    }
}

//to run the axios to get or post data from the server endpoint
const mapDispatchToProps = (dispatch) => {
    return {
        fetchInsuranceData: () => dispatch(getDataInsuranceAPI()),
    }
}

//wrap and send it to store
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedComponent