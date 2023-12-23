import React from 'react'

const metrics = [
    { id: 1, stat: "Quality meets Affordability", emphasis: "We", rest: "offer top-notch content creation without breaking the bank." },
    { id: 2, stat: "Tailored Solutions", emphasis: "Every project is unique.", rest: "We customize our services to align with your brand's voice and vision" },
    { id: 3, stat: "Direct Collaboration", emphasis: "Your satisfaction is our priority.", rest: "We work closely with you, ensuring your ideas are brought to life seamlessly" },
  ];
const Whyus = () => {
  return (
    <>
    <div className="relative bg-gray-900">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Valuable Metrics</span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">Why Snap&Shine Media</p>
              <p className="mt-5 text-lg text-gray-300">Choose Snap&Shine Media for a fusion of creativity and affordability. We bring your vision to life through direct collaboration, ensuring every project shines with excellence. With us, experience content creation that not only meets but exceeds your expectations, illuminating your brand's journey in the digital world.</p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">{item.stat}</span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div></>
  )
}

export default Whyus