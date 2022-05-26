import React, { Suspense, lazy } from 'react';
import {HelloWorld} from "notes_mfe/HelloWorld"
const NoteRoutes = lazy(() => import("notes_mfe/NoteRoutes"))
import {Routes, Route} from "react-router-dom"

const Test = () => {
  return <div>
    <div>hello</div>
    <Routes>
        <Route path="/" element={<div>yo yo</div>} />
      </Routes>
  </div>
}

export default () => {
  return <div>
  <div>helllllo</div>
         {/* <Routes>
        <Route path="test" element={<div>nested</div>} />
      </Routes> */}
  </div>
};

