import React from 'react'
import { Card, CardContent, CardActions, Typography, Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ArchiveOutlined as Archive, DeleteOutline as Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

const StyledCard = styled(Card)`
         width: 240px;
         margin: 8px;
         box-shadow:none;
         border: 1px solid #e0e0e0;
         border-radius:8px;
`

const Note = ({ note }) => {

  const { notes, setnotes, archiveNotes, setarchiveNotes, deletedNotes, setdeletedNotes } = useContext(DataContext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter(data => data.id !== note.id);
    setnotes(updatedNotes);
    setarchiveNotes(prevArr => [note, ...prevArr]);
  }

  const deleteNote = (note) => {
    const updatedNotes = notes.filter(data => data.id !== note.id);
    setnotes(updatedNotes);
    setdeletedNotes(prevArr => [note, ...prevArr]);
  }

  return (
    <StyledCard>

      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>

      <CardActions >
        <Tooltip title="Archive" arrow>
          <Archive
            fontSize='small'
            style={{ marginLeft: 'auto' }}
            onClick={() => archiveNote(note)}
          />
        </Tooltip>

        <Tooltip title="Delete" arrow>
          <Delete
            fontSize='small'
            onClick={() => deleteNote(note)}
            className='deletehover'
          />
        </Tooltip>

      </CardActions>

    </StyledCard>
  )
}

export default Note
