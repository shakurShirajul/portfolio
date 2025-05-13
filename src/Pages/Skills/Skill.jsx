import SectionTitle from "../../Components/Shared/SectionTitle";

const Skills = () => {
  return (
    <div id="skills">
      <SectionTitle title={"SKILLS & EXPERTISE"} />
      <div className="mx-5 md:mx-0 p-5 rounded-2xl border border-black space-y-4">
        <h1 className="text-2xl font-semibold">Tools & Technologies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/yV3sqsz/HTML.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">HTML</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/PcZqQDf/css.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">CSS</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/xz0HSGk/tailwind.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">Tailwind</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/n6KKJgZ/Java-Script.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">Javascript</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/cYchBV1/react.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">React</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/w4JV53b/firebase.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">Firebase</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/989H2Gh/node.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">Node</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/2g0MbMp/express.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">Express</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/HTVBmcR/mongo.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">Mongodb</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/6rbX3Ht/c.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">C</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/QD47t6p/cpp.png" alt="" />
            <div>
              <h1 className="text-xl font-semibold">C++</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
