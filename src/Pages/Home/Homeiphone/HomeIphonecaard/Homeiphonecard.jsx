

const Homeiphonecard = ({product}) => {
  console.log(product);
  const { name, price, image, description, brand } = product;
  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        {/* Using the image URL from the product data */}
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        {/* Displaying the product name */}
        <h2 className="card-title">{name}</h2>
        {/* Displaying the product description */}
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Homeiphonecard;