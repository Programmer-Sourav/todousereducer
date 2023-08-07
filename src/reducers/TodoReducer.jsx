import { formatDateTime } from "../Utils/DateManipulator"

export const initialState = {
    notes: [], 
    copiedNotes: [], 
    radioState : "", 
    selectState: "", 
    searchState: "", 
    sort: false
}

export const ACTION_TYPES = {
    ADD_NEW_NOTE : "ADD_NEW_NOTE", 
    EDIT_NOTE : "EDIT_NOTE", 
    DELETE_NOTE : "DELETE_NOTE", 
    PRIORITY: "PRIORITY", 
    SELECT_PRIORITY: "SELECT_PRIORITY", 
    SEARCH_NOTE: "SEARCH_NOTE", 
    SORT_BY_DATE_TIME: "SORT_BY_DATE_TIME"
}

export default function TodoReducer(state, action){
  switch(action.type){
    case ACTION_TYPES.ADD_NEW_NOTE: 
    return {...state, notes: [...state.notes, action.payload], copiedNotes: [...state.notes, action.payload]}
    case ACTION_TYPES.EDIT_NOTE: 
    return {...state, notes: state.notes.map((stateItem)=>(stateItem.id===action.payload.id ? {...stateItem, title:action.payload.title, description: action.payload.description} : stateItem))}
    case ACTION_TYPES.DELETE_NOTE: 
    return {...state, notes: state.notes.filter((stateItem)=>stateItem.id!==action.payload)}
    case ACTION_TYPES.PRIORITY: 
    return {...state, radioState: action.payload}
    case ACTION_TYPES.SELECT_PRIORITY: 
    return {...state, selectState: action.payload, notes: state.notes.map((stateItem)=>(stateItem.id===action.payload.id? {...stateItem, priority: action.payload.priority } : stateItem))}
    case ACTION_TYPES.SEARCH_NOTE: 
    return {...state, searchState: action.payload}
    case ACTION_TYPES.SORT_BY_DATE_TIME: 
    return {...state, sort: action.payload}

    default: 
    return state
  }
}