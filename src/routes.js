import { ColorApp } from './pages/color-app.jsx'
import { AboutPage } from './pages/about-page.jsx'

const routes = [
  {
    path: '/',
    element: <ColorApp />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  }
]

export default routes