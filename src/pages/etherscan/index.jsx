import { Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';

import { shortenString } from '../../utils';

const blockHeader = [
  {
    field: 'id',
    headerName: 'Block Height',
    flex: 3,
    renderCell: params => (
      <Link to={`/wallet/etherscan/block/${params.value}`}>
        <span className='mr-2'>
          <ViewInArOutlinedIcon />
        </span>
        <Tooltip title={params.value}>
          <span className='underline underline-offset-2 font-bold text-[#066A9C] truncate'>
            {shortenString(params.value, 14)}
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
    field: 'blockReward',
    headerName: 'Block Reward',
    flex: 2,
    type: 'number',
    renderCell: params => (
      <Tooltip title={params.value + ' Eth'}>
        <Chip label={params.value + ' Eth'} size='small' variant='outlined' />
      </Tooltip>
    ),
  },
];

const transactionHeader = [
  {
    field: 'id',
    headerName: 'Transaction Hash',
    flex: 3,
    renderCell: params => (
      <Link to={`/wallet/etherscan/transaction/${params.value}`}>
        <span className='mr-2'>
          <DocumentScannerOutlinedIcon />
        </span>
        <Tooltip title={params.value}>
          <span className='underline underline-offset-2 font-bold text-[#066A9C] truncate'>
            {shortenString(params.value, 14)}
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
    field: 'from',
    headerName: 'From',
    flex: 1,
    renderCell: params => (
      <Tooltip title={'From: ' + params.value}>
        {shortenString(params.value)}
      </Tooltip>
    ),
  },
  {
    field: 'to',
    headerName: 'To',
    flex: 1,
    renderCell: params => (
      <Tooltip title={'To: ' + params.value}>
        {shortenString(params.value)}
      </Tooltip>
    ),
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 2,
    type: 'number',
    renderCell: params => (
      <Tooltip title={params.value + ' Eth'}>
        <Chip label={params.value + ' Eth'} size='small' variant='outlined' />
      </Tooltip>
    ),
  },
];

const blockData = [
  {
    id: 1,
    status: 'Finalized',
    blockReward: 5,
    timestamp: '1m ago',
  },
  {
    id: 2,
    status: 'Finalized',
    blockReward: 10,
    timestamp: '1m ago',
  },
  {
    id: 3,
    status: 'Finalized',
    blockReward: 15,
    timestamp: '1m ago',
  },
  {
    id: 4,
    status: 'Finalized',
    blockReward: 20,
    timestamp: '1m ago',
  },
  {
    id: 5,
    status: 'Finalized',
    blockReward: 25,
    timestamp: '1m ago',
  },
  {
    id: 6,
    status: 'Finalized',
    blockReward: 30,
    timestamp: '1m ago',
  },
  {
    id: 7,
    status: 'Pending',
    blockReward: 35,
    timestamp: '1m ago',
  },
  {
    id: 8,
    status: 'Pending',
    blockReward: 40,
    timestamp: '1m ago',
  },
  {
    id: 9,
    status: 'Pending',
    blockReward: 45,
    timestamp: '1m ago',
  },
];

const transactionData = [
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 1,
    timestamp: '1m ago',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 2,
    timestamp: '1m ago',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 3,
    timestamp: '1m ago',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 4,
    timestamp: '1m ago',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 5,
    timestamp: '1m ago',
  },
  {
    id: '0x1234567890abcdef',
    from: '0x1234567890abcdef',
    to: '0x1234567890abcdef',
    amount: 6,
    timestamp: '1m ago',
  },
];

const EtherscanPage = () => {
  return (
    <div className='my-5 mx-10'>
      <div className='grid grid-cols-2 gap-5'>
        <div className='col-span-1'>
          <div className='flex'>
            <div className='w-[5px] h-[28px] bg-[#1976D2] mr-2'></div>
            <h1 className='text-xl font-bold mb-3'>Latest Blocks</h1>
          </div>
          <div>
            <DataGrid
              rows={blockData}
              columns={blockHeader}
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
        </div>
        <div className='col-span-1'>
          <div className='flex'>
            <div className='w-[5px] h-[28px] bg-[#1976D2] mr-2'></div>
            <h1 className='text-xl font-bold mb-3'>Latest Transactions</h1>
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
        </div>
      </div>
    </div>
  );
};

export default EtherscanPage;
