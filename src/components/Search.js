import React ,{Component} from 'react'
import {useShallowEqual} from 'shouldcomponentupdate-children';
import Autocomplete from 'react-autocomplete';

import cities from '../assets/current.city.list';

class CSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search_value: '',
            placeholder: 'Enter your city name'
        }
    }

    render(){
        let { placeholder, search_value } = this.state;
        return(
            <Autocomplete
                getItemValue={(item) => item.name}
                items={cities}
                renderItem={(item, isHighlighted) =>
                    <div className={`${isHighlighted ? 'active' : ''}`}>
                        {item.name}
                    </div>
                }
                inputProps={{placeholder, className: 'search-input search__city'}}
                value={search_value}
                shouldItemRender={(item, value) => !!value && item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                onChange={(e) => {this.setState({search_value: e.target.value, placeholder: ''})}}
                onMenuVisibilityChange={() => {
                    this.setState({placeholder: placeholder ? '' : 'Enter your city name'})
                }}
                onSelect={(selected_value) => {
                    this.setState({search_value: '', placeholder: 'Enter your city name'});
                    this.props.getWeather(selected_value);
                }}
            />
        )
    }
}

const Search = useShallowEqual(CSearch);

export default Search;