import Blogs from "@/components/home/blogs";
import Profile from "@/components/home/profile";
import Projects from "@/components/home/projects";
import Sidebar from "@/components/home/sidebar";
import Stack from "@/components/home/stack";

export default function Home() {
  return (
    <div className="grid grid-cols-6  gap-5">
      <div className="col-span-6 lg:col-span-4 space-y-5">
        <Profile />
        <Stack/>
        <Projects />
        <Blogs />
      </div>
      <Sidebar />
    </div>
  );
}
  