import * as React from "react";
import { useDataStore } from "../../store/use-data-store";
import Button from "../button/button";
import DataTable from "../data-table/data-table";

const Layout = () => {
  const { setData, data } = useDataStore();
  const [offset, setOffset] = React.useState(0);
  const [editingRow, setEditingRow] = React.useState(null);

  // Toggle
  const handleEditRow = React.useCallback((rowIndex) => {
    setEditingRow(rowIndex);
  }, []);

  // Toggle
  const handleOffset = React.useCallback(
    (n) => () => {
      setOffset((state) => state + n);
    },
    []
  );

  // Update
  const handleUpdateData = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "artist.name":
          return;
        default:
          const copyState = [...data];
          const updatedData = data?.[offset]?.map((entry, i) => {
            if (editingRow === i) return { ...entry, [name]: value };
            return entry;
          });
          copyState[offset] = updatedData;
          setData(copyState);
      }
    },
    [offset, editingRow, data, setData]
  );

  return (
    <div>
      <DataTable
        data={data?.[offset]}
        headers={["Artist", "Album", "Year", "Condition", "Action"]}
        dataKeys={["artist.name", "album_title", "year", "condition"]}
        onChange={handleUpdateData}
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

export default Layout;
