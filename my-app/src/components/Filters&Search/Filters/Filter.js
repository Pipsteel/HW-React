import React from 'react';
import './Filter.css'

class Filter extends React.Component{
    render(){
        const {onFilter, onAll} = this.props;
        

        
        return(
            <div className='FilterBtns'>
                <button onClick={onAll}>All</button>
                <button onClick={() => {onFilter(false)}} >Active</button>
                <button onClick={() => {onFilter(true)}}>Done</button>
            </div>
    )
    };
}


export default Filter;