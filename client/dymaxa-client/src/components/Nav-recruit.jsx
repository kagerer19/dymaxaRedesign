import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import {
    HomeIcon,
    InformationCircleIcon,
    BriefcaseIcon,
    UserPlusIcon,
    PhoneIcon
} from '@heroicons/react/24/outline'

const solutions = [
    { name: 'Recruitment Home', description: 'Get a better understanding of who we are', href: '/', icon: HomeIcon },
    { name: 'About', description: 'Learn about our solutions', href: '/AboutPage', icon: InformationCircleIcon },
    { name: 'Jobs', description: "Find Jobs that suit your profile", href: '/JobsPage', icon: BriefcaseIcon },
    { name: 'Candidates', description: 'See who we work with', href: '#', icon: UserPlusIcon },
    { name: 'Contact', description: 'Get in contact', href: '#', icon: PhoneIcon },
]

function NavRecruit() {
    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-700 outline-none">
                <span>Dymaxa Recruitment</span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute z-10 mt-5 flex w-screen" style={{ left: 'calc(50% - 230px)', width: "25rem" }}>
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {solutions.map((item) => (
                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#7bf1a8]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <a href={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default NavRecruit;
