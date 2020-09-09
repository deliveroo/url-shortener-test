import React, { useEffect } from "react";

import "./List.css";

const List = ({ items }) => {
  return (
    <ul className="url-list">
      {items.map(({ code, url }) => (
        <li>
          <a href={url}>{code}</a>
        </li>
      ))}
    </ul>
  );
};

export default List;
