import React, { useState } from 'react';

function Work() {
  const [tableData, setTableData] = useState([
    { id: 1, content: '', ticked: false },
    { id: 2, content: '', ticked: false },
    { id: 3, content: '', ticked: false },
    // Add more rows as needed
  ]);

  const manuallyTickRow = (id) => {
    const updatedTableData = tableData.map((row) =>
      row.id === id ? { ...row, ticked: true } : row
    );
    setTableData(updatedTableData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Tick</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.content}</td>
              <td>
                <button onClick={() => manuallyTickRow(row.id)}>Tick</button>
                {row.ticked ? '✔' : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}

export default Work;
