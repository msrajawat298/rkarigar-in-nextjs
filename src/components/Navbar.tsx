import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar fixed top-0 left-0 z-50 bg-slate-950 text-white ">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-black dark:text-white rounded-box w-52">
                    <li><Link href={"/"}>Item 1</Link></li>
                    <li>
                        <Link href={"/"}>Parent</Link>
                        <ul className="p-2">
                            <li><Link href={"/"}>Submenu 1</Link></li>
                            <li><Link href={"/"}>Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li><Link href={"/"}>Item 3</Link></li>
                </ul>
            </div>
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">LocalPro</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu   menu-horizontal px-1">
                <li><Link href={"/admin/dashboard"}>Dashboard</Link></li>
                <li tabIndex={0}>
                    <details>
                        <summary>Parent</summary>
                        <ul className="p-2 text-black dark:text-white">
                            <li><Link href={"/"}>Submenu 1</Link></li>
                            <li><Link href={"/"}>Submenu 2</Link></li>
                        </ul>
                    </details>
                </li>
                <li><Link href={"/"}>Item 3</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link href={"/auth/login"} className="btn dark:text-white">Login</Link>
        </div>
    </div>
    )
}
