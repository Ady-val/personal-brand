import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../containers/Sidebar';
import { SnackbarProvider } from 'notistack';

export default function Main() {
  return (
    <div className="flex w-full h-full overflow-y-hidden">
      <Sidebar />
      <SnackbarProvider maxSnack={3}>
        <div className="flex flex-col w-full h-full bg-bgsecondary overflow-x-hidden overflow-y-auto mb-14">
          <Outlet />
        </div>
      </SnackbarProvider>
    </div>
  )
}
