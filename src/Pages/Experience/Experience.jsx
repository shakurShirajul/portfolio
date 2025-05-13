import ExperienceCard from "../../Components/Experience/ExperienceCard";
import SectionTitle from "../../Components/Shared/SectionTitle";

const Experience = () => {
  return (
    <div id="experience">
      <SectionTitle title={"Work Experience"} />
      <div className="mx-5 md:mx-0 space-y-4">
        <ExperienceCard
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/PngItem_5916871.png/800px-PngItem_5916871.png"
          }
          title={"IIUC"}
          designation={"Teaching Assistant"}
          description={
            "Assisted in delivering core concepts of C++ programming to undergraduate students, guided lab sessions, and provided support in debugging and solving programming assignments. Collaborated with faculty to ensure students' understanding of object-oriented programming and algorithmic thinking."
          }
        />
        <ExperienceCard
          image={
            "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/461322391_545675004640285_284219244945060516_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mWLRkFKqnEMQ7kNvwEhI1gv&_nc_oc=AdnEA3w4eqJWyJ7kLczhGdrgUGs8_FV2ffgNIt8SlA44u3MVePOt5zvbttBbdWx8Qgo&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=G1rKaKR_cmPt6ab_6nTp8Q&oh=00_AfIas9cin6PLM47iNNfCyVVfVJPujncUzRZpeYBWsVom_Q&oe=68277E2F"
          }
          title={"IIUC Computer Club"}
          designation={"Assistant Webmaster Secratery"}
          description={
            "Responsible for developing, maintaining and updating the club's official website, assisting in organizing tech events, managing digital content, and supporting web-related tasks to enhance the club's online presence."
          }
        />
      </div>
    </div>
  );
};
export default Experience;
