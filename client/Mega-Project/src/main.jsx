import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import store from './store/Store.js'
import AuthLayer from './components/authLayer/AuthLayer.jsx'

import App from './App.jsx'
import Home from  './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AddPost from './pages/AddPost.jsx'


const router= createBrowserRouter([
  {
  path:'/',
  element: <App/>,
  children:[
    {
      index:true,
      element: <Home/>
    },{
      path:'/login',
      element:<Login/>
    },{
      path:'/signup',
      element: <Signup/>
    },
    {
      path:"/all-posts",
      element: <AllPosts/>
    },
    {
      path:'edit-post/:slug',
      element: <EditPost/>
    },
    {
      path:'post/:slug',
      element: <Post/>
    },{
      path:'/add-post',
      element:<AddPost/>
    }
  ]

}])

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router}>
      
    </RouterProvider>
  </Provider>
)
