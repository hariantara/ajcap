import React, {Component} from 'react'

import moment from 'moment'
import {Input, FormGroup} from 'reactstrap'

class SmallCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            logo: '',
            planName: '',
            insuranceProviderName: '',
            sumInsured: '',
            premium: '',
            date: '',
            index: '',
            selectData: []
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            logo: nextProps.logo,
            planName: nextProps.planName,
            insuranceProviderName: nextProps.insuranceProviderName,
            sumInsured: nextProps.sumInsured,
            premium: nextProps.premium,
            date: nextProps.date,
            index: nextProps.index,
            selectData: nextProps.selectData
        })
        this.props.listCheckedData(nextProps.selectData)
    }

    componentDidMount(){
        this.setState({
            logo: this.props.logo,
            planName: this.props.planName,
            insuranceProviderName: this.props.insuranceProviderName,
            sumInsured: this.props.sumInsured,
            premium: this.props.premium,
            date: this.props.date,
            index: this.props.index,
            selectData: this.props.selectData
        })
        this.props.listCheckedData(this.props.selectData)
    }

    getDataId = (e) => {
        console.log('smal card eee: ', e)
        this.props.funcGetId(e)
    }

    render(){
        // console.log('SMALL CARD: ', this.props)
        // console.log('SAL: ', this.props.index)
        return(
            <div>
                <div className='Card'>
                    <div className="card mb-3">

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-md-10'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <h5 className="card-title card-font" onClick={(e)=>this.getDataId(this.props.getId)}>{this.state.insuranceProviderName}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-1'>
                                            <FormGroup check>
                                                <Input 
                                                    id={this.state.index}
                                                    type="checkbox" 
                                                    checked={this.props.checked[this.state.index]}
                                                    onChange={(e, id)=>this.props.checking(e, this.props.getId)}
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className='col-md-12'>
                                            <p className="card-title">{this.state.planName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row img-mrgn-top'>
                            <div className='col-md-12'>
                                <img style={{height: '200px', width: '100%', display: 'block'}} src={this.state.logo} alt="Card"/>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="card-body">
                                    <p className="card-text">Sum Insured: {this.state.sumInsured}</p>
                                    <p className="card-text">Premium: {this.state.premium}</p>
                                    <p className="card-text">Date Created: {moment(this.state.date).format('YYYY/MM/DD')}</p>
                                    <p className="card-text">Time Created: {moment(this.state.date).format('HH:mm')}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SmallCard