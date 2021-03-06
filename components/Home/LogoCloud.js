import Image from 'next/image';

export default function LogoCloud() {
    const companies = [
        {
            name: 'Metamask',
            logo: '/logos/metamask.png',
        },
        {
            name: 'Polygon',
            logo: '/logos/polygon.webp',
        },
        {
            name: 'Etherscan',
            logo: '/logos/etherscan.svg',
        },
        {
            name: 'Open Sea',
            logo: '/logos/open-sea.png',
        },
        {
            name: 'Uniswap',
            logo: '/logos/uniswap.png',
        },
        {
            name: 'Curve Finance',
            logo: '/logos/curvefi.svg',
        },
    ]

    return (
        <div className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                    Web3 Protocols and Projects you will learn about
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
                    {companies.map((company, index) => (
                        <div key={index} className="col-span-1 flex justify-center py-8 px-8 bg-white">
                            <Image
                                className="max-h-12 object-contain"
                                width={300}
                                height={100}
                                src={company.logo}
                                alt={company.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
