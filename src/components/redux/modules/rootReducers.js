//***** HOW TO CREATE AND USE REDUX *****\\

//STEP FOUR IS CREATE A ROOTREDUCER, AND USE COMBINE TO CAN USE SEVERAL REDUCERS

import { combineReducers } from 'redux'

import redInsertValue from './insertValue/redInsertValue'


export default combineReducers({
    redInsertValue
})