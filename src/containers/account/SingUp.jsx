import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <div className="login md:gap-16 lg:flex justify-center items-end h-screen w-screen ">
      <section className=" h-full lg:w-[40%] flex flex-col justify-center items-center">
        <div className="mb-5 flex items-center w-full justify-center">
          <img width={70} src="/melon-shop-logo.png" alt="" />
          <img width={170} src="/melon-shop-name.png" alt="" />
        </div>
        <div className="form-container">
          <form className="form">
            <div className="md:flex gap-3">
              <div className="form-group">
                <label htmlFor="textarea">Name</label>
                <input
                  type="text"
                  name="text"
                  className="input placeholder:text-[#000000] placeholder:font-semibold"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Lastname</label>
                <input
                  type="text"
                  name="text"
                  className="input placeholder:text-[#000000] placeholder:font-semibold"
                  placeholder="Enter your lastname"
                />
              </div>
            </div>
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
              <Link to={'/home'}>
                <button className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#c0e8fb] hover:cursor-pointer active:scale-[1]">
                  Register
                </button>
              </Link>
              <Link to={"/login"}>
                <p className="text-blue-600 hover:scale-[1.02] transition duration-200 ease-out font-semibold text-[15px] cursor-pointer">
                  Or login.
                </p>
              </Link>
            </div>
          </form>
        </div>
      </section>
      <section className="hidden md:block relative ">
        <div className="absolute bottom-16 -z-[1] w-[400px] h-[400px] rounded-full gradient-background"></div>
        <img src="/women-happy-laptop.png" alt="" className="z-10" />
      </section>
    </div>
  );
}
