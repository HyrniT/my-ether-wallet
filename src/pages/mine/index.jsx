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
import { shortenString, formatTimeAgo } from '../../utils';
// import * as MineWorker from '../../utils/mineWorker';
import api from '../../services/api';

const transactionHeader = [
  {
    field: 'hash',
    headerName: 'Transaction Hash',
    flex: 2,
    renderCell: params => (
      <Link to={`/wallet/etherscan/transaction/${params.value}`}>
        <span className='mr-2'>
          <DocumentScannerOutlinedIcon />
        </span>
        <Tooltip title={params.value}>
          <span className='underline underline-offset-2 font-bold text-[#066A9C] truncate'>
            {shortenString(params.value, 20)}
          </span>
        </Tooltip>
        <span className='text-gray-500 text-[13px]'>
          {' '}
          ({formatTimeAgo(params.row.timestamp)})
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
    renderCell: () => (
      <Tooltip title='0.000256 Eth'>
        <Chip label='0.000256 Eth' size='small' variant='outlined' />
      </Tooltip>
    ),
  },
  {
    field: 'fromAddress',
    headerName: 'From',
    flex: 1,
    renderCell: params => (
      <Tooltip title={'From: ' + params.value}>
        {shortenString(params.value ?? 'Unknown', 16)}
      </Tooltip>
    ),
  },
  {
    field: 'toAddress',
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

const MinePage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [transactionData, setTransactionData] = useState([]);
  // const [latestBlock, setLatestBlock] = useState({});
  // const [mineWorker, setMineWorker] = useState(null);

  const navigate = useNavigate();
  const address = useSelector(state => state.wallet.address);
  const privateKey = useSelector(state => state.wallet.privateKey);

  useEffect(() => {
    // api.get(`/block/latest`).then(response => {
    //   if (response.data.success) {
    //     setLatestBlock(response.data.data);
    //   } else {
    //     console.error(response.data.message);
    //   }
    // });
    api
      .get(`/transaction/pending`)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.data);
          setTransactionData(response.data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!address) {
      navigate('/wallet/access/software/private-key');
    }
  }, [address, navigate]);

  const handleMine = () => {
    setLoading(true);
    api
      .post(`/block/mine`, {
        address: address,
        privateKey: privateKey,
      })
      .then(response => {
        if (response.data.success) {
          setOpenSnackbar(true);
          setLoading(false);
          api.get(`/transaction/pending`).then(response => {
            if (response.data.success) {
              setTransactionData(response.data.data);
            }
          });
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
        console.log(error.response.data.message);
        setError(error.response.data.message);
        setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className='flex items-start justify-center w-full h-screen relative bg-[#F2F4FA] p-5'>
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
              autoHeight
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
        message={error ? error : 'Mined successful!'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      />
    </div>
  );
};

export default MinePage;
