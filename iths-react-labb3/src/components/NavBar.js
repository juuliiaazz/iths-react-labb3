import React, { useState } from "react";
import {
  MenuIcon,
  MenuLists,
  NavItem,
  NavLink,
  NavigationContainer,
} from "@/ui/NavBar";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <NavigationContainer>
        <MenuIcon onClick={handleClick}>
          <box-icon name="menu-alt-left" size="lg"></box-icon>
        </MenuIcon>
        <MenuLists type={click ? "nav-menu-active" : "nav-menu"}>
          <NavItem>
            <NavLink href="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/recipes" onClick={closeMobileMenu}>
              Recipes
            </NavLink>
          </NavItem>
        </MenuLists>
      </NavigationContainer>
    </>
  );
}
