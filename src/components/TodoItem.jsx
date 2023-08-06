import { useContext } from "react"
import "../stylesheets/notecard.css"
import { TodoContext } from "../contexts/TodoContext"
import { ACTION_TYPES } from "../reducers/TodoReducer"
import { ChakraProvider } from "@chakra-ui/react"
import EditNoteModal from "./EditNoteModal"

export default function TodoItem({data}) {

    const { dispatch, currentSelectState } = useContext(TodoContext)

    const doDeleteTheItem = (noteId) =>{
        dispatch({type: ACTION_TYPES.DELETE_NOTE, payload: noteId})
    }

   const onSelectionChangeListener = (e, noteId) =>{
     dispatch({type: ACTION_TYPES.SELECT_PRIORITY, payload: {id: noteId, priority: e.target.value}})
   }

    return (
        <div className="todo-card"> 
            {
                <ul>
               <h2>{data.title}</h2>
               <p>{data.description}</p>
               {/* <i class="fa fa-trash" aria-hidden="true"></i>
               <i class="fas fa-edit"></i> */}
               <div className="mybuttons">
              <button onClick={()=>{doDeleteTheItem(data.id)}}>Delete</button>
              <ChakraProvider>
                <EditNoteModal data={data}/>
              </ChakraProvider>
              <select value={currentSelectState} onChange={(e)=>{onSelectionChangeListener(e, data.id)}}>
                <option value="Low">Move to Low Priority</option>
                <option value="High">Move to High Priority</option>
                <option value="Urgent">Move to Urgent Priority</option>
              </select>
              </div>
               </ul>
            }
        </div>
    )
}