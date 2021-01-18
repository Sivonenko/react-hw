import propTypes from 'prop-types';
import s from './Painting.module.css';
const Painting = ({
  imageUrl,
  title,
  author = 'no name',
  profileUrl,
  price,
  quantity,
}) => {
  return (
    <div className={s.container}>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  profileUrl: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
};
export default Painting;
