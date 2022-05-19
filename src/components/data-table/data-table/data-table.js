import * as React from "react";
import DataTableRow from "../data-table-row/data-table-row";
import { DataTableContainer, DataTableElement } from "./styles";

const DataTable = ({
  data = [],
  headers = [],
  dataKeys = [],
  onChange,
  toggleEdit,
  editingRow = null,
  spread = [],
}) => {
  return (
    <DataTableContainer>
      <DataTableElement>
        <thead>
          <tr>
            {headers?.map((header, i) => (
              <th key={i} style={{ width: `${spread[i] * 10}%` }}>
                {header}
              </th>
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
      </DataTableElement>
    </DataTableContainer>
  );
};

export default DataTable;
