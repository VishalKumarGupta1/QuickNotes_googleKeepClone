import React from 'react'
import { Card, CardContent, CardActions, Typography, Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

const StyledCard = styled(Card)`
         width: 240px;
         margin: 8px;
         box-shadow:none;
         border: 1px solid #e0e0e0;
         border-radius:8px;
`

const DeletedNote = ({ note }) => {

  const { notes, setnotes, archiveNotes, setarchiveNotes, deletedNotes, setdeletedNotes } = useContext(DataContext);

  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
    setdeletedNotes(updatedNotes);
    setnotes(prevArr => [note, ...prevArr]);
  }


  const deleteNote = (note) => {
    const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
    setdeletedNotes(updatedNotes);

  }


  return (
    <StyledCard>

      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>

      <CardActions >
        <Tooltip title="Permanently Delete" arrow>
          <Delete
            fontSize='small'
            onClick={() => deleteNote(note)}
            style={{ marginLeft: 'auto' }}
          />
        </Tooltip>

        <Tooltip title="Restore" arrow>
          <Restore
            fontSize='small'
            onClick={() => restoreNote(note)}
          />
        </Tooltip>
      </CardActions>

    </StyledCard>
  )
}

export default DeletedNote
