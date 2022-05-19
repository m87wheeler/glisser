import * as React from "react";
import DataTable from "./components/data-table/data-table";
import { useDataStore } from "./store/use-data-store";

export const App = () => {
  const { data } = useDataStore();
  const [offset, setOffset] = React.useState(0);
  const [editingRow, setEditingRow] = React.useState(null);

  const handleEditRow = React.useCallback((rowIndex) => {
    setEditingRow(rowIndex);
  }, []);

  return (
    <DataTable
      data={data?.[offset]}
      headers={["Artist", "Album", "Year", "Condition", "Action"]}
      dataKeys={["artist.name", "album_title", "year", "condition"]}
      onChange={() => {}}
      toggleEdit={handleEditRow}
      editingRow={editingRow}
    />
  );
};

export default App;
