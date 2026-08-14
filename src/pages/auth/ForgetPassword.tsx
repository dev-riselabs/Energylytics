import { useState } from "react";
import { Link } from "react-router";

function ForgetPassword() {
  const [step, setStep] = useState(1);

  function handleStepChange(step: number) {
    setStep(step);
  }
  return (
    <section className="bg-white flex-1 h-full w-full flex flex-col gap-6 md:gap-8 p-4 sm:p-6 md:p-4">
      <div className="flex justify-center">
        <img src="/logo.png" alt="" className="w-40 md:w-50 h-16 md:h-23 object-contain" />
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-10 pb-20">
          <div className="flex flex-col gap-3.5">
            <h1 className="text-lg text-slate80 font-semibold">
              Reset your password
            </h1>
            <p className="text-sm text-slate80">
              Type in your registered email address to rest password
            </p>
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
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleStepChange(2)}
              className="px-5 py-3 rounded-xl border border-green bg-green text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer"
            >
              Next
            </button>
            <Link
              to="/signin"
              className="px-5 py-3 flex items-center justify-center rounded-xl border border-green30 text-green text-sm font-bold font-dmSans hover:bg-green60 hover:text-white transition-all cursor-pointer"
            >
              Back to Login
            </Link>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-10 py-20">
          <div className="flex flex-col gap-3.5">
            <h1 className="text-lg text-slate80 font-semibold">
              Recovery Email Sent!
            </h1>
            <p className="text-sm text-slate80">
              Please check your email for next steps to rest your password.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <button
              onClick={() => handleStepChange(3)}
              className="px-5 py-3 rounded-xl border border-green bg-green text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer"
            >
              Contact Support
            </button>
            <Link
              to="/signin"
              className="px-5 py-3 flex items-center justify-center rounded-xl border border-green30 text-green text-sm font-bold font-dmSans hover:bg-green60 hover:text-white transition-all cursor-pointer"
            >
              Back to Login
            </Link>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-10 pb-20">
          <div className="flex flex-col gap-3.5">
            <h1 className="text-lg text-slate80 font-semibold">
              Reset your password
            </h1>
            <p className="text-sm text-slate80">
              Type in your registered email address to rest password
            </p>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 font-inter">
              <label htmlFor="" className="text-sm text-black100">
                Enter New Password
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
                Confirm New Password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="py-2 px-4 text-black border border-black100 rounded-md text-sm outline-none focus:border-green"
              />
            </div>
          </form>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleStepChange(2)}
              className="px-5 py-3 rounded-xl border border-green bg-green text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer"
            >
              Reset
            </button>
            <Link
              to="/signin"
              className="px-5 py-3 flex items-center justify-center rounded-xl border border-green30 text-green text-sm font-bold font-dmSans hover:bg-green60 hover:text-white transition-all cursor-pointer"
            >
              Back to Login
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default ForgetPassword;
