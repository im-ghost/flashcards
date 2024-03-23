import Set from "./set";
export default function Sets({ sets }) {
  return (
    <div className="p-2">
      {sets.map((dSet) => (
        <Set dSet={dSet} />
      ))}
    </div>
  );
}
