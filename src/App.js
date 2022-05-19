import * as React from "react";
import Button from "./components/button/button";
import DataTable from "./components/data-table/data-table";
import { useDataStore } from "./store/use-data-store";

export const App = () => {
  const { data } = useDataStore();
  const [offset, setOffset] = React.useState(0);
  const [editingRow, setEditingRow] = React.useState(null);

  const handleEditRow = React.useCallback((rowIndex) => {
    setEditingRow(rowIndex);
  }, []);

  const handleOffset = React.useCallback(
    (n) => () => {
      setOffset((state) => state + n);
    },
    []
  );

  return (
    <div>
      <DataTable
        data={data?.[offset]}
        headers={["Artist", "Album", "Year", "Condition", "Action"]}
        dataKeys={["artist.name", "album_title", "year", "condition"]}
        onChange={() => {}}
        toggleEdit={handleEditRow}
        editingRow={editingRow}
      />
      <div>
        <Button onClick={handleOffset(-1)}>Previous</Button>
        <Button onClick={handleOffset(1)}>Next</Button>
      </div>
    </div>
  );
};

export default App;
