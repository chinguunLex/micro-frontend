import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Hello from './components/Hello';

export default () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Something />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const Teams = () => <div>Teams</div>
const Team = () => <div>Team</div>

const Something = () => <div>hello</div>