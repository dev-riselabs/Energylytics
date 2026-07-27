function SignIn() {
  return <section className="bg-white flex-1 h-full w-full flex flex-col gap-8 p-4">
    <div className="flex flex-col gap-6 items-center">
        <img src="/logo.png" alt="" className="w-50 h-23 object-cover"/>
        <h1 className="text-4xl font-prata text-black">Welcome Back</h1>
    </div>
    <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 font-inter">
            <label htmlFor="" className="text-sm text-black100">Enter Email Address</label>
            <input type="email" name="" id="" />
        </div>

    </form>

  </section>;
}

export default SignIn;
