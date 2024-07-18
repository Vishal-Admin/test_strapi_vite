import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import SecureUpload from './components/SecureUpload.jsx'
import UnauthentictedUploads from './components/UnauthentictedUploads.jsx'
// import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='secure-upload' element={<SecureUpload/>}/>
      <Route path='upload' element={<UnauthentictedUploads/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
