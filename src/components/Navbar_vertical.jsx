'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, } from '@/components/ui/navigation-menu';

//imported dependencies
import home from '..../public/svg/home.svg'

export default function Navbar_vertical() {
    return (
        <nav className="h-screen w-fit sticky px-6 shadow-sm bg-white border-r flex flex-col items-center py-25">
            <div>
                <button className='flex flex-col justify-center items-center'>
                    <Icon className="w-6 h-6 fill-current text-gray-600 hover:text-[#14A29A]" />
                    <p></p>
                </button>
            </div>
        </nav>
    );
}
