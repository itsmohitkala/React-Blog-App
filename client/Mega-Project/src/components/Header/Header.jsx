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
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <div>
            <ul className="flex items-center gap-2">
              {navItems.map((items) => {
              return  items.active ? (
                  <li key={items.name}>
                    <button
                      className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-gray-100 hover:text-[var(--color-ink)]"
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
        </div>
      </Container>
    </header>
  );
}

export default Header;
