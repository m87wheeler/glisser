import * as React from "react";
import { useDataStore } from "../../store/use-data-store";
import Button from "../button/button";
import DataTable from "../data-table/data-table";
import DataTableSearch from "../data-table/data-table-search";

const Layout = () => {
  const {
    setData,
    data,
    editingRow,
    setEditingRow,
    pageOffset,
    setPageOffset,
    searchResults,
  } = useDataStore();

  // Toggle
  const handleEditRow = React.useCallback(
    (rowIndex) => {
      setEditingRow(rowIndex);
    },
    [setEditingRow]
  );

  // Toggle
  const handleOffset = React.useCallback(
    (n) => () => setPageOffset(n, data?.length - 1),
    [data, setPageOffset]
  );

  // Update
  const handleUpdateData = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "artist.name":
          const matchingEntries = data?.map((array) => {
            return array.map((entry) => {
              if (
                data?.[pageOffset]?.[editingRow]?.artist?.id ===
                entry?.artist?.id
              )
                return { ...entry, artist: { ...entry?.artist, name: value } };
              return entry;
            });
          });
          setData(matchingEntries);
          return;
        default:
          const copyState = [...data];
          const updatedData = data?.[pageOffset]?.map((entry, i) => {
            if (editingRow === i) return { ...entry, [name]: value };
            return entry;
          });
          copyState[pageOffset] = updatedData;
          setData(copyState);
      }
    },
    [pageOffset, editingRow, data, setData]
  );

  const tableData = React.useMemo(() => {
    const activeData = searchResults?.length ? searchResults : data;
    return activeData?.[pageOffset];
  }, [data, pageOffset, searchResults]);

  return (
    <div>
      <DataTableSearch searchKeys={["artist.name", "album_title"]} />
      <DataTable
        data={tableData}
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
