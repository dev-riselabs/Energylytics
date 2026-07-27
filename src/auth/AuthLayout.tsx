import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <main className="auth-bg min-h-screen h-screen relative px-15 py-10">
      <div className="absolute inset-0 bg-linear-to-r from-black/44 to-black/50"></div>

      <div className=" bg-white rounded-2xl flex items-center p-2 w-full relative z-2 h-full">
        <div className="flex-1 h-full rounded-2xl flex flex-col gap-3 auth-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-black/44 to-black/20"></div>
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
