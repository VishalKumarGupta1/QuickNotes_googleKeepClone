import React from 'react'
import { Card, CardContent, CardActions, Typography, Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { UnarchiveOutlined as Unarchive, DeleteOutline as Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

const StyledCard = styled(Card)`
         width: 240px;
         margin: 8px;
         box-shadow:none;
         border: 1px solid #e0e0e0;
         border-radius:8px;
`

const Archive = ({ note }) => {

  const { notes, setnotes, archiveNotes, setarchiveNotes, deletedNotes, setdeletedNotes } = useContext(DataContext);

  const unarchiveNote = (note) => {
    const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
    setarchiveNotes(updatedNotes);
    setnotes(prevArr => [note, ...prevArr]);
  }


  const deleteNote = (note) => {
    const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
    setarchiveNotes(updatedNotes);
    setdeletedNotes(prevArr => [note, ...prevArr]);

  }


  return (
    <StyledCard>

      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>

      <CardActions >
        <Tooltip title="Unarchive" arrow>
          <Unarchive
            fontSize='small'
            style={{ marginLeft: 'auto' }}
            onClick={() => unarchiveNote(note)}
          />
        </Tooltip>
        <Tooltip title="Delete" arrow>
          <Delete
            fontSize='small'
            onClick={() => deleteNote(note)}

          />
        </Tooltip>
      </CardActions>

    </StyledCard>
  )
}

export default Archive
