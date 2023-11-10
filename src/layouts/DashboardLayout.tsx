import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/DashboardLayout.css";
import {
  BuildingStorefrontIcon,
  DocumentPlusIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    label: "Revenue",
    icon: <HomeIcon height={25} width={25} />,
    href: "/",
  },
  {
    label: "Inventory",
    icon: <BuildingStorefrontIcon height={25} width={25} />,
    href: "/inventory",
  },
  {
    label: "Product Registration",
    icon: <DocumentPlusIcon height={25} width={25} />,
    href: "/register-product",
  },
];

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <aside className="nav-sidebar">
        <div className="logo">
          <img src={logo} alt="logo" height={50} width={50} />
          <h1>Dashboard</h1>
        </div>
        <nav>
          <ul>
            {navigation.map((link, index) => (
              <li key={index}>
                <NavLink to={link.href}>
                  {link.icon} {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="user-info">
          <img
            className="avatar avatar-md"
            src="https://api.dicebear.com/7.x/lorelei/svg"
            alt="user avatar"
          />
          <p>Alfred</p>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
