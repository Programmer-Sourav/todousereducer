import { useContext, useState } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { ACTION_TYPES } from "../reducers/TodoReducer"
import { ChakraProvider } from "@chakra-ui/react"
import AddNoteModal from "../components/AddNoteModal"
import TodoItem from "../components/TodoItem"
import { formatDateTime } from "../Utils/DateManipulator"

export default function TodoHome(){

    const { state, dispatch,  statenotes, currentSearchState, currentCopied, selectedFilter} = useContext(TodoContext)
    const [sortVal, setSortVal] = useState(false)

    const onSearchTermChange = (event) =>{
       dispatch({type: ACTION_TYPES.SEARCH_NOTE, payload: event.target.value})
    }
    
    const sortByOldest = () =>{
     // dispatch({type: ACTION_TYPES.SORT_BY_DATE_TIME})
     setSortVal(true)
    }
    
    let organicNotes = statenotes;
     if(currentSearchState)
     organicNotes = state.notes.filter((stateItem)=>stateItem.title.toLowerCase().includes(currentSearchState.toLowerCase()) || stateItem.description.toLowerCase().includes(currentSearchState.toLowerCase()))
     if(sortVal===true)
     organicNotes = [...statenotes].sort((p1, p2)=>(formatDateTime(p2.createdAt)>formatDateTime(p1.createdAt)))
    return(
        <div> 
            <p>
            <input type="search" style={{margin: "32px"}} className="searchStyle" value={currentSearchState} onChange={(e)=>{onSearchTermChange(e)}}/>
            </p>
            <button className="buttonStyle" onClick={()=>{sortByOldest()}}>Oldest Notes</button>
            <ChakraProvider>
                <AddNoteModal/>
            </ChakraProvider>
            <hr style={{marginTop: "64px"}}/>
            {/* map over the notes array */}
            {  
              organicNotes.map((stateItem)=>(
                <li key={stateItem.id}>
                <TodoItem data={stateItem}/>
                </li>
              ))
            }
        </div>
    )
}