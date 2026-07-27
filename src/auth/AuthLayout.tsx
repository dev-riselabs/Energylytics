import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <main className="auth-bg min-h-screen h-full relative px-15 py-10">
      <div className="absolute inset-0 bg-linear-to-r from-black/44 to-black/50"></div>

      <div className=" bg-white rounded-2xl flex p-2 w-full relative z-2 h-auto">
        <div className="flex-1 h-auto rounded-2xl flex flex-col gap-3 auth-bg relative overflow-hidden p-5">
          <div className="absolute inset-0 bg-linear-to-r from-black/44 to-black/20"></div>
          <div className="flex flex-col gap-2 font-inter z-2 relative mt-auto">
            <h2 className="text-3xl font-bold text-white">Energylytics</h2>
            <p className="text-xl text-white">We bring together energy data, analytics, policy insights and AI modelling to help stakeholders understand emerging opportunities and barriers across the clean energy value chain.</p>
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
