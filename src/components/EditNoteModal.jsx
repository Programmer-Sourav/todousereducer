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


export default function EditNoteModal({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { dispatch, statenotes } = useContext(TodoContext)

    const [noteTitle, setNoteTitle ] = useState(data.title)
    const [noteDescription, setNoteDescription] = useState(data.description)


    const onTitleChange = (e) =>{
         setNoteTitle(e.target.value)
    }


    const onChnangeHandler = (e) =>{
        setNoteDescription(e.target.value)
    }

    const doEditTheItem = (noteId, title, description) =>{
        const editedObj = {id: noteId, title: title, description: description}
        dispatch({type: ACTION_TYPES.EDIT_NOTE, payload: editedObj})
     }

    return (
      <>
        <Button onClick={onOpen} >Edit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Your Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <input type="text" placeholder="Title for the note" value={noteTitle} onChange={(e)=>{onTitleChange(e)}}/>
              <textarea col="50" row="6" placeholder="Description for the note" value={noteDescription} onChange={(e)=>{onChnangeHandler(e)}}/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={()=>{doEditTheItem(data.id, noteTitle, noteDescription)}} onClose>
                Save Note
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }