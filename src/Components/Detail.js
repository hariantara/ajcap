import React, {Component} from 'react'

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            medical: [],
            travel: [] 
        }
    }
    componentDidMount(){
        this.setState({
            medical: this.props.dataDetail.plan.planBenefitCategories.MedicalFeatures,
            travel: this.props.dataDetail.plan.planBenefitCategories.MedicalFeatures
        })
    }

    componentWillReceiveProps(nextProps){
        console.log('anu: ', nextProps.dataDetail.plan.planBenefitCategories.MedicalFeatures)
        this.setState({
            medical: nextProps.dataDetail.plan.planBenefitCategories.MedicalFeatures,
            travel: nextProps.dataDetail.plan.planBenefitCategories.TravelFeatures
        })
    }

    render(){
        
        return(
            <div className='row'>
                <div className='col-md-6'>
                {
                    this.state.medical.map((data, i)=>{
                        return (
                            <div key={i} className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                                <div className="card-header">Medical</div>
                                <div className="card-body">
                                    <h4 className="card-title">{data.benefitName}</h4>
                                    <p className="card-text">{data.benefitValue}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className='col-md-6'>
                {
                    this.state.travel.map((data, i)=>{
                        return (
                            <div key={i} className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                                <div className="card-header">Travel</div>
                                <div className="card-body">
                                    <h4 className="card-title">{data.benefitName}</h4>
                                    <p className="card-text">{data.benefitValue}</p>
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

export default Detail