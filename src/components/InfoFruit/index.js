import { useSelector } from 'react-redux';
import CardFruitView from '../CardFruitView';
import AttributesFruit from '../AttributesFruit';

const InfoFruit = ({ id }) => {
  const { products } = useSelector((state) => state.products);
  const product = products.find((prod) => {
    return prod.id === id;
  });

  return (
    <>
      <CardFruitView
        img={product.image}
        name={product.name}
        sku={product.sku}
        price={product.price}
        id={product.id}
      />
      <AttributesFruit attributes={product.attributes} />
    </>
  );
};

export default InfoFruit;
