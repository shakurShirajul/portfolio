import dynamic from "next/dynamic";
import Profile from "@/components/home/profile";
import Contact from "@/components/home/contact";

// Lazy load below-the-fold components
const Stack = dynamic(() => import("@/components/home/stack"), {
  loading: () => <div className="h-32 animate-pulse bg-muted rounded-lg" />,
});
const Projects = dynamic(() => import("@/components/home/projects"), {
  loading: () => <div className="h-64 animate-pulse bg-muted rounded-lg" />,
});
const Blogs = dynamic(() => import("@/components/home/blogs"), {
  loading: () => <div className="h-64 animate-pulse bg-muted rounded-lg" />,
});
const Sidebar = dynamic(() => import("@/components/home/sidebar"), {
  loading: () => <div className="h-96 animate-pulse bg-muted rounded-lg" />,
});

export default function Home() {
  return (
    <div className="grid grid-cols-6  gap-5">
      <div className="col-span-6 lg:col-span-4 space-y-5">
        <Profile />
        <Stack/>
        <Projects />
        <Blogs />
        <Contact/>
      </div>
      <Sidebar />
    </div>
  );
}
  