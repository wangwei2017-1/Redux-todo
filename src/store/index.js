import {createStore,combineReducers} from 'redux'
import {todos,filter} from './reducers'

//合并reducer  ：把两个reducer合并成一个reducer
let reducer = combineReducers({
    todos,filter
});
/*{
    todos:[{id:1,title:'学习react'}]
}*/
let store = createStore(reducer);
export default store;