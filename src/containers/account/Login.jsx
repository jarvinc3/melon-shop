import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import "./form.css";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <div className="login lg:flex justify-center items-end h-screen w-screen ">
          <section className=" h-full lg:w-[40%] flex flex-col justify-center items-center">
            <div className="md:mb-5 flex items-center w-full justify-center mb-12 lg:mb-2">
              <img width={70} src="/melon-shop-logo.png" alt="" />
              <img width={170} src="/melon-shop-name.png" alt="" />
            </div>
            <div className="form-container">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="text"
                    className="input placeholder:text-[#000000] placeholder:font-semibold"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="textarea">Password</label>
                  <input
                    type="text"
                    name="text"
                    className="input placeholder:text-[#000000] placeholder:font-semibold"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-between items-center gap-6">
                  <Link to={"/home"}>
                    <button className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#c0e8fb] hover:cursor-pointer active:scale-[1]">
                      Login
                    </button>
                  </Link>
                  <Link to={"/singup"}>
                    <p className="text-blue-600 hover:scale-[1.02] transition duration-200 ease-out font-semibold text-[15px] cursor-pointer">
                      Or create account.
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </section>
          <section className="hidden md:block relative ">
            <div className="absolute bottom-16 -z-[1] w-[400px] h-[400px] rounded-full gradient-background"></div>
            <img src="/men-happy-laptop.png" alt="" className="z-10" />
          </section>
        </div>
      )}
    </>
  );
}
