import propTypes from 'prop-types'
const Painting = ({
  imageUrl,
  title,
  author = "no name",
  profileUrl,
  price,
  quantity,
}) => {
  return (
    <div>
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
  imageUrl: propTypes.string,
  title: propTypes.string,
  profileUrl: propTypes.string,
  author: propTypes.string,
  price: propTypes.number,
  quantity: propTypes.number,
  }
export default Painting;
