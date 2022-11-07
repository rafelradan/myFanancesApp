//***** HOW TO CREATE AND USE REDUX *****\\

//STEP ONE IS CREATE A FOLDER REDUX
//STEP TWO IS CREATE TREE FIELS, STORE, ACTIONS AND REDUCER
//THEN YOU NEED TO CONFIGURE THE STORE
import { createStore } from 'redux'

//STEP FIVE IS IMPORT YOUR ROOTREDUCER AND PASS IT TO THE STORE
import rootReducers from './modules/rootReducers';



const store = createStore(rootReducers)

export default store;