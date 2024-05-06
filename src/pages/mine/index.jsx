import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Chip,
  Tooltip,
  Card,
  CardContent,
  Button,
  Snackbar,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import HardwareIcon from '@mui/icons-material/Hardware';
import { shortenString } from '../../utils';

const transactionHeader = [
  {
    field: 'id',
    headerName: 'Transaction Hash',
    flex: 2,
    renderCell: params => (
      <Link to={`/wallet/etherscan/transaction/${params.value}`}>
        <span className='mr-2'>
          <DocumentScannerOutlinedIcon />
        </span>
        <Tooltip title={params.value}>
          <span className='underline underline-offset-2 font-bold text-[#066A9C] truncate'>
            {shortenString(params.value, 24)}
          </span>
        </Tooltip>
        <span className='text-gray-500 text-[13px]'>
          {' '}
          ({params.row.timestamp})
        </span>
      </Link>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: params =>
      params.value === 'Finalized' ? (
        <Chip
          label={params.value}
          size='small'
          variant='outlined'
          color='success'
        />
      ) : (
        <Chip label={params.value} size='small' />
      ),
  },
  {
    field: 'fee',
    headerName: 'Fee',
    flex: 1,
    renderCell: params => (
      <Tooltip title={params.value + ' Eth'}>
        <Chip label={params.value + ' Eth'} size='small' variant='outlined' />
      </Tooltip>
    ),
  },
  {
    field: 'from',
    headerName: 'From',
    flex: 1,
    renderCell: params => (
      <Tooltip title={'From: ' + params.value}>
        {shortenString(params.value, 16)}
      </Tooltip>
    ),
  },
  {
    field: 'to',
    headerName: 'To',
    flex: 1,
    renderCell: params => (
      <Tooltip title={'To: ' + params.value}>
        {shortenString(params.value, 16)}
      </Tooltip>
    ),
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
    type: 'number',
    renderCell: params => (
      <Tooltip title={params.value + ' Eth'}>
        <Chip label={params.value + ' Eth'} size='small' variant='outlined' />
      </Tooltip>
    ),
  },
];

const transactionData = [
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 1,
    timestamp: '1m ago',
    fee: 0.000256,
    status: 'Pending',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 2,
    timestamp: '1m ago',
    fee: 0.000256,
    status: 'Pending',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 3,
    timestamp: '1m ago',
    fee: 0.000256,
    status: 'Pending',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 4,
    timestamp: '1m ago',
    fee: 0.000256,
    status: 'Pending',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 5,
    timestamp: '1m ago',
    fee: 0.000256,
    status: 'Pending',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 6,
    timestamp: '1m ago',
    fee: 0.000256,
    status: 'Pending',
  },
];

const MinePage = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const address = useSelector(state => state.wallet.address);

  useEffect(() => {
    if (!address) {
      navigate('/wallet/access');
    }
  }, [address, navigate]);

  // use redux later
  const handleMine = () => {
    setLoading(true);
    // request API here
    setTimeout(() => {
      setLoading(false);
      setOpenSnackbar(true);
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className='flex items-center justify-center w-full h-screen relative bg-[#F2F4FA] p-5'>
      <Card variant='outlined' className='w-full'>
        <CardContent>
          <div className='flex items-center justify-between mb-5'>
            <div className='flex items-center'>
              <div className='w-[5px] h-[28px] bg-[#1976D2] mr-2'></div>
              <h1 className='text-xl font-bold'>Mempool</h1>
            </div>
            <Button
              variant='contained'
              color='primary'
              size='small'
              onClick={handleMine}
              disabled={loading}
              startIcon={<HardwareIcon />}
            >
              {loading ? 'Mining...' : 'Start Mining'}
            </Button>
          </div>
          <div>
            <DataGrid
              rows={transactionData}
              columns={transactionHeader}
              rowHeight={100}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5]}
              disableColumnMenu
              disableColumnFilter
              disableColumnSelector
              disableColumnSorting
            />
          </div>
        </CardContent>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message='Mining successfully!'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      />
    </div>
  );
};

export default MinePage;
