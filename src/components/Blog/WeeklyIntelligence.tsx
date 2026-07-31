function WeeklyIntelligence() {
  return <div className="flex flex-col gap-5 p-7.5 bg-slate rounded-2xl">
    <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-white ">Weekly Intelligence</h3>
        <p className="text-sm text-white">Get the latest African energy market analysis delivered directly to your inbox every Monday.</p>
    </div>
    <form action="" className="flex flex-col gap-4">
        <input type="email" name="" id="" placeholder="Your email address" className="bg-white border border-zinc text-sm p-3.5 rounded-xl font-sora text-green40 outline-none focus:border-green40"/>
        <button className="bg-green25 py-4 rounded-xl text-white font-dmSans text-sm font-bold border border-green25 hover:bg-white hover:text-green25 transition-all">Subscribe Now</button>

    </form>
  </div>;
}

export default WeeklyIntelligence;
