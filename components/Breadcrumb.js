import {
    ArrowNarrowLeftIcon,
    HomeIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ThumbUpIcon,
    UserIcon,
} from '@heroicons/react/solid'

const breadcrumbs = [
    { name: 'Jobs', href: '#', current: false },
    { name: 'Front End Developer', href: '#', current: false },
    { name: 'Applicants', href: '#', current: true },
  ]

export default function Breadcrumb() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-t border-gray-200 py-3">
                <nav className="flex" aria-label="Breadcrumb">
                    <div className="flex sm:hidden">
                        <a
                            href="#"
                            className="group inline-flex space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                            <ArrowNarrowLeftIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-600"
                                aria-hidden="true"
                            />
                            <span>Back to Applicants</span>
                        </a>
                    </div>
                    <div className="hidden sm:block">
                        <ol role="list" className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <a href="#" className="text-gray-400 hover:text-gray-500">
                                        <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                        <span className="sr-only">Home</span>
                                    </a>
                                </div>
                            </li>
                            {breadcrumbs.map((item) => (
                                <li key={item.name}>
                                    <div className="flex items-center">
                                        <svg
                                            className="flex-shrink-0 h-5 w-5 text-gray-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                        </svg>
                                        <a
                                            href={item.href}
                                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </nav>
            </div>
        </div>
    )
}
