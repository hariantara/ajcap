import React, {Component} from 'react'

import '../Styles/card.css'

import HDFCErgo from '../Static/img/HDFCErgo.png'
import RelianceGeneral from '../Static/img/RelianceGeneral.png'
import Religare from '../Static/img/Religare.png'

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            listDataInsurance: [],
            detailById: ''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data.length > 0){
            this.setState({listDataInsurance: nextProps.data})
        }
    }

    // doing filter by id and get its detail per id
    getId = (e) => {
        console.log('e: ', e)
        this.setState({detailById: e})
    }

    // reset back to '', to reverse to previous data
    resetGetId = () => {
        this.setState({detailById: ''})
    }

    render(){
        let getDetailById = this.state.listDataInsurance.filter(
            (data) => {
              return data.plan.id.indexOf(this.state.detailById) !== -1
            }
        )
        console.log('getDetailById: ', getDetailById)
        console.log('listDataInsurance: ', this.state.listDataInsurance)
        return(
            <div className='col-md-12'>
                <div className='row'>
                    {
                        this.state.detailById !== '' ? 
                            <div>
                                {
                                    getDetailById.map((data, i) => {
                                        return(
                                            <div className='row' key={i}>
                                                {
                                                    data.plan.planBenefitCategories.MedicalFeatures.map((datas, j)=>{
                                                        return(
                                                            <div className='col-md-5' key={j}>                                                   
                                                                <div class="alert alert-dismissible alert-primary">
                                                                    <a class="alert-link">Benefit Name: {datas.benefitName}</a>
                                                                    <br></br>
                                                                    <a class="alert-link">Benefit Value: {datas.benefitValue}</a>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                        )                             
                                    })
                                }
                                <div className='row'>
                                    <div className='col-md-5'>
                                    <button onClick={this.resetGetId} type="button" class="btn btn-primary">Back</button>
                                    </div>
                                </div>
                            </div>
                        :
                        
                            getDetailById.map((data, i)=> {
                                return (
                                    data.insuranceProviderId === 'HDFC_ERGO' ? 
                                    
                                        <div className='col-md-4 card-box' key={i} onClick={(e)=>this.getId(data.plan.id)}>
                                            <div className='Card'>
                                                <div className="card mb-3">
    
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className="card-body">
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <h5 className="card-title card-font">{data.plan.planName}</h5>
                                                                    </div>
                                                                    <div className='col-md-12'>
                                                                        <p className="card-title">{data.plan.insuranceProviderName}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                                    <div className='row img-mrgn-top'>
                                                        <div className='col-md-12'>
                                                            <img style={{height: '200px', width: '100%', display: 'block'}} src={HDFCErgo} alt="Card"/>
                                                        </div>
                                                    </div>
    
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className="card-body">
                                                                <p className="card-text">Sum Insured: {data.sumInsured}</p>
                                                                <p className="card-text">Premium: {data.totalAmount.amount}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    
                                    :
                                    data.insuranceProviderId === 'RELIGARE_HEALTH' ? 
                                    
                                        <div className='col-md-4 card-box' key={i} onClick={(e)=>this.getId(data.plan.id)}>
                                            <div className='Card'>
                                                <div className="card mb-3">
    
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className="card-body">
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <h5 className="card-title card-font">{data.plan.planName}</h5>
                                                                    </div>
                                                                    <div className='col-md-12'>
                                                                        <p className="card-title">{data.plan.insuranceProviderName}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                                    <div className='row img-mrgn-top'>
                                                        <div className='col-md-12'>
                                                            <img style={{height: '200px', width: '100%', display: 'block'}} src={Religare} alt="Card"/>
                                                        </div>
                                                    </div>
    
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className="card-body">
                                                                <p className="card-text">Sum Insured: {data.sumInsured}</p>
                                                                <p className="card-text">Premium: {data.totalAmount.amount}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                         :
                                        <div className='col-md-4 card-box' key={i} onClick={(e)=>this.getId(data.plan.id)}>
                                            <div className='Card'>
                                                <div className="card mb-3">
    
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className="card-body">
                                                                <div className='row'>
                                                                    <div className='col-md-12'>
                                                                        <h5 className="card-title card-font">{data.plan.planName}</h5>
                                                                    </div>
                                                                    <div className='col-md-12'>
                                                                        <p className="card-title">{data.plan.insuranceProviderName}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                                    <div className='row img-mrgn-top'>
                                                        <div className='col-md-12'>
                                                            <img style={{height: '200px', width: '100%', display: 'block'}} src={RelianceGeneral} alt="Card"/>
                                                        </div>
                                                    </div>
    
                                                    <div className='row'>
                                                        <div className='col-md-12'>
                                                            <div className="card-body">
                                                                <p className="card-text">Sum Insured: {data.sumInsured}</p>
                                                                <p className="card-text">Premium: {data.totalAmount.amount}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
    
                                    
                                )
                            })
                        
                    }
                </div>
            </div>
        )
    }
}

export default Card