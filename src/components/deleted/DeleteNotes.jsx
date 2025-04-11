import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import DeleteNote from './DeleteNote';
import { DataContext } from '../../context/DataProvider';
import { Grid } from '@mui/material';


const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const DeleteNotes = () => {

    const { deletedNotes } = useContext(DataContext);

    return (
        <>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                    <DrawerHeader />
                    <Grid container style={{ marginTop: 16 }}>
                        {
                            deletedNotes.map(note => (
                                <Grid item>
                                    <DeleteNote note={note} />
                                </Grid>
                            ))
                        }
                    </ Grid>
                </Box>
            </Box>
        </>
    )
}

export default DeleteNotes
