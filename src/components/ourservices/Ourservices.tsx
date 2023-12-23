import { UsersIcon } from '@heroicons/react/outline';
import { TrashIcon } from '@heroicons/react/outline';
import { InboxIcon } from '@heroicons/react/outline';
import React from 'react'

const features = [
    {
        name: "Brand Shoot",
        description: "Transforming brands into compelling stories is our forte. Our expert team crafts visually stunning brand shoots that resonate, leaving a lasting impression on your audience.",
        icon: InboxIcon,
    },
    {
        name: "Reels",
        description: "In a fast-paced world, attention is fleeting. Our team excels in crafting engaging and dynamic Instagram reels that stop the scroll and keep your audience hooked.",
        icon: UsersIcon,
    },
    {
        name: "Influencer Marketing",
        description: "We believe in the power of partnerships. Our strategic influencer marketing connects your brand with the right voices, ensuring authentic storytelling that resonates with your audience.",
        icon: TrashIcon,
    },
];
const Ourservices = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">Our Services</h2>
                    <p className="mt-4 text-lg text-purple-200">Discover a spectrum of creative brilliance with our tailored services at Snap&Shine Media. From mesmerizing brand shoots to engaging Instagram reels and impactful influencer marketing, we craft content that elevates your brand's story, resonates with your audience, and leaves a lasting impression.</p>
                    <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                        <div key={feature.name}>
                            <div>
                                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                <p className="mt-2 text-base text-purple-200">{feature.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourservices