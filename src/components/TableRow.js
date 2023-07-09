import * as React from "react";

export default function TableRow({ title, price, category, image }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>
        <img alt={title} src={image} />
      </td>
    </tr>
  );
}
