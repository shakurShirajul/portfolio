import { Link } from "react-router";
import ConnectCard from "../Shared/ConnectCard";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="mx-5 md:mx-0 p-5 space-y-8 border border-black rounded-2xl">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/80962495?v=4"
            alt=""
            className="w-36 h-36 rounded-xl"
          />
          <div>
            <div className="flex items-center gap-2">
              <div
                aria-label="status"
                className="status status-lg bg-green-500"
              ></div>
              <h1 className="text-sm font-bold">AVAILABLE FOR HIRE</h1>
            </div>
            <div>
              <h1 className="text-5xl font-semibold">
                SHIRAJUL ISLAM <br />
                SHAKUR
              </h1>
            </div>
            <div>
              <h1 className="font-semibold">
                MERN STACK DEVELOPER | FRONTEND DEVELOPER
              </h1>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">ABOUT ME</h1>
            <div className="space-y-3">
              <p>
                I'm a MERN stack developer skilled in building full-stack web
                applications using MongoDB, Express.js, React, and Node.js. I
                focus on creating responsive, scalable, and user-friendly
                solutions with clean, efficient code.
              </p>
              <p>
                I enjoy solving real-world problems through technology and
                continuously learning new tools and practices. From front-end
                design to back-end logic, I aim to deliver smooth,
                high-performing digital experiences.
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-2xl font-semibold">CONNECT</h1>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <Link to={`https://github.com/shakurShirajul`}>
                {" "}
                <ConnectCard
                  logo={<FaGithub className="text-3xl" />}
                  name={"Github"}
                  id={"shakurShirajul"}
                />
              </Link>
              <Link to={`https://www.linkedin.com/in/shakur-shirajul/`}>
                <ConnectCard
                  logo={<FaLinkedin className="text-3xl" />}
                  name={"Linkedin"}
                  id={"shakurShirajul"}
                />
              </Link>
              <Link to={`https://www.facebook.com/shiirajulisllam.shakur`}>
                <ConnectCard
                  logo={<FaFacebook className="text-3xl" />}
                  name={"Facebook"}
                  id={"shakurShirajul"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
