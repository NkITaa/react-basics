/* From Tutorial 1
import Card from "./components/tutorial1/card";
import namesData from "./assets/namesData"; */

import { Tutorial7 } from "./components/tutorial7/tutorial7";

/* From Tutorial 2
import Tutorial2 from "./components/tutorial2/tutorial2";
import { useState } from "react";
import { Person } from "./components/tutorial2/person"; */

/* Tutorial 3
import { useState } from "react";
import Tutorial3 from "./components/tutorial3/tutorial3";
import { Box, boxes } from "./components/tutorial3/boxes"; */

/* Tutorial 4
import GlobalStyles from "./components/Global";
import Tutorial4 from "./components/tutorial4/tutorial4"; */

/* 
import { Tutorial5 } from "./components/tutorial5/tutorial5"; 
const theme = {
  colors: {
    primary: "#f8049c",
    secondary: "#fdd54f",
    body: "#003333",
    background: "#f5fcff",
  },
  mobile: "768px",
};*/

/* Tutorial 6
import { ThemeProvider } from "styled-components";
import { Tutorial6 } from "./components/tutorial6/tutorial6"; */

function App() {
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
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Tutorial4 />
      </>
    </ThemeProvider>
  ); */
  /* Tutorial 5
  return (
    <>
      <Tutorial5 />
    </>
  ); */
  /*  Tutorial 6 
  return (
    <>
      <Tutorial6 />
    </>
  ); */

  return (
    <>
      <Tutorial7 />
    </>
  );
}

export default App;
