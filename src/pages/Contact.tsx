import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa"
import { HiEnvelope } from "react-icons/hi2"
import { IoLocationSharp } from "react-icons/io5"
import { MdPhoneInTalk } from "react-icons/md"


const subjects = [
  "General Inquiry",
  "Partnership & Collaboration",
  "Energy Solutions & Services",
  "Research & Consultation",
];

function Contact() {
  return (
   <>
   <section className='bg-green65 py-15 pb-0 px-5 sm:px-7 md:px-15 grid grid-col md:grid-cols-2 gap-6 md:gap-7'>
    <h1 className='text-slate font-bold text-[32px] font-manrope md:self-center'>Contact Us</h1>
    <img src="/contact-us.png" alt="" className='w-full h-60 object-contain'/>
   </section>
   <section className="bg-green60 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
    <div className="bg-black400 rounded-xl p-7 sm:p-10 flex flex-col justify-between h-120 sm:h-150 md:col-span-2 md:self-center">
        <div className="flex flex-col gap-3 font-manrope ">
            <h2 className="text-2xl sm:text-[28px] text-white font-semibold">Contact Information</h2>
            <p className="text-lg text-zinc50">Say something to start a live chat!</p>
        </div>
        <div className="flex flex-col gap-10 font-manrope">
            <div className="flex items-center gap-3">
                <MdPhoneInTalk className="w-5 h-5 text-white" />
                <span className="text-base text-white">+1012 3456 789</span>
            </div>
            <div className="flex items-center gap-3">
                <HiEnvelope className="w-5 h-5 text-white" />
                <a href="mailto:info@energylyticsafrica.com" className="text-base text-white underline">info@energylyticsafrica.com</a>
            </div>
            <div className="flex items-center gap-3">
                <IoLocationSharp className="w-5 h-5 text-white" />
                <span className="text-base text-white">Abuja, Nigeria.</span>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <div className="w-7.5 h-7.5 rounded-full flex justify-center items-center bg-yellow text-white hover:bg-white hover:text-black100 transition-all"><FaTwitter className="w-5 h-5" /></div>
             <div className="w-7.5 h-7.5 rounded-full flex justify-center items-center bg-yellow text-white hover:bg-white hover:text-black100 transition-all"><FaInstagram className="w-5 h-5" /></div>
              <div className="w-7.5 h-7.5 rounded-full flex justify-center items-center bg-yellow text-white hover:bg-white hover:text-black100 transition-all"><FaDiscord className="w-5 h-5" /></div>
        </div>
    </div>

    <div className="px-7 sm:px-7.5 py-12.5 flex bg-white flex-col gap-7 md:col-span-3 rounded-4xl">
        <div className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-[32px] font-manrope text-green25 font-bold">Get in Touch with Us</h2>
            <p className="text-lg sm:text-xl text-slate">We’re here to assist you.</p>
        </div>
        <form action="" className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                <div className="flex flex-col gap-2.5 font-manrope">
                    <label htmlFor="" className="text-base text-slate"> First Name <span className="text-red">*</span></label>
                    <input type="text" name="" id="" placeholder="John" className="text-sm text-zinc50 border border-black/25 rounded-2xl p-4 outline-none focus:border-green25"/>
                </div>
                <div className="flex flex-col gap-2.5 font-manrope">
                    <label htmlFor="" className="text-base text-slate"> Last Name  <span className="text-red">*</span></label>
                    <input type="text" name="" id="" placeholder="Doe" className="text-sm text-zinc50 border border-black/25 rounded-2xl p-4 outline-none focus:border-green25"/>
                </div>
                <div className="flex flex-col gap-2.5 font-manrope">
                    <label htmlFor="" className="text-base text-slate"> Email Address  <span className="text-red">*</span></label>
                    <input type="text" name="" id="" placeholder="johndoe@gmail.com" className="text-sm text-zinc50 border border-black/25 rounded-2xl p-4 outline-none focus:border-green25"/>
                </div>
                <div className="flex flex-col gap-2.5 font-manrope">
                    <label htmlFor="" className="text-base text-slate">Phone Number  <span className="text-red">*</span></label>
                    <input type="text" name="" id="" placeholder="+234 80 000 0000" className="text-sm text-zinc50 border border-black/25 rounded-2xl p-4 outline-none focus:border-green25"/>
                </div>
                <div className="flex flex-col gap-4 md:col-span-2 font-manrope">
                    <label htmlFor="" className="text-black400 text-base font-bold ">Select Subject?</label>
                    <div className="flex justify-between items-center flex-wrap gap-3">
                        {
                            subjects.map(subject => <label key={subject} className="flex items-center-safe gap-2 text-[10px] text-black400"><input type="radio" name="subjects" id="" className="accent-black400"/>{subject}</label>)
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 font-manrope md:col-span-2">
                    <label htmlFor="" className="text-base text-slate">Message   <span className="text-red">*</span></label>
                    <textarea name="" id="" placeholder="Write your message..." className="text-sm text-zinc50 h-30 resize-none border border-black/25 rounded-2xl p-4 outline-none focus:border-green25"/>
                </div>
            </div>
            <button className="bg-green25 cursor-pointer text-white font-semibold text-base font-manrope py-2 rounded-lg w-full border bordr-green25 hover:bg-transparent hover:text-green25 transition-all">Submit</button>
        </form>
    </div>

   </section>
   </>
  )
}

export default Contact