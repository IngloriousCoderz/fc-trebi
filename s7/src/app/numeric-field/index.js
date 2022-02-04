import { useEffect, useState } from "react";
import { Input } from "reactstrap";

import * as s7 from "../../services/s7";

function NumericField({ name, value: initialValue }) {
  const [isEditMode, setEditMode] = useState(false);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleClick = (event) => {
    if (event.detail === 2) {
      setEditMode(true);
    }
  };

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyUp = (event) => {
    if (event.keyCode === 27) {
      setValue(initialValue);
      setEditMode(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    s7.writeItem(name, Number(value));
    setEditMode(false);
  };

  return (
    <div>
      {!isEditMode && <span onClick={handleClick}>{value}</span>}
      {isEditMode && (
        <form onSubmit={handleSubmit}>
          <Input
            type="number"
            min="500"
            max="1500"
            step="10"
            value={value}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
          {/*<button>Submit</button> */}
        </form>
      )}
    </div>
  );
}

export default NumericField;
