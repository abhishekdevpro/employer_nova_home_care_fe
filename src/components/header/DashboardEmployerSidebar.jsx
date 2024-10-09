// import { Link } from "react-router-dom";
// import employerMenuData from "../../data/employerMenuData";
// import { isActiveLink } from "../../utils/linkActiveChecker";
// import logo from "../../Images/logo.png";
// import { useDispatch, useSelector } from "react-redux";
// import { menuToggle } from "../../features/toggle/toggleSlice";

// import { useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { AiOutlineLogout } from "react-icons/ai";
// import { logout } from "@/store/slices/auth";

// const DashboardEmployerSidebar = () => {
//   const { pathname } = useLocation();
//   const { menu } = useSelector((state) => state.toggle);

//   const dispatch = useDispatch();
//   // menu toggle handler
//   const menuToggleHandler = () => {
//     dispatch(menuToggle());
//   };

//   return (
//     <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
//       {/* Start sidebar close icon */}
//       <div className="pro-header text-end pb-0 mb-0 show-1023">
//         <div className="fix-icon" onClick={menuToggleHandler}>
//           <span className="flaticon-close"></span>
//         </div>
//       </div>
//       {/* End sidebar close icon */}

//       <div className="sidebar-inner">
//         <ul className="navigation">
//           {employerMenuData.map((item) => (
//             <li
//               className={`mb-1 transition-transform duration-200 ease-in-out ${
//                 isActiveLink(item.routePath, pathname)
//                   ? "bg-purple-200 text-white rounded-lg"
//                   : "hover:scale-125 hover:bg-teal-300 hover:text-white rounded-lg"
//               }`}
//               key={item.id}
//               onClick={menuToggleHandler}
//             >
//               {item?.name === "Logout" ? (
//                 <Button
//                   title="logout"
//                   className="bg-transparent default_Black_Text px-4 w-full text-md flex justify-start outline-none"
//                   onClick={() => {
//                     console.log("logout");
//                     dispatch(logout());
//                   }}
//                 >
//                   <AiOutlineLogout className="pr-2 text-3xl mr-2" /> Logout
//                 </Button>
//               ) : (
//                 <Link to={item.routePath}>
//                   <i className={`default_Black_Text la ${item.icon}`}></i>{" "}
//                   {item.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DashboardEmployerSidebar;
import { Link } from "react-router-dom";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "@/store/slices/auth";

const DashboardEmployerSidebar = () => {
  const { pathname } = useLocation();
  const { menu } = useSelector((state) => state.toggle);

  const dispatch = useDispatch();
  // menu toggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""} bg-white shadow-lg`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div
          className="fix-icon text-gray-500 hover:text-teal-500 cursor-pointer"
          onClick={menuToggleHandler}
        >
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner p-4">
        <ul className="navigation space-y-2">
          {employerMenuData.map((item) => (
            <li
              className={`mb-1 transition-transform duration-200 ease-in-out rounded-lg ${
                isActiveLink(item.routePath, pathname)
                  ? "bg-teal-500 text-white"
                  : "hover:scale-105 hover:bg-teal-100 text-gray-700"
              }`}
              key={item.id}
              onClick={menuToggleHandler}
            >
              {item?.name === "Logout" ? (
                <Button
                  title="logout"
                  className="bg-transparent text-gray-700 hover:text-white w-full text-md flex justify-start px-4 py-2 hover:bg-teal-500"
                  onClick={() => {
                    console.log("logout");
                    dispatch(logout());
                  }}
                >
                  <AiOutlineLogout className="pr-2 text-3xl mr-2" /> Logout
                </Button>
              ) : (
                <Link
                  to={item.routePath}
                  className="flex items-center px-4 py-2"
                >
                  <i className={`la ${item.icon} mr-2`}></i> {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardEmployerSidebar;
