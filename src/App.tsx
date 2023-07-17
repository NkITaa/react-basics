import Card from "./components/tutorial1/card";
import namesData from "./assets/namesData";
import Tutorial2 from "./components/tutorial2/tutorial2";
import { useState } from "react";
import { Person } from "./components/tutorial2/person";

function App() {
  const person: Person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Fake St",
      city: "San Francisco",
      state: "CA",
      zip: 94101,
    },
    isGay: true,
  };
  const [contact, setGerman] = useState(person);

  function toggle() {
    setGerman((prev) => {
      return { ...prev, isGay: !prev.isGay };
    });
  }

  return (
    <>
      <Tutorial2 contact={contact} handleClick={toggle} />
    </>

    /*   from Tutorial 1
  namesData.map((data) => {
    return <Card {...data} />;
  } */
  );
}

export default App;
