import { Link } from "react-router";

function SignUp() {
  return (
    <section className="bg-white flex-1 h-full w-full flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-6 items-center">
        <img src="/logo.png" alt="" className="w-50 h-23 object-cover" />
        <h1 className="text-4xl font-prata text-black">Hello User!</h1>
      </div>

      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 font-inter">
          <label htmlFor="" className="text-sm text-black100">
            Enter First Name
          </label>
          <input
            type="text"
            name=""
            id=""
            className="py-2 px-4 text-black border border-black100 rounded-md text-sm outline-none focus:border-green"
          />
        </div>
        <div className="flex flex-col gap-2 font-inter">
          <label htmlFor="" className="text-sm text-black100">
            Enter Last Name
          </label>
          <input
            type="text"
            name=""
            id=""
            className="py-2 px-4 text-black border border-black100 rounded-md text-sm outline-none focus:border-green"
          />
        </div>
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
        <div className="flex flex-col gap-2 font-inter">
          <label htmlFor="" className="text-sm text-black100">
            Select Role
          </label>
          <select
            name=""
            id=""
            className="py-2 px-4 text-black border border-black100 rounded-md text-sm outline-none focus:border-green"
          >
            <option value="">Admin</option>
          </select>
        </div>
        <label htmlFor="" className="text-slate80 font-medium text-sm">
          <input type="checkbox" name="" id="" className="accent-green" /> By
          clicking here, you agree to our Service{" "}
          <Link to={""} className="font-bold">
            Terms & Conditions
          </Link>
        </label>
        <button className="px-5 py-3 rounded-xl border border-green bg-green text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer">
          Sign up
        </button>
      </form>

      <p className="text-base text-slate50 font-inter self-center">
        Already have an account?
        <Link
          to="/signin"
          className="text-green hover:text-green80 transition-all font-semibold"
        >
          Sign in
        </Link>{" "}
      </p>
    </section>
  );
}

export default SignUp;
