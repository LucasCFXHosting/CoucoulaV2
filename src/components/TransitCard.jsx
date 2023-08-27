import styles from "../style";

const ProductCard = ({ id, name, price,yearlyPrice, description, features, link,isYearly }) => (

  <div key={id} className="flex flex-col items-center px-8 py-10 rounded-[20px] bg-white shadow-lg mb-8 mx-4">
    <h3 className={`${styles.heading3} font-bold text-center mb-4`}>{name}</h3>
    <p className="font-medium text-center mb-4">{description}</p>
    {isYearly ? (
         <p className="text-xl font-semibold text-center mb-6">{yearlyPrice}</p>
      ) : (
        <p className="text-xl font-semibold text-center mb-6">{price}</p>
      )}
    <ul className="text-sm font-medium text-gray-700 mb-8">
      {features.map((feature) => (
        <li className="my-1" key={feature}>
          {feature}
        </li>
      ))}
    </ul>
    <button  className="bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
      <a href={link} >Buy Now</a>
    </button>
  </div>
);

export default ProductCard;
