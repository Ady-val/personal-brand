import React from 'react';
import { AuthProvider } from '../auth/AuthFunctions';

const Layout = ({children}) => {
  return (
    <AuthProvider>
      <div className="flex h-screen bg-bgsecondary">
        <div className="flex-1 flex flex-col overflow-hidden">
          {children}
        </div>
      </div>
    </AuthProvider>
  )
}

export default Layout