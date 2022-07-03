import { Routes, Route } from 'react-router-dom'
import routes from './routes.js'

import { AppHeader } from './cmps/app-header.jsx'

export function RootCmp() {
  return (
    <div className="root-cmp main-layout">
      <AppHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
        </Routes>
      </main>
    </div>
  )
}