import Logo from "./components/Logo";
import NavbarCenterItems from "./components/NavbarCenterItems";
import NavbarEndItems from "./components/NavbarEndItems";
import TrustedByAvatars from "./components/TrustedByAvatars";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 bg-[#F5FAF6] min-h-screen rounded-xl m-6 p-2 border border-[#E5E5E5]">
        <div className="flex items-center">
          <Logo />
          <div className="flex-1 flex justify-center">
            <NavbarCenterItems />
          </div>
          <NavbarEndItems />
        </div>
        <div className="flex items-center justify-center my-10">
          <TrustedByAvatars />
        </div>
      </div>
    </>
  );
}

export default App;
