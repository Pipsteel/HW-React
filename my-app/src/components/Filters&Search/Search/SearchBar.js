import React from 'react';
import './search.css'

class SearchBar extends React.Component{

    render(){
        const {onSearch} = this.props;
        return(
        <input onChange={onSearch} placeholder="search"/>
    )
    };

}
export default SearchBar