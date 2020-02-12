import React from 'react';
import './TodoItem.css'

class TodoItem extends React.Component{
        render(){
            const { label, done, important, show, onDelete, onDone, onImportant} = this.props;

            let className = 'TodoItem';

            if (done){
                className += ' done';
            }
            if (important){
                className += ' important'
            }

            if (!show){
                className += ' none';
            }

            return(
                <div className={className}>
                    <span onClick={onDone}>{label}</span>
                    <div>
                        <button onClick={onDelete} >Dell</button>
                        <button onClick={onImportant} >I</button>
                    </div>
                </div>

            )
        };
}


export default TodoItem;