import { createContext, useReducer } from "react";
import TodoReducer, { initialState } from "../reducers/TodoReducer";


export const TodoContext = createContext()


export function TodoProvider({children}){

    const [state, dispatch ] = useReducer(TodoReducer, initialState)

    console.log(123, state.notes)
    return(
        <TodoContext.Provider  value={{state, dispatch, statenotes: state.notes, 
            currentRadioState: state.radioState, currentSelectState: state.selectState, 
            currentSearchState: state.searchState, currentCopied: state.copiedNotes, 
        selectedFilter: state.selectCheckboxstate, 
      sortFlag: state.sort}}>{children}</TodoContext.Provider>
    )
}