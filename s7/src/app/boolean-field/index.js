import * as s7 from "../../services/s7";

function BooleanField({ name, value }) {
  const handleClick = (event) => {
    if (event.detail === 2) {
      s7.writeItem(name, !value);
    }
  };

  return <div onClick={handleClick}>{value === true ? "✔️" : "❌"}</div>;
}

export default BooleanField;
