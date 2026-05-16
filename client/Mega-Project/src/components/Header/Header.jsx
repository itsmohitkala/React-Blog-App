import React from "react";
import { Footer, Logo, LogoutBtn  , Container } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header() {
  const authStatus = useSelector((status) => status.auth.status);
  const nagivate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <Container>
      <Logo />
      <div>
        <ul>
          {navItems.map((items) => {
          return  items.active ? (
              <li key={items.name}>
                <button
                  onClick={() => {
                    nagivate(items.slug);
                  }}
                >
                  {items.name}
                </button>
              </li>
            ) : null;
          })}
        </ul>
      </div>
      {authStatus && <LogoutBtn />}
    </Container>
  );  
}

export default Header;
