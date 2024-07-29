import React from "react";
type RootProps = React.HTMLAttributes<HTMLTableElement>;
type HeaderCellProps = React.HTMLAttributes<HTMLTableCellElement>;
type RowProps = React.HTMLAttributes<HTMLTableRowElement>;
type CellProps = React.HTMLAttributes<HTMLTableCellElement>;
declare const Table: (({ className, ...props }: RootProps) => React.JSX.Element) & {
    Row: ({ className, ...props }: RowProps) => React.JSX.Element;
    Cell: ({ className, ...props }: CellProps) => React.JSX.Element;
    Header: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
    HeaderCell: ({ className, ...props }: HeaderCellProps) => React.JSX.Element;
    Body: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
};
export { Table };
//# sourceMappingURL=index.d.ts.map