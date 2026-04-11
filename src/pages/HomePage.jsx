import NavBar from "@/layout/NavBar/NavBar";
import HomepageLayout from "../layout/homepage/homepage";

function HomePage() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <NavBar />
      <HomepageLayout />
    </div>
  );
}

export default HomePage;
