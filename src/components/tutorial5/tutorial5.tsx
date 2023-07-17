import { useEffect, useState } from "react";

export function Tutorial5() {
  const [person, setPerson] = useState({});
  /* 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((person) => {
        setPerson(person);
      });
    });
  }, []); */

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const person = await res.json();
      setPerson(person);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>{JSON.stringify(person)}</h1>
      <button onClick={() => console.log(person)}>Click</button>
    </>
  );
}
