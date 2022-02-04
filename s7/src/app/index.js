import { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";

import BooleanField from "./boolean-field";
import NumericField from "./numeric-field";
import * as s7 from "../services/s7";

function App() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setInterval(async () => {
      const items = await s7.readItems();
      setTags(items);
    }, 1000);
  }, []);

  return (
    <Container>
      <h1>Siemens S7-1500</h1>

      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tags).map(([name, value]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>
                {typeof value === "boolean" ? (
                  <BooleanField name={name} value={value} />
                ) : (
                  <NumericField name={name} value={value} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
