

const Homeiphonecard = ({product}) => {
  console.log(product);
  const { name, price, image, description, brand,rating,category } = product;
  return (
    <div className="max-w-sm rounded overflow-hidden bg-[#FFFFFF] shadow-2xl hover:shadow-xl">
   <img className="w-full" src={image} alt="" />
    <div className="px-6 py-4">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <div className="flex items-center">
          <div className="mr-2 rounded-full bg-blue-600 py-1 px-2 text-xs font-medium text-white"></div>
          <div className="rounded-full bg-yellow-500 py-1 px-2 text-xs font-medium text-white"></div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src="https://img.icons8.com/windows/24/null/bedroom.png" />
          <p className="ml-2 text-sm font-medium text-gray-700">{brand}</p>
        </div>
        <div className="flex items-center">
          <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" />
          <p className="ml-2 text-sm font-medium text-gray-700">{category}</p>
        </div>
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png" />
          <p className="ml-2 text-sm font-medium text-gray-700">{rating}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-extrabold text-blue-800">${price}</p>
      </div>
    </div>
    <div className="px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={image} />
        </div>
      </label>
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-600">tech product</p>
        </div>
      </div>
      <div className="flex">
        <a href="tel:+1234567890" className="mr-2 rounded-full bg-gray-300 p-1 text-gray-700 hover:text-gray-800">
          <img src="https://img.icons8.com/color/24/null/ringer-volume.png" />
        </a>
        <a href="https://wa.me/1234567890" className="rounded-full bg-green-500 p-1 text-white hover:bg-green-600">
          <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-WhatsApp-social-media-those-icons-lineal-color-those-icons.png" />
  </a>
  </div>
  </div>
  </div>
  );
};

export default Homeiphonecard;