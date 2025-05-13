const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
      <aside>
        <p className="font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved by
          Shirajul Islam Shakur
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
