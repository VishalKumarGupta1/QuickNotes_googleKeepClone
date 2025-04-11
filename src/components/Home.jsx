import React from 'react'
import SwipeDrawer from './SwipeDrawer'
import Notes from './notes/Notes'
import { Box } from '@mui/material'
import DeleteNotes from './deleted/DeleteNotes'
import Archives from './Archives/Archives'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Box style={{ display: 'flex', width: '100%' }}>
                <Router>
                    <SwipeDrawer />
                    <Routes>
                        <Route path='/' element={<Notes/>}> </Route>
                        <Route path='/archive' element={<Archives/>}> </Route>
                        <Route path='/delete' element={<DeleteNotes/>}> </Route>

                    </Routes>
                </Router>
            </Box>

        </>
    )
}

export default Home
