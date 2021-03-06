import React, { useState, useEffect } from 'react';
import "./styles.css"
{/*import React from "react";*/}

const App = () => {
  {/*const message = "This is my first variable rendered in JSX!"
  
  const handleClick = () =>{
    alert("you clicked the message!");
    }
  
  const contacts = [
      { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
      { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
      { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
      { name: "John Harry", email: "john.harry@test.com", age: 28 }
  ];*/}
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);

  return (
    <>
    {contacts.map(contact => (
      <ContactCard
        avatar={contact.picture.large}
        name={contact.name.first + " " + contact.name.last}
        email={contact.email}
        age={contact.dob.age}
      />
    ))}
  </>
  );
}

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};

export default App;

{/*Goes in return() fir App()
<div>
  <h1>Hello React World</h1>
  <h2 onClick={handleClick}>{message}</h2>
  <h3 onClick={()=> alert("you clicked the message!")}>{message}</h3>
</div>

    <>
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Jenny Han"
        email="jenny.han@notreal.com"
        age={25}
      />

      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Jason Long"
        email="jason.long@notreal.com"
        age={45}
      />

      <ContactCard
        avatar="https://via.placeholder.com/150"
        name="Peter Pan"
        email="peter.pan@neverland.com"
        age={100}
      />
    </>

    <>
    {contacts.map(contact => (
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name={contact.name}
        email={contact.email}
        age={contact.age}
      />
    ))}
  </>
*/}