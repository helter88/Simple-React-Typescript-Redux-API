import axios from 'axios'
import {Dispatch} from 'redux'

interface StateType{
    isLoading: boolean,
    data: {}[];
    error: string
}

const initialState = {
    isLoading: false,
    data: [],
    error: ""
}

interface StartAction {
    type: "FETCH-START";
    
}

interface SuccesAction {
    type: "FETCH-SUCCES";
    payload: {}[];
    
}
interface FailedAction {
    type: "FETCH-FAILED";
    payload: string;
    
}

type Action = StartAction | SuccesAction | FailedAction

const fetchReducer = (state: StateType =initialState, action: Action) =>{
    switch(action.type){
        case "FETCH-START":
                return {
                    ...state,
                    isLoading: true
                }
        case "FETCH-SUCCES":
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case "FETCH-FAILED":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}

export const getData =() =>{
    return async (dispatch:Dispatch) =>{
        dispatch({type: "FETCH-START"})
        const sendReuest= async()=>{
            const request= await axios("http//:")
            return request.data
        }
        try{
            const userData= await sendReuest();
            dispatch({type: "FETCH-SUCCES", payload:userData})
        }catch(err:any){
            dispatch({type: "FETCH-FAILED", payload: err.message})
        }
    }
}

export default fetchReducer;