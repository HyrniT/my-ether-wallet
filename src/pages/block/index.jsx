import { useParams } from 'react-router-dom';

const BlockDetailsPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default BlockDetailsPage;
