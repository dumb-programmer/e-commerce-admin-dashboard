import { NavLink, Outlet } from "react-router-dom";
import logo from "../../public/logo.svg";
import "../styles/DashboardLayout.css";

const navigation = [
  {
    label: "Revenue",
    href: "/",
  },
  {
    label: "Inventory",
    href: "/inventory",
  },
  {
    label: "Product Registration",
    href: "/register-product",
  },
];

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <aside className="nav-sidebar">
        <div className="logo">
          <img src={logo} alt="logo" height={50} width={50}/>
          <h1>Dashboard</h1>
        </div>
        <nav>
          <ul>
            {navigation.map((link, index) => (
              <li key={index}>
                <NavLink to={link.href}>{link.label}</NavLink>
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
