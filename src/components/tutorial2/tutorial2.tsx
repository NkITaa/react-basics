import { Person } from "./person";

export default function Tutorial2({
  contact,
  handleClick,
}: {
  contact: Person;
  handleClick: () => void;
}) {
  function handleMouseOver() {
    console.log("mouse over");
  }

  return (
    <>
      <div className="flex flex-col  bg-teal-950">
        <input
          type="text"
          className="bg-teal-950"
          placeholder="Enter your name"
          onMouseOver={handleMouseOver}
        />
        <input
          type="text"
          className="bg-teal-950"
          placeholder="Enter your name"
        />
        <button className="bg-teal-950 text-white" onClick={handleClick}>
          I am {contact.isGay ? "Gay" : "not Gay"}
        </button>
      </div>
    </>
  );
}
