import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import ItemAddForm from "../item-add-form";


export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: []
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++,
            done: false
        }
    }

    search(items, term) {
        if (term === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term) > -1
        })
    }

    deleteItem = (id) => {
        // новый state
        this.setState(({todoData}) => {
            const elx = todoData.findIndex((el) => el.id === id)
            //новый массив (для того, чтобы не изменять state напрямую
            const newArray = [...todoData.slice(0, elx), ...todoData.slice(elx + 1)]
            console.log(elx);
            return {
                todoData: newArray
            }
        })
    }
    addItem = (text) => {
        //собираем новый элемент для отправки в state
        const newItem = this.createTodoItem(text)
        //новый state
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArray
            }
        })
    }
    onToggleImprotant = (id) => {
        this.setState(({todoData}) => {
            const elx = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[elx];
            const newItem = {...oldItem, important: !oldItem.important}
            const newArray = [
                ...todoData.slice(0, elx),
                newItem,
                ...todoData.slice(elx + 1)
            ]
            return {
                todoData: newArray
            }
        })

    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const elx = todoData.findIndex((el) => el.id === id)
            const oldItem = todoData[elx];
            const newItem = {...oldItem, done: !oldItem.done}
            const newArray = [
                ...todoData.slice(0, elx),
                newItem,
                ...todoData.slice(elx + 1)
            ]
            return {
                todoData: newArray
            }
        })
    }
    onchangeInput = (term) => {
        this.setState({term})
    }

    render() {
        const {todoData, term} = this.state;
        const visibleItems = this.search(todoData, term)
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onchangeInput={this.onchangeInput}/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={visibleItems} onDeleted={this.deleteItem}
                          onToggleImprotant={this.onToggleImprotant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAddItem={this.addItem}/>
            </div>);
    }
}



