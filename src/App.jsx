import { RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './Router/Route'

function App() {

  return (
    <>
    <RouterProvider router={route}>
      <h1>this is home</h1>
    </RouterProvider>
    </>
  )
}

export default App
