import React from 'react';
import AppTitle from './components/Header/AppTitle/AppTitle'
import AppCount from './components/Header/AppCount/AppCount'
import SearchBar from './components/Filters&Search/Search/SearchBar'
import Filter from './components/Filters&Search/Filters/Filter'
import TodoList from './components/TodoListComponents/TodoList/TodoList'
import AddForm from './components/AddForm/addForm'
import './App.css'

class App extends React.Component{
    maxId = 100;
    todoTasks(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
            show: true
        };
    }

    state = {
        todoData: [ this.todoTasks('Learn React'), this.todoTasks('Learn Redux'),this.todoTasks('fuck this shit Im out') ]
    };

    markDone = (id) => {
        this.setState((prevState) =>{
            const nextState = prevState.todoData.map((item) => {
                if(item.id === id){
                    item.done = !item.done;
                }
                return item;
            });
            return{
                todoData: nextState
            };
        });
    };

    markImportant = (id) => {
        this.setState((prevState) => {
            const nextState = prevState.todoData.map((item) => {
                if(item.id === id){
                    item.important = !item.important
                };
                return item;
            });
            return{
                todoData: nextState
            };
        });
    };

    addTodo = (label) =>{
        console.log('addTodo');
        this.setState((prevState) =>{
            return{
                todoData: prevState.todoData.concat(this.todoTasks(label))
            };
        });
    };

    deleteItem = (id) => {
        this.setState((prevState) => {
            return {
                todoData: prevState.todoData.filter((item) => item.id !== id)
            };
        });
    };

    filterBtn = (status) =>{
        this.setState ((prevState) => {
            const nextState = prevState.todoData.map((item) => {
                    item.show = true;
                if(item.done !== status ){
                    item.show = false
                }
                return item;
            });
        return{
            todoData: nextState
        };
        });
    };

    showAll = () =>{
      this.setState((prevState) =>{
          const nextState = prevState.todoData.map((item) => {
              item.show = true;
              return item;
          });
          return{ todoData: nextState};
      });
    };

    search = (e) =>{

        let value = e.target.value;

        this.setState((prevState) =>{
            const nextState = prevState.todoData.map((item) =>{
                if (item.label.includes(value)){
                    item.show = true;
                }else {item.show = false}

                return item
            });
            return{
                todoData: nextState
            }
        });

    };

    render(){

        const {todoData} = this.state;
        const todo = todoData.filter((item) => !item.done).length;
        const done = todoData.length - todo;

        return(
            <div className='main'>
                <div className='AppTop'>
                    <AppTitle />
                    <AppCount todo={todo} done={done}/>
                </div>
                <div className='SerchFilter'>
                    <SearchBar onSearch ={this.search} />
                    <Filter onFilter ={this.filterBtn} onAll ={this.showAll}/>
                </div>
                <TodoList todos = {todoData} onDelete={this.deleteItem} onDone={this.markDone}
                          onImportant={this.markImportant}/>
                <div className='AddBotom'>
                    <AddForm onAdd={this.addTodo}/>
                </div>
            </div>
        )

};}

   export default App;
