
import Experience from "../shared/experience";
import PersonalDetails from "../shared/personal-details";
import PublicProfile from "../shared/public-profile";

export default function Sidebar() {

  return (
    <aside className="col-span-2 space-y-5 hidden lg:block">
      <PublicProfile />
      <PersonalDetails />
      <Experience />
    </aside>
  );
}
