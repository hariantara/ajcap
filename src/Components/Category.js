import React, {Component} from 'react'

import '../Styles/searchButton.css'

class Category extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log('ini props bro: ', this.props)
        return(
            <div className='Category'>
                <div className='search'>
                <form className="form-inline my-2 my-lg-0">
                    <div className='row'>
                        <div className='col-md-12'>
                            <input className="form-control search-bar" type="text" placeholder="Search" onChange={(e)=>this.props.filter(e.target.value)}/>
                        </div>
                    </div>
                </form>
                <br/><br/>
                </div>
                <div className="list-group">
                    <a className="list-group-item list-group-item-action active">Sort By</a>
                    <a className="list-group-item list-group-item-action" style={{cursor: 'pointer'}}>Date</a>
                    <a className="list-group-item list-group-item-action" style={{cursor: 'pointer'}}>Total Amount</a>
                </div>
            </div>
        )
    }
}

export default Category