import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
export default class App extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader/>
                            </div>
                            <div className="panel-body">
                                <TodoList/>
                            </div>
                            <div className="panel-footer">
                                <TodoFooter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}