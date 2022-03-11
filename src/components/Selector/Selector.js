export default function SelectPart({ head, setHead }) {
  return (
    <div className="select-dropdown">
      <select
        className="select-head"
        value={head}
        onChange={(e) => {
          setHead(e.target.value);
        }}
      >
        <option value="rock">The Rock</option>
        <option value="horse">Big Horse</option>
      </select>
    </div>
  );
}
