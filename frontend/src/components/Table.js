import React from "react";

import "./Table.css";

const Table = ({ items }) => {
  if (!items.length) {
    return (
      <div>
        No short URLs created yet
      </div>
    )
  }
  return (
    <table className="url-table">
      <thead>
        <tr>
          <th>Shortcode</th>
          <th>Long URL</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ code, url }) => (
          <tr>
            <td>
              {code}
            </td>
            <td>
              <a target="_blank" href={url}>{url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
