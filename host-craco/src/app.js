import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
// const NotesList = React.lazy(
//   () => import('remote/NotesList').then(module => ({ default: module.NotesList }))
// );
import { NotesList } from 'remote/NotesList'
import { noteRoutes } from 'remote/noteRoutes'

const App = () => {
  const NoteRoutes = () => useRoutes(noteRoutes())
  return (
    // <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/*" element={<div><NoteRoutes/></div>}/>
      </Routes>
    // </React.Suspense>
  )
}

export default App