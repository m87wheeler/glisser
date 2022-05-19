import * as React from "react";

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
        <td key={i}>
          <input
            value={keys[i].split(".").reduce((o, i) => o[i], row)}
            onChange={onChange}
          />
        </td>
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
