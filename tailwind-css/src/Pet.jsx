import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link className="relative block" to={`/details/${id}`}>
      <div>
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-tr from-white to-transparent p-2">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;