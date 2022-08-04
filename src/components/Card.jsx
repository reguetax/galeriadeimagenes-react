const Card = (props) => {
  return (
    <div className='card-img'>
      <img src={props.imagen} width="250px" />
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <button type="button" class="btn btn-secondary">Ver mas</button>
    </div>
  );
};

export default Card;