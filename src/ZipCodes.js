import React, { Component } from "react";
import axios from "axios";
class ZipCode extends Component {
    constructor(props){
       super(props);
       this.state={
           zip: '',
           show: true,
           allData: [],
       };
    }
    ZipChange = (event) => {
        this.setState({
            zip: event.target.value
        });
    }
    onSubmit = (event) => {
            event.preventDefault();
            axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.state.zip)
                .then((response) => {
                this.setState({allData: response.data});
                console.log("State", this.state);
                  })
                .catch((err) => this.setState({show: false}));
                this.setState({show: true});
    }
render(){
    let x = this.state.show === true ? (
        <div>
            <form className = "text-center mt-3" onSubmit = {this.onSubmit}>
                <label>
                ZipCode
                <input className="ml-2"type="text" placeholder ="Enter Zip Code" value={this.state.zip} onChange = {this.ZipChange} />
                </label>
                <input type="submit" value="submit"/>
            </form>
                {this.state.allData.map(data => {
                    return (
                        <div id="size" className = "card border-danger mb-3 mt-3">
                         <div className ="card-header">{data.LocationText}</div>
                          <div className ="card-body  text-danger">
                            <h5 className ="card-title">{data.City}</h5>
                             <ul>
                                <li>City: {data.City}</li>
                                 <li>State: {data.State}</li>
                                 <li>Total Wages: {data.TotalWages}</li>
                                 <li>Tax Returned Filled: {data.TaxReturnsFiled}</li>
                                 <li>Estimated Population: {data.EstimatedPopulation}</li>
                                 <li>Location: ({data.Lat}, {data.Long})</li>
                             </ul>
                         </div>
                        </div>
                    )
                })}
        </div>):(
        <div>
            <form className = "text-center mt-3" onSubmit = {this.onSubmit}>
                <label>
                ZipCode
                <input className="ml-2"type="text" placeholder ="Try 10016" value={this.state.zip} onChange = {this.ZipChange} />
                </label>
                <input type="submit" value="submit"/>
            </form>
           <h4 className = "text-center">Results Not Found</h4>
        </div>)
    return(
    <div>{x}</div>)
  }
}
export default ZipCode;