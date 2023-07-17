/* From Tutorial 1
import Card from "./components/tutorial1/card";
import namesData from "./assets/namesData"; */

import { Tutorial5 } from "./components/tutorial5/tutorial5";

/* From Tutorial 2
import Tutorial2 from "./components/tutorial2/tutorial2";
import { useState } from "react";
import { Person } from "./components/tutorial2/person"; */

/* Tutorial 3
import { useState } from "react";
import Tutorial3 from "./components/tutorial3/tutorial3";
import { Box, boxes } from "./components/tutorial3/boxes"; */

/* Tutorial 4 
import Tutorial4 from "./components/tutorial4/tutorial4"; */

function App() {
  return (
    <>
      <Tutorial5 />
    </>
  );

  /*   from Tutorial 1
  namesData.map((data) => {
    return <Card {...data} />;
  } 
  );*/
  /*     From Tutorial 2
  return (
    <></>

    <>
      <Tutorial2 contact={contact} handleClick={toggle} />
    </> */
  /*  from Tutorial 2
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
  } */
  /*  Tutorial 3 
  const [boxesS, setBoxes] = useState(boxes);

  function increaseId(id: number) {
    setBoxes((prev) => {
      return prev.map((box) => {
        return box.id === id ? { ...box, id: box.id + 1 } : box;
      });
    });
  }

  return boxesS.map((box: Box) => {
    return <Tutorial3 box={box} handleClick={increaseId} />;
  }); */
  /* Tutorial 4 
  return (
    <>
      <Tutorial4 />
    </>
  ); */
}

export default App;
