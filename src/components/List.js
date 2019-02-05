import React ,{Component} from 'react'
import Item from './Item';

class List extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        let {cities} = this.props;
        return(
            <div className={"list__cities"}>
                {
                    Object.values(cities).length ? Object.values(cities).map(city_weather => {
                        return <Item key={city_weather.id} removeCity={this.props.removeCity} data={city_weather}/>
                    }) : ''
                }
            </div>
        )
    }
}

export default List;
