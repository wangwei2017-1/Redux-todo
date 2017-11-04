import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
class TodoList extends Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.todos.length>0?<li className="list-group-item">
                        <input
                            onChange={event=>this.props.toggleAll(event.target.checked)}
                            type="checkbox"
                            checked={this.props.activeCount==0}/>{this.props.activeCount==0?'全部取消':'全部选中'}
                    </li>:null
                }

                {
                    this.props.todos.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            <input type="checkbox"
                                   onChange={()=>this.props.toggleTodo(item.id)}
                                   checked={item.completed}/>
                            <span style={{marginLeft:5,textDecoration:item.completed?'line-through':''}}>{item.title}</span>
                            <span className="pull-right">
                 <button
                     className="btn btn-danger btn-xs"
                     onClick={()=>this.props.delTodo(item.id)}>X</button>
              </span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default connect(
    state => ({
        todos: state.todos.filter(item=>{
            switch(state.filter){
                case 'active':
                    return !item.completed;
                case 'completed':
                    return item.completed;
                default:
                    return true;
            }
        }),activeCount:state.todos.filter(item=>!item.completed).length
    }),
    /*dispatch => ({
      delTodo:(id)=>dispatch({type:DEL_TODO,id})
    })*/
    //给当前组件增加属性，值是一个函数，返回一个action.
    {
        delTodo:id=>({type:types.DEL_TODO,id}),
        toggleTodo:id=>({type:types.TOGGLE_TODO,id}),
        toggleAll:checked=>({type:types.TOGGLE_ALL,checked})
    }
)(TodoList)