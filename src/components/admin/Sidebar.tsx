"use client";

import { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    PlusCircle,
    Home,
    Menu,
    X
} from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "All Posts", icon: FileText, href: "/admin/blog" },
    { label: "Add Blog", icon: PlusCircle, href: "/admin/blog/new" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile menu toggle button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 focus:outline-none"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Backdrop overlay for mobile */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`w-64 bg-white border-r border-gray-100 flex flex-col fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold italic">
                        N
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Admin Panel
                    </h2>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                                    ? "bg-orange-50 text-orange-600 border border-orange-100 shadow-sm shadow-orange-50"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:scale-[1.02]"
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? "text-orange-600" : "text-gray-400"}`} />
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100 space-y-2">
                    <a
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-all"
                    >
                        <Home className="w-5 h-5 text-gray-400" />
                        Back to Site
                    </a>
                    <button
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all group"
                    >
                        <LogOut className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}
