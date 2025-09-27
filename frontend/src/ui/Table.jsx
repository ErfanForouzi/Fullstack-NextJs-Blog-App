import React from "react";

const Table = ({ children }) => {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

const TableHeader = ({ children })=> {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}
const TableBody = ({ children })=> {
  return (
    <tbody>
        {children}
    </tbody>
  );
}
const TableRow = ({ children })=> {
  return (
    <tr>
        {children}
    </tr>
  );
}


export default Object.assign(Table, {
    TableHeader,
    TableBody,
    TableRow,
  });
  
