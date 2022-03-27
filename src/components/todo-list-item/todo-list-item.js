import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    // инициализирование state=========================================================================================>
    state = {
        done: false,
        important: false
    }


    // // если состояние зависит от предыдущего состояния=================================================================>
    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     })
    // }
    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         }
    //     })
    // }
    //
    //
    // // если состояние НЕ! зависит от предыдущего состояния=============================================================>
    // // onMarkImportant = () => {
    // //     this.setState({
    // //         state: true
    // //     })
    // // }


    render() {
        const {label, onDeleted, onToggleDone, onToggleImprotant, done, important} = this.props;
         //перечеркивание текста========================================================================================>
        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }
        if (important) {
            classNames += " important";
        }


        return (
            <div>
                <span className={classNames}><span className="todo-list-item-label"
          // добавляем обработчик события==============================================================================>
          onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
          // добавляем обработчик события==============================================================================>
              onClick={onToggleImprotant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
    </span>
            </div>
        );
    }
}

