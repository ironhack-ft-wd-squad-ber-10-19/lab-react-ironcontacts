import React from "react";

//this component contains the data as props of each contact
// Contact component contains basically the structure and properties that I will later implement in in the 'return' in my class
const Contact = props => {
  const { pictureUrl, id, name, popularity, deleted } = props;
  console.log(id);
  return (
    <>
      <tr>
        <td>
          <img src={pictureUrl} width="70px" alt="" />
        </td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => deleted(id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Contact;
