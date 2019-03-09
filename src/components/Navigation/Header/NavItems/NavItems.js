import React from "react";

import NavItem from "./NavItem/NavItem";

const navItems = ({ category }) => {
  return (
    <li>
      <a href="#">
        {category.name}
        <br />
        <img src={category.image} />
      </a>
      <ul className="list-unstyled">
        {category.subcategories.map(subs => {
          return <NavItem name={subs.name} />;
        })}
      </ul>
    </li>
  );
};

export default navItems;
