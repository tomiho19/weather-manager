import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toast} from "react-toastify";
import { withRouter } from "react-router";

import Search from './Search';
import CurrentCity from './CurrentCity';
import List from './List';
import Preloader from './Preloader';
import config from '../config';
import {addCity, removeCity} from "../actions";

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {cities: props.cities, is_loaded: true};
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return Object.values(nextProps.cities).length >= 0;
    }

    getWeather = async (city, country = '') => {
        this.setState({is_loaded: false});
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${country ? ',' + country : ''}&appid=${config.API_KEY}&units=metric`);
        const data = await api_call.json();
        const high_charts_api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${data.id}&appid=${config.API_KEY}`);
        const high_charts_data = await high_charts_api_call.json();
        if (data && high_charts_data) {
            toast.success(`${city} weather has been loaded`);
            data.highcharts_data = high_charts_data.list;
            this.props.addCity(data.id, data);
        } else {
            toast.error('Weather has not been loaded, error occurred');
        }
        this.setState({is_loaded: true});
    };

    getCurrentCityWeather = async () => {
        const api_call = await fetch('http://ip-api.com/json?city');
        const data = await api_call.json();
        this.getWeather(data.city, data.country);
    };

    removeCity = (id) => {
        this.setState({is_loaded: true});
        this.props.removeCity(id);
    };

    render() {
        return (
            <main className="container">
                <Search getWeather={this.getWeather}/>
                <CurrentCity getCurrentCityWeather={this.getCurrentCityWeather}/>
                <List cities={this.state.cities} removeCity={this.removeCity}/>
                {!this.state.is_loaded ? <Preloader/> : ''}
            </main>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCity: (id, data) => {
        dispatch(addCity(id, data));
    },
    removeCity: (id) => {
        dispatch(removeCity(id));
    }
});

const mapStateToProps = (state)=>{
    return{
        cities : state.city.cities
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
