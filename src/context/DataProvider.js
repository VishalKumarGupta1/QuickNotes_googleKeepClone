import React from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

  const [notes, setnotes] = useState([]);
  const [archiveNotes, setarchiveNotes] = useState([]);
  const [deletedNotes, setdeletedNotes] = useState([]);

  return (
    <DataContext.Provider value={{
      notes, setnotes, archiveNotes, setarchiveNotes, deletedNotes, setdeletedNotes
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
