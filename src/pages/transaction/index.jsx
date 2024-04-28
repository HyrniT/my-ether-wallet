import { useParams } from 'react-router-dom';

const TransactionDetailsPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default TransactionDetailsPage;
