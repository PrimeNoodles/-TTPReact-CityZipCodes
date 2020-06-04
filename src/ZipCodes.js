import React, { Component } from "react";
import axios from "axios";
class ZipCode extends Component {
    constructor(props){
       super(props);
       this.state={
           zip: '',
           city: null,
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
                .catch((err) => console.log(err));
                console.log(this.state);
    }

render(){
    return (
        <div>
        <form className = "text-center mt-3" onSubmit = {this.onSubmit}>
            <label>
            ZipCode
            <input className="ml-2"type="text" placeholder ="Enter Your zip code" value={this.state.zip} onChange = {this.ZipChange} />
            </label>
            <input type="submit" value="submit"/>
        </form>
            {this.state.allData.map(data => {
                console.log("Here");
                return data.City !== null ?(
                    <div>
                        <h1>{data.LocationText}</h1>
                        <ul>
                            <li>City: {data.City}</li>
                            <li>State: {data.State}</li>
                            <li>Total Wages: {data.TotalWages}</li>
                            <li>Tax Returned Filled: {data.TaxReturnsFiled}</li>
                            <li>Estimated Population: {data.EstimatedPopulation}</li>
                            <li>Location: ({data.Lat}, {data.Long})</li>
                        </ul>
                    </div>
                ) : (
                    <div>No Results Found</div>
                )
            })}
        </div>
    );
  }
}

export default ZipCode;