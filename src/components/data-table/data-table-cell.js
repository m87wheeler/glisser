import * as React from "react";

const DataTableCell = ({ value, disabled, onChange }) => {
  return (
    <td>
      <input value={value} onChange={onChange} disabled={disabled} />
    </td>
  );
};

export default DataTableCell;
