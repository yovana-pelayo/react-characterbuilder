export default function SelectPart({ setHead, setTop, setPants }) {
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
        <option value="suit">Tuxedo</option>
        <option value="flannel">Flannel Button-up</option> */
      </select>
      <select
        className="select-pants"
        onChange={(e) => {
          setPants(e.target.value);
        }}
      >
        <option value="jeans">Jeans</option>
        <option value="blue">Blue Shirt</option>
        <option value="suit">Tuxedo</option>
        <option value="flannel">Flannel Button-up</option> */
      </select>
    </div>
  );
}
