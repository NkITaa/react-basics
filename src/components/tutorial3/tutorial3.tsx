import { Box } from "./boxes";

export default function Tutorial3({
  box,
  handleClick,
}: {
  box: Box;
  handleClick: (id: number) => void;
}) {
  return (
    <>
      <button onClick={() => handleClick(box.id)}>
        <div
          className="box"
          style={{ backgroundColor: box.id % 2 === 0 ? "brown" : "red" }}
        >
          {box.id}
        </div>
      </button>
    </>
  );
}
