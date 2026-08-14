import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router";

const navLinks = [
  {title : 'Explore', links : [
    {title : 'About Us', path: '/about'},
    {title : 'Our Focus Areas', path: ''},
    {title : 'Our Services', path: '/services'},
    {title : 'Our Solutions', path: '/solutions'},
    {title : 'Our Projects', path: ''},
    {title : 'Our Impact', path: '/social-impact'},
    {title : 'Insights', path: '/insights'},
  ]},
  {title : 'Work With US', links : [
    {title : 'Partnerships', path: '/partnerships'},
    {title : 'Government & Public Sector', path: ''},
    {title : 'Private Sector', path: ''},
    {title : 'Development Partners', path: ''},
    {title : 'Research & Academia', path: ''},
    {title : 'Technology Partners', path: ''},
    {title : 'Careers', path: ''},
  ]},
  {title : 'Our Work', links : [
    {title : 'Energy Intelligence', path: ''},
    {title : 'Clean & Renewable Energy', path: ''},
    {title : 'Climate & Environmental Intelligence', path: ''},
    {title : 'Circular Economy & Waste-to-Value', path: ''},
    {title : 'Sustainable Infrastructure', path: ''},
    {title : 'Policy & Market Intelligence', path: ''},
  ]},
  {title : 'Connect', links : [
    {title : 'Contact Us', path: '/contact-us'},
    {title : 'Media & Communications', path: ''},
    {title : 'Education & Advocacy', path: '/education-advocacy'},
    {title : 'Research & Insights', path: '/management-tool'},
  ]}
]

const footerLinks = [
  {
    label: "info@energylyticsafrica.com",
    href: "mailto:info@energylyticsafrica.com",
  },
  // {
  //   label: "energylyticsafrica.com",
  //   href: "https://energylyticsafrica.com",
  // },
  {
    label : 'Terms and Conditions',
    href : ''
  },
  {
    label : 'Privacy Policy',
    href : ''
  },
  {
    label : 'Accessibility Policy',
    href : ''
  },
];

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 divide-y-2 divide-zinc font-manrope bg-green35">
      <div className="flex flex-col gap-8 md:gap-10 pb-7">
      <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-center">
         <div className="flex flex-col gap-5">
          <img src="/logo.png" alt="" className="w-40 md:w-60 h-16 md:h-35 object-contain" />
          <h5>Have a challenge we're equipped to solve?</h5>
          <span className="text-sm sm:text-base text-slate50 md:max-w-[60ch] flex items-center gap-2">
            <a href="/contact-us"> Partner with Energylytics Africa</a> <FaArrowRight/>
            {/* Building the intelligence that powers Africa's renewable energy revolution through data, AI and education. */}
          </span>
          <span className="text-sm sm:text-base text-slate50">
            <span className="font-semibold">Headquarters:</span> Abuja, Nigeria
          </span>
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2">
          <p className="text-base sm:text-xl text-slate50">Get weekly updates on the newest projects and programms right in your mailbox.
</p>
          <button className="text-base sm:text-xl text-green cursor-pointer hover:text-green transition-all">Subscribe now!</button>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-col gap-2.5 flex-1">
              <label htmlFor="" className="text-slate text-base">Full Name <span className="text-red">*</span></label>
              <input type="text" name="" id="" placeholder="Hafsat Ndanusa" className="rounded-md border border-black/50 text-sm text-slate px-3 py-3 outline-none"/>
            </div>
            <div className="flex flex-col gap-2.5 flex-1">
              <label htmlFor="" className="text-slate text-base">Email Address <span className="text-red">*</span></label>
              <input type="email" name="" id="" placeholder="@gmail.com" className="rounded-md border border-black/50 text-sm text-slate px-3 py-3 outline-none"/>
            </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {
          navLinks.map(linkItem => <div key={linkItem.title} className="flex flex-col gap-4 md:gap-5">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-green25">{linkItem.title}</h4>
            <div className="flex flex-col gap-3 md:gap-4 list-disc">
              {
                linkItem.links.map(link => <Link key={link.title} to={link.path} className="text-sm sm:text-base text-slate hover:text-green25 transition-all font-light flex items-center gap-1.5"> <MdOutlineArrowRight className="w-6 h-6" />{link.title}</Link>)
              }

            </div>
          </div>)
        }
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5  items-center md:justify-between">
        <p className="text-sm sm:text-base text-slate50 text-center md:text-left md:col-span-1 xl:col-span-2">© 2026 Energylytics Africa Limited. All rights reserved.</p>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center md:col-span-2 xl:col-span-3">
          {
            footerLinks.map(link => <a key={link.label} href={link.href} className="text-sm underline text-green25 hover:text-green transition-all flex gap-1.5"><MdOutlineArrowRight className="w-6 h-6" /> {link.label}</a>)
          }
        </div>
      </div>
    </footer>
  );
}

export default Footer;
