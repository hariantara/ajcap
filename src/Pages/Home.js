import React, {Component} from 'react'

import Navbar from  '../Components/Navbar'
import Footer from '../Components/Footer'

import { connect } from 'react-redux'
import {getDataInsuranceAPI} from '../Redux/Action'

import '../Styles/content.css'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            listDataInsurane: []
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

    render(){
        console.log('props: ', this.props)
        console.log('state: ', this.state.listDataInsurane)
        return(
            <div>
                <div className='Header row'>
                    <Navbar/>
                </div>  
                <div className='Content row'>
                    <div className='container'>
                        <div className='row'>
                            <div>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
                                <p>Some text some text some text some text..</p>
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