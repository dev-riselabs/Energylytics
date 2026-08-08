import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

function SignIn() {
  return (
    <section className="bg-white flex-1 h-full w-full flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-6 items-center">
        <img src="/logo.png" alt="" className="w-50 h-20 md:h-23 object-cover" />
        <h1 className="text-4xl font-prata text-black">Welcome Back</h1>
      </div>
      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 font-inter">
          <label htmlFor="" className="text-sm text-black100">
            Enter Email Address
          </label>
          <input
            type="email"
            name=""
            id=""
            className="py-2 px-4 text-black border border-black100 rounded-md text-sm outline-none focus:border-green"
          />
        </div>
        <div className="flex flex-col gap-2 font-inter">
          <label htmlFor="" className="text-sm text-black100">
            Enter Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="py-2 px-4 text-black border border-black100 rounded-md text-sm outline-none focus:border-green"
          />
        </div>
        <div className="flex items-center justify-between font-inter">
          <label htmlFor="" className="text-green font-medium text-sm"><input type="checkbox" name="" id="" className="accent-green"/> Remember Me</label>
          <Link to='/forgot-password' className="text-green hover:text-green80 transition-all font-semibold text-sm">Forgot Password?</Link>
        </div>
        <button className="px-5 py-3 rounded-xl border border-green bg-green text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer">
          Sign in
        </button>
      </form>
      <div className="flex items-center gap-3">
        <span className="flex-1 h-px bg-zinc100"></span>
        <span className="text-sm text-zinc100">or</span>
        <span className="flex-1 h-px bg-zinc100"></span>
      </div>
      <div className="flex flex-col gap-3 max-w-101 w-full font-inter mx-auto">
        <button className="flex w-full items-center justify-center gap-4 py-2 rounded-full border border-black/20 text-base text-black hover:bg-black hover:text-white transition-all cursor-pointer">
          <FcGoogle className="-4 h-4" /> Continue with Google
        </button>
        <button className="flex w-full items-center justify-center gap-4 py-2 rounded-full border border-black/20 text-base text-black hover:bg-black hover:text-white transition-all cursor-pointer">
          <FaApple className="-4 h-4" /> Continue with Apple
        </button>
      </div>
      <p className="text-base text-slate50 font-inter self-center">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-green hover:text-green80 transition-all font-semibold"
        >
          Sign up
        </Link>{" "}
      </p>
    </section>
  );
}

export default SignIn;
