import React from 'react'
import { Link } from 'react-router'
import {Container,Logo,LogoutBtn} from '../index.js'
import { useSelector } from 'react-redux'
import { useNavigate,useNavigation  } from 'react-router'



function Header() {

  const authStatus= useSelector((state)=> state.auth.status)
  const navigate= useNavigate()

  const navItems=[

    {
      name:"Home",
      slug:"/",
      active: !authStatus
    },
    {
      name:"Login",
      slug:"/login",
      active: !authStatus
    },
    {
      name:"Signup",
      slug:"/singup",
      active: !authStatus
    },
    {
      name:"All Post",
      slug:"/",
      active: authStatus
    },
    {
      name:"Add Post",
      slug:"/add-post",
      active: authStatus
    },
  
  ]
  return (
  <header> 
    <Container className={"flex items-center justify-between py-4"}>
      <nav >
        <Link to='/'>
          <Logo width='80px' />
        </Link>
      </nav>

    <ul>
      {navItems.map((item)=>{
        return item.active ? (
          <li key={item.name} >
        <button onClick={()=>{
          navigate(item.slug)
        }}>{item.name}</button>
          </li>
        ) : null
      })}

{      authStatus && (
        <LogoutBtn/>
)}
    </ul>

      </Container>
  </header>
  )
}

export default Header