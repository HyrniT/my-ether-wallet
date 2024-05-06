import { useParams, useNavigate } from 'react-router-dom';
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
import { formatTimeAgo, formatTimeUTC } from '../../utils';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const blockInfo = {
  status: 'Finalized',
  timestamp: 1714359097121,
  transactions: '3 transactions',
  blockReward: '2.5',
};

const BlockDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const address = useSelector(state => state.wallet.address);

  useEffect(() => {
    if (!address) {
      navigate('/wallet/access');
    }
  }, [address, navigate]);

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
                <Tooltip title='Also known as Block Number. The block height which indicates the length of blockchain, increases after the addition of the new block'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Block Height:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className=''>{id}</div>
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The status of the block'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Status:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              {blockInfo.status === 'Finalized' ? (
                <Chip
                  label={blockInfo.status}
                  size='small'
                  variant='outlined'
                  color='success'
                />
              ) : (
                <Chip label={blockInfo.status} size='small' />
              )}
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The date and time at which a block is produced'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Timestamp:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              {`${formatTimeAgo(blockInfo.timestamp)} (${formatTimeUTC(blockInfo.timestamp)})`}
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='The number of transactions in the block'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Transactions:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className=''>
                <span className='underline underline-offset-2 font-bold text-[#066A9C]'>
                  {blockInfo.transactions}
                </span>{' '}
                <span>in this block</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className='flex items-center gap-2'>
                <Tooltip title='For each block, the block producer is rewarded with a finite amount of Ether on top of fees paid for all transactions in the block'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
                <div className=''>Block Reward:</div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <Chip
                label={blockInfo.blockReward + ' Eth'}
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

export default BlockDetailsPage;
