import Link from 'next/link'
import React from 'react'

interface NavLink {
    href: string;
    label: string;
    className?: string;
};
interface SidebarProps {
    title?: string;
    links?: NavLink[];
    className?: string;
}
const Sidebar = ({ title = '', className, links = [] }: SidebarProps) => {
    return (
        <aside className={className}>
            <h2 className="text-lg font-bold">{title}</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            className={link.className}
                            href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
