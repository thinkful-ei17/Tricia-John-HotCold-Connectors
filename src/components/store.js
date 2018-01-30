import { createStore } from 'redux'
import { hotColdReducer } from './reducers/reducer';


export default createStore(hotColdReducer);