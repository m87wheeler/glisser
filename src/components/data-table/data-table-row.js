import * as React from "react";
import DataTableCell from "./data-table-cell";

const DataTableRow = ({
  rowIndex,
  row,
  keys,
  onChange,
  toggleEdit,
  editingRow,
}) => {
  const handleClick = React.useCallback(() => {
    toggleEdit(editingRow ? null : rowIndex);
    if (editingRow === rowIndex) console.log("Save...");
  }, [editingRow, rowIndex, toggleEdit]);

  return (
    <tr>
      {keys?.map((_, i) => (
        <DataTableCell
          key={i}
          value={keys[i].split(".").reduce((o, i) => o[i], row)}
          onChange={onChange}
          disabled={editingRow !== rowIndex}
        />
      ))}
      {toggleEdit && (
        <td>
          <button onClick={handleClick}>
            {editingRow === rowIndex ? "Save" : "Edit"}
          </button>
        </td>
      )}
    </tr>
  );
};

export default DataTableRow;
