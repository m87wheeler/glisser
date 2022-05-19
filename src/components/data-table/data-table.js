import * as React from "react";
import DataTableRow from "./data-table-row";
import { DataTableContainer } from "./styles";

const DataTable = ({
  data = [],
  headers = [],
  dataKeys = [],
  onChange,
  toggleEdit,
  editingRow = null,
}) => {
  return (
    <DataTableContainer>
      <thead>
        <tr>
          {headers?.map((header, i) => (
            <td key={i}>{header}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, i) => (
          <DataTableRow
            key={i}
            rowIndex={i}
            keys={dataKeys}
            row={row}
            onChange={onChange}
            toggleEdit={toggleEdit}
            editingRow={editingRow}
          />
        ))}
      </tbody>
    </DataTableContainer>
  );
};

export default DataTable;
