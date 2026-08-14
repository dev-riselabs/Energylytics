

function EnviromentalEducation() {
  return (
     <section className="bg-green60 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5">
      
      <div className="bg-white rounded-4xl px-10 py-15 flex flex-col gap-7 md:col-start-1 md:col-span-3 md:row-start-1 md:z-10 md:self-center">
        <h3 className="text-green25 text-2xl font-medium font-manrope">
          ENVIRONMENTAL EDUCATION
        </h3>

        <p className="text-xl text-slate">
          We work with schools, communities and local institutions to promote environmental awareness, responsible waste practices, recycling, climate action and sustainable resource management.
        </p>
      </div>
      <img
        src="/enviromental-education.jpg"
        alt=""
        className="rounded-4xl w-full md:col-start-3 md:col-span-3 md:row-start-1 md:h-104"
      />
    </section>
  )
}

export default EnviromentalEducation