import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Form from './Form';
import Note from './Note';
import { DataContext } from '../../context/DataProvider';
import { Grid } from '@mui/material';
import Emptynotes from './Emptynotes';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    const { notes, setnotes } = useContext(DataContext);

    // Handle drag end
    const handleOnDragEnd = (result) => {
        const { destination, source } = result;

        if (!destination) {
            return;
        }

        if (destination.index === source.index) {
            return;
        }

        const reorderedNotes = Array.from(notes);
        const [removed] = reorderedNotes.splice(source.index, 1);
        reorderedNotes.splice(destination.index, 0, removed);

        // Update the notes state with the reordered notes
        setnotes(reorderedNotes);
    };

    return (
        <>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                    <DrawerHeader />
                    <Form />
                    {
                        notes.length > 0 ?
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="notes" direction="vertical">
                                    {(provided) => (
                                        <Grid container style={{ marginTop: 16 }} ref={provided.innerRef} {...provided.droppableProps}>
                                            {
                                                notes.map((note, index) => (
                                                    <Draggable key={note.id} draggableId={note.id} index={index}>
                                                        {(provided) => (
                                                            <Grid item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <Note note={note} />
                                                            </Grid>
                                                        )}
                                                    </Draggable>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </Grid>
                                    )}
                                </Droppable>
                            </DragDropContext>
                            : <Emptynotes />
                    }
                </Box>
            </Box>
        </>
    );
};

export default Notes;
