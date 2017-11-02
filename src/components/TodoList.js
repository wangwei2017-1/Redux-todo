import React,{Component} from 'react'
export default class TodoList extends Component{
    render(){
        return (
            <div>
                <ul className="list-group">
                    <li class="list-group-item">
                        React.js
                    </li>
                    <li class="list-group-item">
                        Vue.js
                    </li>
                </ul>
            </div>
        )
    }
}