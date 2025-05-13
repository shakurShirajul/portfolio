import AnchorLink from "react-anchor-link-smooth-scroll";
const navRoutes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Experience",
    link: "experience",
  },
  {
    name: "Education",
    link: "education",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Contacts",
    link: "contacts",
  },
];
const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shirajul_Islam_Shakur_Resume.pdf";
    link.download = "Shirajul_Islam_Shakur_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navRoutes.map((route, index) => (
              <li key={index}>
                <AnchorLink href={`#${route.link}`}>{route.name}</AnchorLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Shakur</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navRoutes.map((route, index) => (
            <li key={index}>
              <AnchorLink href={`#${route.link}`}>{route.name}</AnchorLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end" onClick={handleDownload}>
        <a className="btn">RESUME</a>
      </div>
    </div>
  );
};
export default Navbar;
