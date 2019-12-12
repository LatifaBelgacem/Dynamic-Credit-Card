
import React, { Component } from 'react';
import './Credit.css';


class Affiche extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Credit-card'>
                <div className="Credit-card-form">
                    <div className="Credit-card-title">
                        <p className="Credit-card-name">Company name</p>
                    </div>
                    <div className="credit-card-chip">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzZAtgq1ysgXf_DOI2b9VIdMHvFSGc2wyYDt88DyJO06DwI7r" alt="credit" width="100%"></img>
                    </div>
                    <div className="Credit-card-number">
                        <p className="classeyt">{this.props.number}</p>
                    </div>
                    <div className="classnine">
                        <div className="classten">
                            <p className="Credit-card-name">{this.props.Holder}</p>
                        </div>
                        <div>
                            <p className="Credit-card-name">{this.props.date?this.props.date.slice(0,2)+'/'+this.props.date.slice(2):'00/00'}</p>
                        </div>
                        <div>
                            <img className="classonze" src={'https://s.olj.me/storage/attachments/753/752364_16990157876_565239.jpeg/r/800'} />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Affiche;