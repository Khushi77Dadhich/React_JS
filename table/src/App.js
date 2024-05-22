
import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
//import usePagination from '@mui/material/usePagination';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: '30px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '82%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '15%',
  height: '30px',
  marginLeft: '83%',
  border: '1px solid grey',
  borderRadius: '10px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(3),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const columns = [
  { id: 'orderid', label: 'Order ID' },
  { id: 'date', label: 'Date', align: 'left' },
  {
    id: 'user',
    label: 'User',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'prize',
    label: 'Price',
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'payment',
    label: 'Payment',
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'status',
    label: 'Status',
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Actions',
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(orderid, date, user, prize, payment, status, actions) {
  return { orderid, date, user, prize, payment, status, actions };
}

const rows = [
  createData('#5302002', '05-02-2024', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '04-02-2024', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '07-06-2004', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '14-04-2014', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '04-08-2020', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '24-12-2001', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '04-12-2019', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '04-11-2002', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '27-03-2024', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '07-07-2024', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '05-08-2024', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('#5302002', '15-09-2024', 'Maya Vegas', '$60.76', 'Credit Card', 'Delivered'),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
];

const App = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div class="wrapper">
        <h2>Orders</h2>
        <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Orders"
                inputProps={{ 'aria-label': 'search' }}
              />
        </Search>
      </div>
          
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow className='heading'>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page,  rowsPerPage, page, rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      // if (column.id === 'actions') {
                      //   return (
                      //     <TableCell key={column.id} align={column.align}>
                      //       <DownloadIcon className='DownloadIcon'/>
                      //       <DeleteIcon className='DeleteIcon' />
                      //     </TableCell>
                      //   );
                      // }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <DownloadIcon className='DownloadIcon'/>
                    <DeleteIcon className='DeleteIcon'/>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination sx={{marginRight: '40%'}}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage=""
        rowsPerPageOptions={[]}
      />
    </Paper>
    </div>
  )
}

export default App;
