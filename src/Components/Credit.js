import React, { Component } from 'react';
import './Credit.css';
import Affiche from './Affiche';

class Credit extends Component {
    constructor() {
        super();
        this.state = {
            number: '**** **** **** ****',
            Holder: '',
            date: '**/**'

        }
        // this.changenumber = this.changenumber.bind(this);
        // this.changeHolder = this.changeHolder.bind(this);
        // this.changedate = this.changedate.bind(this);
    }

    changenumber=(e)=> {
        
        var number=e.target.value
        if(number.match('^[0-9]+$') && number.length <17)
        {
             this.setState({
              number:number 
         });}
    }

    changeHolder=(e)=> {
        if(e.target.value.match(/^[A-Za-z]+$/))
        this.setState({
            Holder: e.target.value.toUpperCase()
        });
    }

    // changedate(e) {
    //     // const renderValidThru = number => {
    //     //     number = number.toString()
    //     //      // '1150'
    //     //      // number.slice(0, 2) === '11'
    //     //      // number.slice(2) === '50'
    //     //      return number.slice(0, 2) + '/' + number.slice(2)
    //     //    }
    //     // console.log(e.target.value.length<5)

    //     if(e.target.value.match('^[0-9]+$') && e.target.value.length <5)
    //    {
    //      if(e.target.value.slice(0,2)<='12')
    //        { this.setState({
    //         date : e.target.value.slice(0, 2) + '/' + e.target.value.slice(2)
    //         });}
    //    }

    // }
    changedate=(e)=> {
        
        const renderValidThru = (number) => {
            number = number.toString()
            // '1150'
            // number.slice(0, 2) === '11'
            // number.slice(2) === '50'
         if(number.slice(0,1)<'2'){
             console.log('number.slice(0,1)',number.slice(0,1));
            if((number.slice(0,2)<='12'))
            return number 
         }
           
          }
  
        if (e.target.value.length <= 4){
            this.setState({
                   date: renderValidThru(e.target.value)
                  });
        } 
    }






    render() {
        return (
            <div className="classdouze">
                <div>
                    <Affiche number={this.state.number} Holder={this.state.Holder} date={this.state.date} />
                </div>
                <div className='classtreize'>
                    <div>
                        <input maxLength='16' id='one' type='number' onChange={this.changenumber} placeholder='Credit card number' value={this.state.number} />
                    </div>
                    <div>
                        <input maxLength='20' id='two' type='text' onChange={this.changeHolder} placeholder="Credit card name holder" value={this.state.Holder} />
                    </div>
                    <div>
                        <input maxLength='4' type='number' onChange={this.changedate} placeholder="Credit card expiration date" value={this.state.date} />
                    </div>
                </div>
            </div>
        );

    }
       
}
export default Credit;