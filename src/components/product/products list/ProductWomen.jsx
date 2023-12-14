import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductWomen = () => {
  const [products, setProducts] = useState([]);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("https://picsum.photos/200/300").then((response) => {
      setImageData(response.url);
    });
  }, []);

  return (
    <section className="">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-transparent">
        {products.map((product) => (
          <div
            key={product.id}
            className=" md:h-[230px] m-2 group p-3 bg-white dark:bg-white/10 rounded-lg flex flex-col items-center justify-center gap-3 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all"
          >
            <div className="w-[5rem] card1img aspect-square text-[#abd373] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto">
              <Link to={"/detail"}>
                {imageData && <img src={imageData} alt="Imagen aleatoria" />}
              </Link>
            </div>
            <ul>
              <li className="flex flex-col gap-3 w-full">
                <Link to={"/detail"}>
                  <p className="px-2 cardtxt font-semibold dark:text-gray-200 tracking-wider group-hover:text-gray-700 text-base truncate xl:max-w-[250px] max-w-[210px]">
                    {product.title}
                  </p>
                </Link>
                <div className="ordernow flex justify-around items-center w-full">
                  <Link to={"/detail"}>
                    <p className="ordernow-text dark:text-[#abd373] text-[#647b43] font-semibold group-hover:text-gray-800">
                      ${product.price}
                    </p>
                  </Link>
                  <button className="button">
                    <span className="button_top">
                      <img src="/addCart.png" alt="" />
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductWomen;
