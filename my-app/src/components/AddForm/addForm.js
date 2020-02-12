import React from 'react';
import './addForm.css'

class AddForm extends React.Component{
    state = {
        label: ''
    };

    onChange = (e) =>{
        let value = e.target.value;
        this.setState({label: value})
    };
    clear = () =>{
        this.setState({label: ''})
    };
    render(){
        const { onAdd } = this.props;
        const { label } = this.state;
        return(
            <div className="addForm">
                <input onChange={this.onChange} className='inputTask' placeholder="Input Task" value={label}/>
                <button onClick={() => {onAdd(label); this.clear()}} className='btnAdd'>Add</button>
            </div>
        )
    }
}

export default AddForm;