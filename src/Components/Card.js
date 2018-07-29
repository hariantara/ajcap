import React, {Component} from 'react'

import '../Styles/card.css'

import HDFCErgo from '../Static/img/HDFCErgo.png'
import RelianceGeneral from '../Static/img/RelianceGeneral.png'
import Religare from '../Static/img/Religare.png'

import { connect } from 'react-redux'
import {getDataInsuranceAPI, getDetailDataByIdAPI} from '../Redux/Action'

import SmallCard from './SmallCard'

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            listDataInsurance: [],
        }
    }

    componentDidMount(){
        this.setState({listDataInsurance: this.props.data})
    }

    componentWillReceiveProps(nextProps){
        this.setState({listDataInsurance: nextProps.data})
    }

    // doing filter by id and get its detail per id
    getId = async(e) => {
        console.log('e: ', e)
        await this.props.fetchDetailInsurance(e)
        await this.props.getDetailById(this.props.getDetailInsurance)
    }

    // reset back to '', to reverse to previous data
    resetGetId = () => {
        this.setState({detailById: ''})
    }

    render(){
        console.log('props Card: ', this.props)
        return(
            <div className='row'>
                
                {
                    this.state.listDataInsurance.map((data, i)=>{
                        return (
                            <div key={i} className='col-md-4 card-box' onClick={(e)=> this.getId(data.plan.id)}>
                                {
                                    data.insuranceProviderId === 'HDFC_ERGO' ? 
                                        <SmallCard
                                            logo={HDFCErgo}
                                            planName={data.plan.planName}
                                            insuranceProviderName={data.plan.insuranceProviderName}
                                            sumInsured={data.sumInsured}
                                            premium={data.totalAmount.amount}
                                            date={data.plan.createdAt}
                                        />
                                    :
                                    data.insuranceProviderId === 'RELIGARE_HEALTH' ?
                                        <SmallCard
                                            logo={Religare}
                                            planName={data.plan.planName}
                                            insuranceProviderName={data.plan.insuranceProviderName}
                                            sumInsured={data.sumInsured}
                                            premium={data.totalAmount.amount}
                                            date={data.plan.createdAt}
                                        />
                                    :
                                        <SmallCard
                                            logo={RelianceGeneral}
                                            planName={data.plan.planName}
                                            insuranceProviderName={data.plan.insuranceProviderName}
                                            sumInsured={data.sumInsured}
                                            premium={data.totalAmount.amount}
                                            date={data.plan.createdAt}
                                        />
                                }
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}

//take reducer state 
const mapStateToProps = (state) => {
    console.log('state: ', state)
    return {
        insuranceDatas: state.insurances.datas,
        getDetailInsurance: state.insurances.detail,
        clientError: state.insurances.error_status,
        serverError: state.insurances.error_status
    }
}

//to run the axios to get or post data from the server endpoint
const mapDispatchToProps = (dispatch) => {
    return {
        fetchInsuranceData: () => dispatch(getDataInsuranceAPI()),
        fetchDetailInsurance: (id) => dispatch(getDetailDataByIdAPI(id))
    }
}

//wrap and send it to store
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Card)

export default ConnectedComponent