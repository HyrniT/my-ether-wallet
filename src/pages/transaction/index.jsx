import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Tooltip,
  IconButton,
  Grid,
  Chip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { formatTimeAgo, formatTimeUTC } from '../../utils';

const transactionInfo = {
  status: 'Pending',
  blockHeight: 1,
  blockStatus: 'Pending',
  timestamp: 1714359097121,
  from: '0x1234567890abcdef',
  to: '0xabcdef1234567890',
  amount: 1.5,
  fee: 0.00042,
};

const TransactionDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className='flex items-start justify-center h-screen relative bg-[#F2F4FA]'>
      <div className='absolute top-3 left-3'>
        <Tooltip title='Go back'>
          <IconButton onClick={() => window.history.back()}>
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Card variant='outlined' className='mt-[80px] mx-5'>
        <CardContent>
          <Grid container rowSpacing={5}>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='A transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Transaction Hash:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className=''>{id}</div>
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The status of the transaction'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Status:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              {transactionInfo.status === 'Success' ? (
                <Tooltip title='The transaction has been successfully processed'>
                  <Chip
                    label={transactionInfo.status}
                    size='small'
                    variant='outlined'
                    color='success'
                  />
                </Tooltip>
              ) : (
                <Tooltip title='The transaction is still being processed'>
                  <Chip label={transactionInfo.status} size='small' />
                </Tooltip>
              )}
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The finality status of the block'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Block:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              {transactionInfo.blockStatus === 'Finalized' ? (
                <CheckCircleIcon fontSize='small' color='success' />
              ) : (
                <Tooltip title='The block is still being processed'>
                  <AccessTimeFilledIcon
                    fontSize='small'
                    sx={{ color: 'gray' }}
                  />
                </Tooltip>
              )}{' '}
              <Link
                to={`/wallet/etherscan/block/${transactionInfo.blockHeight}`}
                className='underline underline-offset-2 font-bold text-[#066A9C]'
              >
                {transactionInfo.blockHeight}
              </Link>
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The date and time at which a transaction is produced'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Timestamp:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              {`${formatTimeAgo(transactionInfo.timestamp)} (${formatTimeUTC(transactionInfo.timestamp)})`}
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The sending party of the transaction'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>From:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className=''>{transactionInfo.from}</div>
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The receiving party of the transaction'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>To:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className=''>{transactionInfo.to}</div>
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The value being transacted in Ether'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Value:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <Chip
                label={transactionInfo.amount + ' Eth'}
                size='small'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='Amount paid to process the transaction in Ether'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Transaction Fee:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <Chip
                label={transactionInfo.fee + ' Eth'}
                size='small'
                variant='outlined'
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionDetailsPage;
