import Link from 'next/link'
import React from 'react'

interface NavLink {
    href: string;
    label: string;
    className?: string;
};

interface HeaderProps {
    title?: string;
    links?: NavLink[];
    className?: string;
}
const Header = ({ title = '', className, links = [] }: HeaderProps) => {
    return (
        <header className={className}>
            <h1 className='text-lg font-bold'>{title}</h1>
            <nav>
                <ul className="flex space-x-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={link.className}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul >
            </nav >
        </header >
    );
};

export default Header;
