import React, {PureComponent} from 'react'

import '../Styles/card.css'

import HDFCErgo from '../Static/img/HDFCErgo.png'
import RelianceGeneral from '../Static/img/RelianceGeneral.png'
import Religare from '../Static/img/Religare.png'

import { connect } from 'react-redux'
import {
    getDataInsuranceAPI, 
    getDetailDataByIdAPI, 
    itemsCheckBoxAPI,
} from '../Redux/Action'

import SmallCard from './SmallCard'

class Card extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            listDataInsurance: [],
            arrIndex: [],
            arrItem: [],
            checkedStatus: false,
        }
    }

    componentDidMount(){
        this.setState({
            listDataInsurance: this.props.data,
            arrItem: this.props.checkBoxDatas
        })
    }

    componentWillReceiveProps(nextProps){
        // console.log('nextPROPS CARD', nextProps)
        this.setState({
            listDataInsurance: nextProps.data,
            arrItem: nextProps.checkBoxDatas
        })
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

    checkBox = (e, id) => {
        console.log('i: ', e.target.id)
        console.log('id: ', id)
        this.setState({checkedStatus: !this.state.checkedStatus})
        if(e.target.checked){
            this.props.fetchItemsCheckBoxAPI(id)
        }else{
            const index = this.props.arrData.findIndex(item => item === id)
            this.props.arrData.splice(index, 1)
        }
        
    }

    render(){
        // onClick={(e)=> this.getId(data.plan.id)}
        // console.log('props Card: ', this.props)
        // console.log('state di CARD: ', this.state)
        console.log('props in CARD: ', this.props)
        return(
            <div className='row'>
                
                {
                    this.state.listDataInsurance.map((data, i)=>{
                        return (
                            <div key={i} className='col-md-4 card-box'>
                                {
                                    data.insuranceProviderId === 'HDFC_ERGO' ? 
                                        <SmallCard
                                            logo={HDFCErgo}
                                            planName={data.plan.planName}
                                            insuranceProviderName={data.plan.insuranceProviderName}
                                            sumInsured={data.sumInsured}
                                            premium={data.totalAmount.amount}
                                            date={data.plan.createdAt}
                                            getId={data.plan.id}
                                            funcGetId={this.getId}
                                            index={i}
                                            checking={this.checkBox}
                                            checked={this.state.checkedStatus}
                                            listCheckedData={this.props.getCheckBoxSelected}
                                            selectedData={this.props.checkBoxDatas}
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
                                            getId={data.plan.id}
                                            funcGetId={this.getId}
                                            index={i}
                                            checking={this.checkBox}
                                            checked={this.state.checkedStatus}
                                            listCheckedData={this.props.getCheckBoxSelected}
                                            selectedData={this.props.checkBoxDatas}
                                        />
                                    :
                                        <SmallCard
                                            logo={RelianceGeneral}
                                            planName={data.plan.planName}
                                            insuranceProviderName={data.plan.insuranceProviderName}
                                            sumInsured={data.sumInsured}
                                            premium={data.totalAmount.amount}
                                            date={data.plan.createdAt}
                                            getId={data.plan.id}
                                            funcGetId={this.getId}
                                            index={i}
                                            checking={this.checkBox}
                                            checked={this.state.checkedStatus}
                                            listCheckedData={this.props.getCheckBoxSelected}
                                            selectedData={this.props.checkBoxDatas}
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
        //insuranceDatas: state.insurances.datas,
        getDetailInsurance: state.insurances.detail,
        clientError: state.insurances.error_status,
        serverError: state.insurances.error_status,
        arrData: state.insurances.arr,
        checkBoxDatas: state.insurances.checkBoxDatas
    }
}

//to run the axios to get or post data from the server endpoint
const mapDispatchToProps = (dispatch) => {
    return {
        fetchInsuranceData: () => dispatch(getDataInsuranceAPI()),
        fetchDetailInsurance: (id) => dispatch(getDetailDataByIdAPI(id)),
        fetchItemsCheckBoxAPI: (data) => dispatch(itemsCheckBoxAPI(data)),
    }
}

//wrap and send it to store
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Card)

export default ConnectedComponent