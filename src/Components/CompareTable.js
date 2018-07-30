import React, {Component} from 'react'

import { connect } from  'react-redux'
import { resetCheckBoxDatasAPI } from '../Redux/Action'

class CompareTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataCompare: []
        }
    }

    componentDidMount(){
        this.setState({dataCompare: this.props.comparison})
    }

    componentWillReceiveProps(nextProps){
        this.setState({dataCompare: nextProps.comparison})
    }

    resetData = () => {
        this.props.fetchResetCheckBoxDatasAPI()
        this.props.backButton(false)
    }
    render(){
        console.log("WWWWWWWW ", this.state.dataCompare)
        let {dataCompare} = this.state 
        return(
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" colspan="1">Id</th>
                                <th scope="col" colspan="2">Provider Name</th>
                                <th scope="col">Premium</th>
                                <th scope="col" colspan="2">Sum Insured</th>
                                <th scope="col" colspan="2">Medical</th>
                                <th scope="col" colspan="2">Travel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataCompare.map((data, i)=>{
                                    return (
                                        <tr class="table-active">
                                            <td>{data.insuranceProviderId}</td>
                                            <td colspan="2">{data.plan.insuranceProviderName}</td>
                                            <td>{data.totalAmount.amount}</td>
                                            <td colspan="2">{data.sumInsured}</td>
                                            <td colspan="2">{
                                                data.plan.planBenefitCategories.MedicalFeatures.map((benefit, j)=>{
                                                    return(
                                                        <div>
                                                            <ul>
                                                                <li>{benefit.benefitId}</li>
                                                                <li>{benefit.benefitName}</li>
                                                                <li>{benefit.benefitValue}</li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }</td>
                                            <td colspan="2">{
                                                data.plan.planBenefitCategories.TravelFeatures.map((benefit, j)=>{
                                                    return(
                                                        <div>
                                                            <ul>
                                                                <li>{benefit.benefitId}</li>
                                                                <li>{benefit.benefitName}</li>
                                                                <li>{benefit.benefitValue}</li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })
                                            }</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table> 
                    </div>
                    <div className='row'>
                        <button type="button" class="btn btn-danger" onClick={this.resetData}>Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

//take reducer state 
const mapStateToProps = (state) => {
    console.log('state: ', state)
    return {
        comparison: state.insurances.comparisonData
    }
}

//to run the axios to get or post data from the server endpoint
const mapDispatchToProps = (dispatch) => {
    return {
        fetchResetCheckBoxDatasAPI: () => dispatch(resetCheckBoxDatasAPI())
    }
}

//wrap and send it to store
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(CompareTable)

export default ConnectedComponent