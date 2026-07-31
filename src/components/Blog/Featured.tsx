function Featured() {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-68 relative w-full">
        <img
          src="/featured.jpg"
          alt=""
          className="w-full h-full rounded-2xl object-cover object-center"
        />
        <span className="w-54 absolute top-4 left-4 py-2 rounded-md bg-green85 flex items-center justify-center text-white font-bold text-xs">
          FEATURED ANALYSIS
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-6.5 text-slate200 font-sora font-light text-sm">
            <span>Solar PV</span>
            <span>Oct 24, 2025</span>
            <span>8 min read</span>
        </div>
        <div className="flex flex-col gap-7">
            <h4 className="text-2xl font-bold text-slate">The Rise of Off-Grid Solar in West Africa: A 2025 Outlook</h4>
            <p className="text-sm text-slate">Discover how decentralized solar solutions are transforming rural electrification and empowering local economics across the region, defying traditional grid limitations.</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
