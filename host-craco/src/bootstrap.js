import React from 'react';

// import {Hello} from "./components/Hello"
import Hello from "remote/Hello"

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams
} from "react-router-dom";
// import your route components too

const NewTeamForm = () => <div>NewTeamForm</div>
const LeagueStandings = () => <div>LeagueStandings</div>

function App() {
  return (
    <div>
      <h1>App</h1>
      <Outlet />
    </div>
  );
}


function Teams() {
  return (
    <div>
      <h2>Teams</h2>
      <Outlet />
    </div>
  );
}

function Team() {
  let { teamId } = useParams();
  return <h3>TeamId {teamId}</h3>;
}


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route path="/*" element={<Hello/>}/>
    </Routes>
  </BrowserRouter>
);



