import React from 'react'

const HeroSection = () => {
    return (

        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">

                {/* background clr */}
                <div
                    className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    >
                    </div>

                </div>


                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28">
                    <div className="text-center">

                        {/* main heading */}
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Unlock Extraordinary Discover Your Perfect Find Today!</h1>

                        {/* description  */}
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aperiam facere praesentium molestiae debitis rerum ratione consequatur iure culpa!
                        </p>

                        {/* btn get started */}
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href='#home-page'
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection