import { Link } from 'react-router-dom';

const Pet = ({ name, animal, breed, images, location, id } = {}) => {
  let hero = images?.length
    ? images[0]
    : 'http://pets-images.dev-apis.com/pets/none.jpg';

  return (
    // Using Link instead of a so the Router handles the navigation and the whole site is a SPA
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
