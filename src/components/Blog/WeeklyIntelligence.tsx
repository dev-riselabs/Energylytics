function WeeklyIntelligence() {
  return <div className="flex flex-col gap-5 p-5 lg:p-7.5 bg-slate rounded-2xl">
    <div className="flex flex-col gap-4">
        {/* <h3 className="text-cl sm:text-2xl font-bold text-white ">Weekly Intelligence</h3> */}
        <h3 className="text-cl sm:text-2xl font-bold text-white ">Stay Ahead of the Energy Transition</h3>
        <p className="text-sm text-white">Receive Energylytics insights on clean energy, AI, climate, waste-to-value, sustainability and Africa's evolving energy landscape.</p>
    </div>
    <form action="" className="flex flex-col gap-4">
        <input type="email" name="" id="" placeholder="Your email address" className="bg-white border border-zinc text-sm p-3.5 rounded-xl font-sora text-green40 outline-none focus:border-green40"/>
        <button className="bg-green25 py-3 sm:py-4 rounded-xl text-white font-dmSans text-sm font-bold border border-green25 hover:bg-white hover:text-green25 transition-all">Subscribe Now</button>

    </form>
  </div>;
}

export default WeeklyIntelligence;
