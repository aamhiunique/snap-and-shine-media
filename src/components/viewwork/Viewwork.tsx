import React from 'react'
import Imgcarousel from '../imgCarousel/Imgcarousel'
const posts = [
    {
        title: 'Brand Shoot',
        href: '#',
        category: { name: 'Photo Shoot', href: '#' },
        description: 'Embark on a visual journey through our expertly curated brand shoots. Witness how we transform ordinary items into captivating stories. Each image is meticulously crafted, capturing the essence of your brand and translating it into visual brilliance that resonates with your audience.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'View More',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'Instagram Reels',
        href: '#',
        category: { name: 'Reels', href: '#' },
        description: "Experience the power of storytelling in seconds. Our reel creations are more than just videos—they're magnetic narratives that stop the scroll. Dive into our collection of engaging reels, where every frame speaks volumes, amplifying your brand's message and leaving a lasting impression.",
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
        author: {
            name: 'View More',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'Influencer Marketing',
        href: '#',
        category: { name: 'Photo Shoot / Reels', href: '#' },
        description: 'Discover the impact of authentic storytelling through our influencer marketing campaigns. Explore collaborations that transcend endorsements, diving into genuine connections with influential voices. Witness firsthand how these partnerships illuminate your brand, fostering trust and engagement within your audience.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        author: {
            name: 'View More',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]
const Viewwork = () => {
    return (
        <>
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Gallery of Brilliance</h2>
          <p className="mt-3 max-w-7xl mx-auto text-xl text-gray-500 sm:mt-4">
          Step into our world of creativity and excellence. Explore a showcase of our work—a testament to our dedication in crafting captivating visuals and impactful campaigns. Let our portfolio speak for itself as we illuminate brands and stories through our innovative content.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Imgcarousel/>
                
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    )
}

export default Viewwork