import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 font-Roboto">
        <div className="w-11/12 mx-auto footer text-base-content p-10 *:text-white">
          <aside>
            <img className="w-20" src={logo} alt="" />
            <p className="text-xl">
              Career Compass
              <br />
              Turn your passion into reality
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">More about Career Compass</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Latest News</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Latest Courses</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <footer className="footer footer-center *:text-white text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Rasel Mridha
            </p>
          </aside>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
