import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {DEL_TODO} from '../store/action-types';
import * as types from '../store/action-types';
class TodoList extends Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.todos.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            <input type="checkbox"
                                   onChange={()=>this.props.toggleTodo(item.id)}
                                   checked={item.completed}/>
                            <span style={{marginLeft:5,textDecoration:item.completed?'line-through':''}}>{item.title}</span>
                            <span className="pull-right">
                 <button
                     className="btn btn-danger btn-xs" onClick={()=>this.props.delTodo(item.id)}>X</button>
              </span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default connect(
    state => ({todos: state.todos}),
   /* dispatch => ({
     delTodo:(id)=>dispatch({type:DEL_TODO,id})
   })*/
   //给当前组件添加一个属性，值是一个函数，返回一个action
    {
        delTodo:id=>({type:types.DEL_TODO,id}),
        toggleTodo:id=>({type:types.TOGGLE_TODO,id})
    }
)(TodoList)