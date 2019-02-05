import React, {Component} from 'react'
import {useShallowEqual} from 'shouldcomponentupdate-children';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';

class CItem extends Component {
    constructor(props) {
        super(props);
        Exporting(Highcharts);
    }

    componentDidMount() {
        this.renderChart();
    }

    renderChart = () => {
        let categories = this.props.data.highcharts_data.map(el => el.dt_txt.split(' ')[1].split('').slice(0, 5).join(''));
        let values = this.props.data.highcharts_data.map(el => parseFloat(el.main.temp));
        Highcharts.chart(`chart_city_${this.props.data.id}`, {
            chart: {
                height: (9 / 16 * 100) + '%',
                width: 530,
                type: 'spline'
            },
            title: {
                text: 'Daily Average Temperature'
            },
            subtitle: {
                text: 'Source: openweathermap.org'
            },
            xAxis: {
                categories
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            legend: {
                enabled: false
            },
            series: [
                {
                    data: values,
                    name: `Temperature (°C) in ${this.props.data.name}`,
                },
            ]

        })
    };

    render() {
        let {id, name, weather, main, coord} = this.props.data;
        return (
            <div className={"item__city"}>
                <div className="info__city">
                    <h2>Weather in {name}</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>Cloudiness</td>
                            <td>{weather[0].description}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{main.pressure}</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{main.humidity}</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{main.temp}</td>
                        </tr>
                        <tr>
                            <td>Max temperature</td>
                            <td>{main.temp_max}</td>
                        </tr>
                        <tr>
                            <td>Min temperature</td>
                            <td>{main.temp_min}</td>
                        </tr>
                        <tr>
                            <td>Geo coords</td>
                            <td>[{coord.lat}, {coord.lon}]</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className={'btn btn-danger'} onClick={() => {
                        this.props.removeCity(id)
                    }}>Remove city from list
                    </button>
                </div>
                <div className="chart_wrapper">
                    <div id={`chart_city_${this.props.data.id}`}></div>
                </div>
            </div>
        )
    }
}

const Item = useShallowEqual(CItem);

export default Item;
