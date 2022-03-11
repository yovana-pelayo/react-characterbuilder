export default function SelectPart({ setHead, top, setTop }) {
  return (
    <div className="select-dropdown">
      <select
        className="select-head"
        onChange={(e) => {
          setHead(e.target.value);
        }}
      >
        <option value="rock">The Rock</option>
        <option value="horse">Big Horse</option>
        <option value="vinDiesel">Vin Diesel</option>
        <option value="johnCena">John Cena</option>
      </select>
      <select
        className="select-top"
        value={top}
        onChange={(e) => {
          setTop(e.target.value);
        }}
      >
        <option value="shredded">Shredded</option>
        <option value="blue">Blue Shirt</option>
        {/* <option value="vinDiesel">Vin Diesel</option>
        <option value="johnCena">John Cena</option> */}
      </select>
    </div>
  );
}
