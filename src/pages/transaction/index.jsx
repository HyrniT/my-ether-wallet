import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { formatTimeAgo, formatTimeUTC } from '../../utils';
import { useSelector } from 'react-redux';
import api from '../../services/api';

const TransactionDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const address = useSelector(state => state.wallet.address);

  const [transactionInfo, setTransactionInfo] = useState({});

  useEffect(() => {
    api
      .get(`/transaction/${id}`)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.data);
          setTransactionInfo(response.data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    if (!address) {
      navigate('/wallet/access/software/private-key');
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
            {transactionInfo.blockId && (
              <>
                <Grid item xs={4}>
                  <div className='flex items-center gap-2'>
                    <Tooltip title='The finality status of the block'>
                      <HelpOutlineOutlinedIcon fontSize='small' />
                    </Tooltip>
                    <div className=''>Block:</div>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  {/* {transactionInfo.blockStatus === 'Finalized' ? (
                <CheckCircleIcon fontSize='small' color='success' />
              ) : (
                <Tooltip title='The block is still being processed'>
                  <AccessTimeFilledIcon
                    fontSize='small'
                    sx={{ color: 'gray' }}
                  />
                </Tooltip>
              )}{' '} */}
                  <Link
                    to={`/wallet/etherscan/block/${transactionInfo.blockId}`}
                    className='underline underline-offset-2 font-bold text-[#066A9C]'
                  >
                    {transactionInfo.blockId}
                  </Link>
                </Grid>
              </>
            )}
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
              <div className=''>{transactionInfo.fromAddress}</div>
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
              <div className=''>{transactionInfo.toAddress}</div>
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
              <Chip label={0.000256 + ' Eth'} size='small' variant='outlined' />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionDetailsPage;
