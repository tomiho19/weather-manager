import React ,{Component} from 'react'

class CurrentCity extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <button onClick={this.props.getCurrentCityWeather} className={"btn-warning form-control current__city"}>Current City</button>
        )
    }
}

export default CurrentCity;