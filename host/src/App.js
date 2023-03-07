import React from 'react';
import { useRoutes } from 'react-router-dom'
import { SecurityContextProps } from 'identity_mfe/SecurityContext'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// const NotesList =  React.useLayoutEffect(() => import())
import NotesList from 'notes_mfe/NotesList';
import noteRoutes from 'notes_mfe/noteRoutes'

const WrapperElement = ({children}) => <div style={{marginRight: '400px', marginLeft: '100px'}}>{children}</div>

const NoteRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <NotesList partyIds={['IAG000000-7C739AA2-3DC1-4C4B-83D0-10E4C57DF2A2']} noteTypes={[]} />,
    },
    ...noteRoutes({wrapperElement: WrapperElement}),
  ])
}

export default () => {
  return (
    <BrowserRouter>
    
    <SecurityContextProps
      authenticationUrl={''}
      logoutUrl={''}
      validateTokenUrl={''}
    >
    <NoteRoutes />
    </SecurityContextProps>
  </BrowserRouter>
  );
}
