import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, Typography, Badge, TablePagination, Skeleton, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import DataNotFound from './DataNotFound';

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
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
  sortBy?: keyof T;
  sortOrder?: SortOrder;
  isLoading?: boolean;
  onSortChange?: (field: keyof T) => void;
  onPageChange?: (page: number) => void;
  onLimitChange?: (page: number) => void;
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
  total,
  sortBy,
  sortOrder,
  isLoading = false,
  onSortChange,
  onPageChange,
  onLimitChange,
  actions
}: TableComponentProps<T>) {
  const handleSort = (field: keyof T) => {
    if (onSortChange) onSortChange(field);
  };

  if (isLoading) {
    return (
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table>
          <TableBody>
            {
              Array.from({ length: limit as number + 1 || 11 }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <TableCell key={colIndex}>
                      <Skeleton
                        height='2.5rem'
                        variant="rounded"
                        animation="wave"
                        sx={{ bgcolor: 'grey.400' }}
                      />
                    </TableCell>
                  ))}
                  {actions && (
                    <TableCell>
                      <Skeleton
                        height='2.5rem'
                        variant="rounded"
                        animation="wave"
                        sx={{ bgcolor: 'grey.400' }}
                      />
                    </TableCell>
                  )}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        {
          page && limit && total && onPageChange && onLimitChange ?
            <TablePagination
              component={'div'}
              count={total || 0}
              page={(page || 1) - 1}
              onPageChange={(event, value) => onPageChange(value + 1)}
              rowsPerPage={limit || 10}
              rowsPerPageOptions={[5, 10, 25, 50]}
              onRowsPerPageChange={(event) => onLimitChange(Number(event.target?.value))}
              color="primary"
            /> :
            <></>
        }
      </TableContainer>
    );
  };

  if (data.length === 0) {
    return (
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <DataNotFound />
      </TableContainer>
    );
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
            {actions && <TableCell align="right">
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
                <TableCell align="right">
                  <Stack justifyContent='end'>
                    <Box>
                      {actions(row)}
                    </Box>
                  </Stack>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        page && limit && total && onPageChange && onLimitChange ?
          <TablePagination
            component={'div'}
            count={total || 0}
            page={(page || 1) - 1}
            onPageChange={(event, value) => onPageChange(value + 1)}
            rowsPerPage={limit || 10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            onRowsPerPageChange={(event) => onLimitChange(Number(event.target?.value))}
            color="primary"
          /> :
          <></>
      }
    </TableContainer>
  );
};
