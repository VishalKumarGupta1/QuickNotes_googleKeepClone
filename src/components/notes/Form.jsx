import React from 'react'
import { TextField, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ClickAwayListener } from '@mui/material';

import { useState, useRef } from 'react'
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { v4 as uuid } from 'uuid';


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 60%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    padding:10px 15px;
    border-radius: 8px;
    border-color:#e0e0e0
    min-height:30px;
`
const note = {
    id: '',
    heading: '',
    text: '',
}

const Form = () => {

    const [showTextField, setshowTextField] = useState(false);
    const containerRef = useRef();

    const onClickTextArea = () => {
        setshowTextField(true);
        containerRef.current.style.minHeight = '70px';
    }

    const handleClickAway = () => {
        // Hide the title input field (set showTextField to false)
        setshowTextField(false);
    
        // Reset the container height to its original value (30px)
        containerRef.current.style.minHeight = '30px';
    
        // Reset the addnote state with a new ID and empty fields for the next note creation
        setaddnote({ ...note, id: uuid() });
    
        // Log the current state of the addnote (for debugging purposes)
        console.log(addnote);
    
        // Check if the note has either a heading or text (to ensure it's not empty)
        if (addnote.heading || addnote.text) {
            // If the note has content, add it to the list of notes (set notes state)
            // Add the current addnote to the beginning of the notes array
            setnotes(prevArr => [addnote, ...prevArr]);
    
            // This line is commented out for debugging; it would log the updated notes
            // console.log(notes);
        }
    }
    


    const { notes, setnotes } = useContext(DataContext);
    const [addnote, setaddnote] = useState({ ...note, id: uuid() });//This line sets up the state for a note, initializing it with the properties of note and a new unique id generated by uuid().

    const onTextChange = (e) => {
        // Debugging line to log the name and value of the input field when the user types
        // console.log(e.target.name, e.target.value);
    
        // Debugging line to log the current state of addnote before it is updated
        // console.log(addnote);
    
        // Create a new changeNote object by copying the current addnote state and updating the property 
        // that corresponds to the input field's name (heading or text) with the new value typed by the user
        let changeNote = { ...addnote, [e.target.name]: e.target.value };
    
        // Debugging line to log the updated changeNote object before setting it in the state
        // console.log(changeNote);
    
        // Update the addnote state with the new object (changeNote)
        setaddnote(changeNote);
    }
    

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway} >
                <Container id='formcontainer'  ref={containerRef}>
                    {showTextField &&
                        <TextField
                            placeholder='Title'
                            variant='standard'
                            InputProps={{ disableUnderline: true }}
                            style={{ marginBottom: 10 }}
                            onChange={(e) => onTextChange(e)}
                            name='heading'
                            value={addnote.heading}
                        />
                    }
                    <TextField
                        placeholder='Take a note...'
                        multiline
                        maxRows={Infinity}
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        onClick={onClickTextArea}
                        // style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name='text'
                        value={addnote.text}
                    />

                </Container>
            </ClickAwayListener>
        </>
    )
}

export default Form
