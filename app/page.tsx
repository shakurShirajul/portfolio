import Profile from "@/components/home/profile";
import Sidebar from "@/components/home/sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-5">
      <Profile />
      <Sidebar />
    </div>
  );
}
