'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, } from '@/components/ui/navigation-menu';

export default function Navbar() {
    return (
        <nav className="w-full fixed px-6 py-4 shadow-sm bg-white border-b flex justify-between items-center z-10">
            <div className='flex gap-5'>
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-[#14A29A]">
                    <Image
                        src="/svg/colored-logo.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        className="scale-80 md:scale-100"
                    />
                </Link>
                {/* Navigation Links */}
                <div className='border border-gray-400 rounded-lg overflow-hidden text-gray-600'>
                    <NavigationMenu>
                        <NavigationMenuList className="hidden md:flex">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="flex justify-center items-center border-r border-gray-400 hover:text-gray-600 rounded-none">
                                        Invite Users
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className="flex justify-center items-center border-r border-gray-400 hover:text-gray-600 rounded-none">
                                        Manage Users
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className="flex justify-center items-center border-r border-gray-400 hover:text-gray-600 rounded-none">
                                        payable Report
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className="flex justify-center items-center border-gray-400 hover:text-gray-600 rounded-none">
                                        Driver Report
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

            <div className='flex w-1/4 justify-around items-center gap-2'>
                <div className='flex justify-between items-center w-[30%] '>
                    <Image
                        src="./svg/email.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        className="scale-80 "
                    />
                    <Image
                        src="./svg/notification.svg"
                        alt="logo"
                        width={33}
                        height={33}
                        className="scale-80 "
                    />
                    <Image
                        src="./svg/status.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        className="scale-80 "
                    />
                </div>
                <div className='border h-5 border-gray-400'></div>
                <div className='flex items-center justify-around w-[60%] '>
                    <Image
                        src=""
                        alt="logo"
                        width={30}
                        height={30}
                        className="scale-80 md:scale-100 border rounded bg-gray-400" />
                    <div className=' w-3/5'>
                        <p className='text-sm text-black font-medium'>User Name</p>
                        <p className='text-xs text-gray-700 '>Designation</p>
                    </div>
                    <button className='text-xl transfrom rotate-90' >&gt;</button>
                </div>
            </div>
        </nav>
    );
}
