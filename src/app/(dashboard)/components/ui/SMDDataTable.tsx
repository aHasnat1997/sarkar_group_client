import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, Typography, Badge, TablePagination } from '@mui/material';
import { styled } from '@mui/system';

type SortOrder = 'asc' | 'desc';

type Column<T> = {
  label: string;
  field: keyof T | ((row: T) => React.ReactNode);  // Allows functions to combine fields
  isSortable?: boolean;
  badgeStatus?: boolean;
};

type TableComponentProps<T> = {
  data: T[];
  columns: Column<T>[];
  page: number;
  limit: number;
  total?: number;
  totalPages: number;
  sortBy?: keyof T;
  sortOrder?: SortOrder;
  onSortChange?: (field: keyof T) => void;
  onPageChange: (page: number) => void;
  onLimitChange: (page: number) => void;
  actions?: (row: T) => React.ReactNode;
};

const BadgeStyled = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-dot': {
    height: 8,
    minWidth: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.info.main,
  },
}));

export default function SMDDataTable<T>({
  data,
  columns,
  page,
  limit,
  totalPages,
  sortBy,
  sortOrder,
  onSortChange,
  onPageChange,
  onLimitChange,
  actions
}: TableComponentProps<T>) {
  const handleSort = (field: keyof T) => {
    if (onSortChange) onSortChange(field);
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index}>
                {col.isSortable ? (
                  <TableSortLabel
                    active={sortBy === col.field}
                    direction={sortBy === col.field ? sortOrder : 'asc'}
                    onClick={() => handleSort(col.field as keyof T)}
                  >
                    <Typography variant="subtitle1" color='text.secondary'>{col.label}</Typography>
                  </TableSortLabel>
                ) : (
                  <Typography variant="subtitle1" color='text.secondary'>{col.label}</Typography>
                )}
              </TableCell>
            ))}
            {actions && <TableCell>
              <Typography variant="subtitle1" color='text.secondary'>Action</Typography>
            </TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  {typeof col.field === 'function' ? (
                    col.field(row)
                  ) : col.badgeStatus ? (
                    <BadgeStyled color={row[col.field] === 'WORKING' ? 'primary' : row[col.field] === 'AVAILABLE' ? 'success' : 'error'} variant="dot">
                      <Typography>{String(row[col.field])}</Typography>
                    </BadgeStyled>
                  ) : (
                    <Typography color='text.primary'>{String(row[col.field])}</Typography> /* Convert value to string */
                  )}
                </TableCell>
              ))}
              {actions && (
                <TableCell>
                  {actions(row)}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component={'div'}
        count={totalPages}
        page={page}
        onPageChange={(event, value) => onPageChange(value)}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25, 50]}
        onRowsPerPageChange={(event) => onLimitChange(Number(event.target?.value))}
        color="primary"
      />
    </TableContainer>
  );
};
