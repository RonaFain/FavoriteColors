import { ColorApp } from './pages/color-app.jsx'
import { LoginPage } from './pages/login-page.jsx'

const routes = [
  {
    path: '/',
    element: <ColorApp />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]

export default routes