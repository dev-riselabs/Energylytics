import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
    {question : 'Data Ingestion & Monitoring', answer : 'Connect SCADA systems, IoT sensors and weather APIs security. Our platform normalizes disparate data streams instantly for real-time visibility.'},
    {question : 'Data Ingestion & Monitoring', answer : 'Connect SCADA systems, IoT sensors and weather APIs security. Our platform normalizes disparate data streams instantly for real-time visibility.'},
    {question : 'Automated Optimization', answer : 'Connect SCADA systems, IoT sensors and weather APIs security. Our platform normalizes disparate data streams instantly for real-time visibility.'},
]

function SmartManagement() {
    const [activeFaq, setActiveFaq] = useState <number | null >(1)

    function handleActiveFaqChange(id: number){
        setActiveFaq(prev => prev === id ? null : id)
    }
  return (
    <section className="bg-white px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
      <div className="flex flex-col gap-5 md:gap-6.5 justify-center">
        <h2 className="text-xl sm:text-2xl font-medium text-slate ">
          From raw data to <span className="text-green25">Smart Management</span>
        </h2>
        <div className="flex flex-col gap-4">
            {
                faqs.map(({question, answer}, i) => <div key={question} className="bg-zinc600 border border-green25 p-5 sm:p-7.5 flex gap-3 sm:gap-3.5 rounded-2xl">
                    <div className={`${activeFaq === i + 1 ? 'bg-green200 text-green25' : 'border border-zinc text-slate50'} w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0`}>{i + 1}</div>
                    <div className="flex flex-col gap-4 md:gap-6 flex-1">
                        <div className="flex items-center justify-between gap-3">

                            <h5 className="text-sm sm:text-base font-bold text-slate">{question}</h5>
                            <button onClick={()=> handleActiveFaqChange(i + 1)} className={`${activeFaq === i + 1 ? 'rotate-180' : ''} cursor-pointer shrink-0`}><MdKeyboardArrowDown className="w-4 h-4" /></button>
                        </div>

                        {activeFaq === i + 1 && <p className="text-xs sm:text-sm text-slate50">{answer}</p>}
                    </div>

                </div>)
            }

        </div>
      </div>
      <img
        src="/raw-data.png"
        alt=""
        className="rounded-3xl h-64 sm:h-80 md:h-auto min-h-0 md:min-h-80 w-full object-cover sm:object-fill"
      />
    </section>
  );
}

export default SmartManagement;
