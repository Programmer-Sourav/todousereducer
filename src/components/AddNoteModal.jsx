import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    border,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    PopoverFooter,
    background
  } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ACTION_TYPES } from "../reducers/TodoReducer";


export default function AddNoteModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { dispatch, statenotes, currentRadioState, currentSelectState } = useContext(TodoContext)

    const [noteTitle, setNoteTitle ] = useState("")
    const [noteDescription, setNoteDescription] = useState("")


    const onTitleChange = (e) =>{
         setNoteTitle(e.target.value)
    }


    const onChnangeHandler = (e) =>{
        setNoteDescription(e.target.value)
    }


    const saveTheNote = (titleParam, descritionParam, priorityParam) =>{
         const noteObj = {id: statenotes.length+1,  title: titleParam, description: descritionParam, priority: priorityParam, createdAt: new Date()}
         console.log(555, noteObj)
         dispatch({type: ACTION_TYPES.ADD_NEW_NOTE, payload: noteObj})
    }

    const onRadioChange = (e) =>{
     dispatch({type: ACTION_TYPES.PRIORITY, payload: e.target.value})
    }

    return (
      <>
        <Button onClick={onOpen} >Add New Note</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Your note</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <label> Note Title: 
              <input type="text" className="textclass" placeholder="Title for the note" value={noteTitle} onChange={(e)=>{onTitleChange(e)}}/>
              </label>
              <label> Note Description: 
              <textarea className="textclass" col="50" row="6" placeholder="Description for the note" value={noteDescription} onChange={(e)=>{onChnangeHandler(e)}}/>
              </label>
              {/* Adding more functionalities */}
              <label>
                Priority:
              </label>
              <label>
              <input type="radio" checked={currentRadioState==="Low"} value = "Low"  onChange={(e)=>{onRadioChange(e)}}/> Low
              </label>
              <label>
              <input type="radio" checked={currentRadioState==="High"} value="High" onChange={(e)=>{onRadioChange(e)}}/> High
              </label>
              <label>
              <input type="radio" checked={currentRadioState==="Urgent"} value="Urgent" onChange={(e)=>{onRadioChange(e)}}/> Urgent
              </label>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={()=>{saveTheNote(noteTitle, noteDescription, currentRadioState)}} onClose>
                Save Note
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }