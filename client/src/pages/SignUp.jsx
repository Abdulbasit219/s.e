import { React, useState  } from "react";
import Layout from "../component/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        // toast.success(res.data && res.data.message);
        alert("Successfully register")
        navigate("/signin");

      } else {
        // toast.error(res.data.message);
        alert("nhi howa bhai tu")
      }
    } catch (error) {
      console.log(error);
      
      // toast.error("Something went wrong");
    }
  };

  // `${process.env.REACT_URL}/api/v1/auth/register`,

  return (
    <Layout>
      <>
        <div className="py-20 md:py-6 bg-gray-50 flex flex-col justify-center px-4 lg:px-8">
          {/* main heading */}
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Create a new account
            </h2>
            <p className="flex flex-col mt-2 text-center text-sm leading-5 text-gray-500 max-w">
              Or
              <Link
                to={"/signin"}
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                login to your account
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form method="POST" action="#" onSubmit={handleSubmit}>
                {/* name field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      placeholder="user@example.com"
                      type="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                {/* password */}
                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Password
                  </label>

                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* confirm password */}
                {/* <div className="mt-6">
                  <label
                    htmlFor="password_confirmation"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Confirm Password
                  </label>

                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password_confirmation"
                      name="password_confirmation"
                      type="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      value={conformPassword}
                      onChange={(e) => setConformPassword(e.target.value)}
                    />
                  </div>
                </div> */}

                {/* phone field  */}
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5  text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0317.."
                      type="num"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  {/* address field */}
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5  text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="brohi@xyz.com"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>

                {/* create account btn */}
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Create account
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default SignUp;