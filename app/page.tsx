import Profile from "@/components/home/profile";
import Sidebar from "@/components/home/sidebar";

export default function Home() {
  return (
    <div className="grid items-start grid-cols-6 gap-10">
      <Profile />
      <Sidebar />
    </div>
  );
}
