import { useParams } from 'react-router-dom';
import InfoFruit from '../components/InfoFruit';

const Fruit = () => {
  const { id } = useParams();
  return (
    <>
      <InfoFruit id={id} />
    </>
  );
};

export default Fruit;
