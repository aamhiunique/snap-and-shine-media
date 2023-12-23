import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import serviceOne from "../../assets/services/1.png";
import serviceTwo from "../../assets/services/2.png";
import serviceThree from "../../assets/services/3.png";
import Imgcarousel from "../imgCarousel/Imgcarousel";

const tabs = [
  {
    name: "Product Shoot",
    features: [
      {
        name: "Product Shoot",
        description: "Transforming Products into Stories! Captivating, high-quality product shoots that turn your items into captivating tales, ready to mesmerize your audience.",
        imageSrc: serviceOne,
        imageAlt: "Transforming Products into Stories! Captivating, high-quality product shoots that turn your items into captivating tales, ready to mesmerize your audience.",
      },
    ],
  },
  {
    name: "Reels/Short",
    features: [
      {
        name: "Instagram Reels",
        description: "Revolutionize Your Presence! Crafting magnetic Instagram reels that captivate, engage, and elevate your brand's storytelling game in seconds.",
        imageSrc: serviceTwo,
        imageAlt: "Revolutionize Your Presence! Crafting magnetic Instagram reels that captivate, engage, and elevate your brand's storytelling game in seconds.",
      },
    ],
  },
  {
    name: "Influencer Marketing",
    features: [
      {
        name: "Influencer Marketing",
        description: "Powerful Partnerships, Amplified Impact! Unlock the potential of your brand through strategic influencer marketing. Let influential voices tell your story and connect authentically with your audience.",
        imageSrc: serviceThree,
        imageAlt: "Powerful Partnerships, Amplified Impact! Unlock the potential of your brand through strategic influencer marketing. Let influential voices tell your story and connect authentically with your audience.",
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8">
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-gray-500">Unleash Your Brand's Charm! Elevate with captivating product shoots, engaging Instagram reels, and influential marketing. Let your brand stand out and captivate your audience effortlessly!</p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab key={tab.name} className={({ selected }) => classNames(selected ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "whitespace-nowrap py-6 border-b-2 font-medium text-sm")}>
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:mt-0 lg:col-span-5">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                          <Imgcarousel/>
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}
