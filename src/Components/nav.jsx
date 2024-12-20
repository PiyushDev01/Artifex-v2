import { useContext, useEffect, useState } from "react";
import Button from "./button";
import "./nav.css";
import logo from "../assets/logo.webp";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import signout from "../assets/signout.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Framer/fadein";
import Login from "./Login";
import LoginGoogle from "../Firebase/googleAuth";
import { IoMdCart } from "react-icons/io";
import { signOut, getAuth } from "firebase/auth";
import app from "../Firebase/firbase";
import { HiOutlineLogout } from "react-icons/hi";
import { pending } from "./Login";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContex";
import { useNavigate } from "react-router-dom";
import { checkAdmin } from "../Firebase/CURDfunc/read";
import toast, { Toaster } from "react-hot-toast";
import { getOrders } from "../Firebase/CURDfunc/read";
import Detailcontext from "../Pages/Orders/OrderformSection/DetailContext/Detailcontext";

const auth = getAuth(app);

export default function Nav() {
  const [toggle, settoggle] = useState(false);
  const [box, setbox] = useState({ width: 0 });
  const [textbox, settextbox] = useState({ display: "none" });
  const [fadebg, setfadebg] = useState({ display: "none" });
  const [hide, sethide] = useState(false);
  const [droplogout, setdroplogout] = useState(false);

  const [loading, setLoading] = useState(true);
  const { setOrderArray, orderArray } = useContext(Detailcontext);

  const handleMouseOver = () => setdroplogout(true);
  const handleMouseOut = () => setdroplogout(false);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      hide && sethide(false);
    }
    // console.log(user);
    async function check() {
      if (user) {
        const check = await checkAdmin(user.uid);
        setcheckadmin(check);
      }
    }
    check();
  }, [user]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders(user.uid);
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setOrderArray(sortedData);
        localStorage.setItem("orders", JSON.stringify(sortedData)); // Save orders
        setLoading(false);
      } catch (e) {
        console.log("Error: " + e);
        setLoading(false);
      }
    };

    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrderArray(JSON.parse(savedOrders)); // Load orders from storage
      // console.log(orderArray);
    } else {
      fetchOrders();
    }
  }, [user]);

  const handleTog = () => {
    if (!toggle) {
      settoggle(true);
      setbox({ width: "70%" });
      settextbox({ display: "flex" });
      setfadebg({ display: "flex" });
      document.getElementById("checkbox").checked = true;
    } else {
      settoggle(false);
      setbox({ width: 0 });
      settextbox({ display: "none" });
      setfadebg({ display: "none" });
      document.getElementById("checkbox").checked = false;
    }
  };

  const togglelgn = () => {
    sethide(!hide);
    // console.log(hide);
  };

  const SignOut = () => {
    signOut(auth);
    navigate("/");
    window.location.reload();
  };

  const notavail = () => {
    toast.error(" This feature is under development", {
      position: "bottom-center",
    });
  };

  const { isUserlogged, uDetails } = useContext(UserContext);
  const [checkadmin, setcheckadmin] = useState(false);

  return (
    <>
      <nav className=" flex fles-row h-fit w-screen p-3 md:px-40 md:p-0 justify-between md:bg-none bg-white/25 backdrop-blur-sm  items-center fixed md:shadow-lg shadow-md rounded-b-3xl md:rounded-none z-20">
        <div className=" flex items-center gap-2">
          <a href="/">
            <img src={logo} className=" md:w-28  w-24" alt="" />
          </a>
          {checkadmin && (
            <p
              onClick={() => navigate("/admin")}
              className=" cursor-pointer hover:text-indigo-500 border-l-[1px] px-2 border-slate-500 "
            >
              Admin
            </p>
          )}
        </div>
        <div
          className=" p-3 px-10 shadow-sm rounded-full hidden md:block bg-white/30 backdrop-blur-lg"
          id="blurnav"
        >
          <ul className="flex flex-row gap-10 font-sans transition-all text-xl">
            <Link to="/">
              {" "}
              <li id="li">Home</li>
            </Link>

            <Link to="/aboutus">
              {" "}
              <li id="li">About</li>
            </Link>
            <a href="https://wa.me/+916392802689">
              {" "}
              <li id="li">Contact</li>
            </a>
          </ul>
        </div>

        <div className=" flex items-center gap-4">
          <Link to="/order">
            {" "}
            <button
              id="exbtn"
              className=" md:flex items-center gap-1 hidden hover:text-slate-100 px-4 py-2 rounded-full text-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.96 8.958c-.67-.74-1.68-1.17-3.08-1.32v-.76c0-1.37-.58-2.69-1.6-3.61a4.847 4.847 0 0 0-3.76-1.25c-2.39.23-4.4 2.54-4.4 5.04v.58c-1.4.15-2.41.58-3.08 1.32-.97 1.08-.94 2.52-.83 3.52l.7 5.57c.21 1.95 1 3.95 5.3 3.95h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.13-2.43-.83-3.51Zm-8.3-5.55a3.482 3.482 0 0 1 3.83 3.47v.7H8.51v-.52c0-1.78 1.47-3.49 3.15-3.65Zm-3.24 9.74h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Zm7 0h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Z"
                  fill="#ffffff"
                ></path>
              </svg>
              Order
            </button>
          </Link>
          <div
            className=" flex flex-row relative items-center  gap-5 py-3 "
            onClick={() => {
              !isUserlogged && togglelgn();
            }}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            {uDetails.image != null ? (
              <div className="profile relative ">
                <img
                  src={uDetails.image}
                  alt="user"
                  className="md:w-16 md:p-2 w-10 h-10 md:h-16 md:block hidden"
                  style={{ borderRadius: "100px" }}
                />
              </div>
            ) : (
              <Button name="Login" display="none"></Button>
            )}

            <div
              className={`absolute md:flex hidden items-center justify-center -left-[50%] top-[100%] w-fit ${
                !droplogout ? "max-h-0" : "max-h-40"
              } transition-all duration-200 px-4 overflow-hidden min-w-[6rem] rounded-b-2xl drop-shadow-lg bg-slate-200`}
            >
              {isUserlogged && (
                <h1
                  className=" m-4 cursor-pointer hover:text-purple-600 text-slate-700 transition-all text-md hidden md:flex items-center gap-2"
                  id="lgh1"
                  onClick={SignOut}
                >
                  <svg
                    className=" rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill="#ba68c8"
                      d="M9 7.2v9.59C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2h-2.6C11 2 9 4 9 7.2z"
                      opacity=".4"
                    ></path>
                    <path
                      fill="#ba68c8"
                      d="M5.57 8.12l-3.35 3.35c-.29.29-.29.77 0 1.06l3.35 3.35c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-2.07-2.07h10.69c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.56l2.07-2.07c.15-.15.22-.34.22-.53s-.07-.39-.22-.53c-.29-.3-.76-.3-1.06 0z"
                    ></path>
                  </svg>
                  Logout
                </h1>
              )}
            </div>
          </div>
        </div>

        {/* mobile view */}

        <div
          style={fadebg}
          onClick={handleTog}
          className=" gap-5 pb-28 flex flex-col justify-end items-center w-full h-[120vh]  absolute top-0 left-0 md:none "
          id="fadebg"
        ></div>

        <div className=" md:hidden  flex items-center justify-center gap-2">
          <Link to="/order">
            <svg 
            
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              
            >
              <path
                opacity=".4"
                d="M16.19 8.858c-.39 0-.7-.31-.7-.7v-1.28a3.482 3.482 0 0 0-3.83-3.47c-1.68.16-3.15 1.87-3.15 3.65v.9c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-.9c0-2.5 2.02-4.81 4.41-5.04 1.39-.13 2.73.31 3.76 1.25 1.02.92 1.6 2.24 1.6 3.61v1.28c0 .39-.31.7-.69.7Z"
                fill="#ba68c8"
              ></path>
              <path
                d="M19.96 8.958c-.84-.93-2.22-1.38-4.24-1.38H8.28c-2.02 0-3.4.45-4.24 1.38-.97 1.08-.94 2.52-.83 3.52l.7 5.57c.21 1.95 1 3.95 5.3 3.95h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.13-2.43-.83-3.51Zm-11.54 4.19h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Zm7 0h-.01c-.55 0-1-.45-1-1s.45-1 1-1c.56 0 1.01.45 1.01 1s-.45 1-1 1Z"
                fill="#ba68c8"
              ></path>
            </svg>
          </Link>
          <div className="block md:hidden" onClick={handleTog}>
            {
              <div className="hamburger">
                <input id="checkbox" className="checkbox" type="checkbox" />
                <svg fill="none" viewBox="0 0 50 50" height="40" width="40">
                  <path
                    className="lineTop line"
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 11L44 11"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 24H43"
                    className="lineMid line"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 37H43"
                    className="lineBottom line"
                  ></path>
                </svg>
              </div>
            }
          </div>
        </div>

        <div
          style={box}
          className=" min-h-fit h-[30rem] absolute backdrop-blur-sm bg-[#1f1f1f] from-60%  to-purple-800/75 
           shadow-2xl border-[#4c4c4c]  -right-1 top-20 md:hidden justify-between py-8 rounded-l-[1rem] flex flex-col items-center gap-3 overflow-hidden z-50"
          id="mobblurnav"
        >
          <ul
            style={{ textbox }}
            className="flex flex-col  gap-6 transition-all text-left text-slate-100 text-lg overflow-hidden"
            onClick={handleTog}
          >
            {
              uDetails.image && (
                <img
              src={uDetails.image}
              className="md:w-16 translate-x-[20%] border-2 border-purple-500 rounded-full m-2 w-16 h-16 md:h-16 md:hidden block"
            />
              )
            }
            {/* <h1 className="text-[10px] text-center">{user.email}</h1> */}
            <Link to="/">
              {" "}
              <li id="li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity=".4"
                    d="m20.04 6.822-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62v-6.78c0-1.35-.87-3.01-1.97-3.78Z"
                    fill="#ba68c8"
                  ></path>
                  <path
                    d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
                    fill="#ba68c8"
                  ></path>
                </svg>
                Home
              </li>
            </Link>
            <Link to="/order">
              {" "}
              <li id="li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity=".4"
                    d="M16.19 8.858c-.39 0-.7-.31-.7-.7v-1.28a3.482 3.482 0 0 0-3.83-3.47c-1.68.16-3.15 1.87-3.15 3.65v.9c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-.9c0-2.5 2.02-4.81 4.41-5.04 1.39-.13 2.73.31 3.76 1.25 1.02.92 1.6 2.24 1.6 3.61v1.28c0 .39-.31.7-.69.7Z"
                    fill="#ba68c8"
                  ></path>
                  <path
                    d="M19.96 8.958c-.84-.93-2.22-1.38-4.24-1.38H8.28c-2.02 0-3.4.45-4.24 1.38-.97 1.08-.94 2.52-.83 3.52l.7 5.57c.21 1.95 1 3.95 5.3 3.95h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.14-2.43-.83-3.51ZM12 18.578c-2.09 0-3.79-1.7-3.79-3.79s1.7-3.79 3.79-3.79 3.79 1.7 3.79 3.79-1.7 3.79-3.79 3.79Z"
                    fill="#ba68c8"
                  ></path>
                  <path
                    opacity=".4"
                    d="M12 18.58a3.79 3.79 0 1 0 .001-7.58 3.79 3.79 0 0 0 0 7.58Z"
                    fill="#ba68c8"
                  ></path>
                  <path
                    d="M11.43 16.64c-.19 0-.38-.07-.53-.22l-.99-.99a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.13 1.97c-.15.13-.33.2-.51.2Z"
                    fill="#ba68c8"
                  ></path>
                </svg>
                Order
              </li>
            </Link>
            <Link to="/aboutus">
              {" "}
              <li id="li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m17.02 21.292-3.48-1.74c-.97-.48-2.1-.48-3.07 0l-3.48 1.74c-2.99 1.49-6.14-1.72-4.58-4.67l.82-1.54c.11-.21.29-.38.51-.48l12.64-5.7c.52-.23 1.13-.02 1.39.48l3.81 7.24c1.56 2.95-1.58 6.16-4.56 4.67Z"
                    fill="#ba68c8"
                  ></path>
                  <path
                    opacity=".4"
                    d="m15.6 7.69-8.28 3.73c-.93.42-1.87-.58-1.39-1.48l3.04-5.77c1.29-2.45 4.79-2.45 6.08 0l1.07 2.04c.28.55.04 1.23-.52 1.48Z"
                    fill="#ba68c8"
                  ></path>
                </svg>
                About
              </li>
            </Link>
            <a href="https://wa.me/+916392802689">
              {" "}
              <li id="li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity=".4"
                    d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
                    fill="#ba68c8"
                  ></path>
                  <path
                    d="M11.999 12.872c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z"
                    fill="#ba68c8"
                  ></path>
                </svg>
                Contact
              </li>
            </a>
          </ul>
          <div className=" flex items-center justify-center flex-col">
            <motion.h1
              variants={fadeIn("no", 0.05)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-zinc-300 w-full text-md text-center mb-4 mt-16 "
            >
              {isUserlogged ? "Sign out" : "Login or Sign Up"} <br />{" "}
              {isUserlogged ? "" : "with"}
            </motion.h1>

            {isUserlogged ? (
              <motion.div
                onClick={SignOut}
                variants={fadeIn("no", 0.05)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                {/* <img src={signout} className=" w-8" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="#ba68c8"
                    d="M9 7.2v9.59C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2h-2.6C11 2 9 4 9 7.2z"
                    opacity=".4"
                  ></path>
                  <path
                    fill="#ba68c8"
                    d="M5.57 8.12l-3.35 3.35c-.29.29-.29.77 0 1.06l3.35 3.35c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-2.07-2.07h10.69c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.56l2.07-2.07c.15-.15.22-.34.22-.53s-.07-.39-.22-.53c-.29-.3-.76-.3-1.06 0z"
                  ></path>
                </svg>
              </motion.div>
            ) : (
              <div className=" flex flex-row gap-8">
                <a
                  onClick={() => {
                    LoginGoogle(handleTog);
                  }}
                >
                  {" "}
                  <motion.div
                    variants={fadeIn("up", 0.07)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className=" p-2 w-14 flex items-center justify-center h-14 backdrop-blur-sm bg-slate-500/20 rounded-lg shadow-lg"
                  >
                    {/* <img src={googleIcon} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="#ba68c8"
                        d="M21.74 11.07a.989.989 0 00-.99-.89H13.2c-.55 0-1 .45-1 1v1.71c0 .55.45 1 1 1h4.51c-.11.92-.71 2.31-2.04 3.24-.85.59-1.98 1-3.47 1-.07 0-.13 0-.2-.01-2.55-.08-4.71-1.79-5.49-4.14A6.23 6.23 0 016.18 12c0-.69.12-1.36.32-1.98.06-.18.13-.36.21-.54.92-2.07 2.93-3.53 5.29-3.6.06-.01.13-.01.2-.01 1.43 0 2.5.47 3.25.99.39.27.91.21 1.25-.12l1.39-1.36c.44-.43.4-1.16-.1-1.52C16.4 2.69 14.46 2 12.2 2c-.07 0-.13 0-.2.01a9.96 9.96 0 00-8.73 5.5C2.59 8.87 2.2 10.39 2.2 12c0 1.61.39 3.13 1.07 4.49h.01a9.956 9.956 0 008.72 5.5c.07.01.13.01.2.01 2.7 0 4.97-.89 6.62-2.42 1.89-1.75 2.98-4.31 2.98-7.36 0-.43-.02-.8-.06-1.15z"
                      ></path>
                    </svg>{" "}
                  </motion.div>
                </a>

                <a onClick={notavail}>
                  <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className=" p-2 w-14 h-14 flex items-center justify-center backdrop-blur-sm bg-slate-500/20 rounded-lg shadow-lg "
                  >
                    {/* <img src={facebookIcon} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="#ba68c8"
                        d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"
                      ></path>
                    </svg>{" "}
                  </motion.div>
                </a>
              </div>
            )}
          </div>
        </div>

        {hide && <Login handlelgn={togglelgn} />}
      </nav>
      <Toaster />
    </>
  );
}
