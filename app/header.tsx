'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, HospitalIcon as MedicalIcon, } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const NavLinks = () => (
        <>
            <Link
                href="/"
                className="text-sm font-medium hover:text-theme-blue block py-2 md:inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Home
            </Link>


            <Link
                href="/showcase"
                className="text-sm font-medium hover:text-theme-blue block py-2 md:inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Portfolio
            </Link>
            <Link
                href="/pricing"
                className="text-sm font-medium hover:text-theme-blue block py-2 md:inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Pricing
            </Link>
            <Link
                href="/case-studies"
                className="text-sm font-medium hover:text-theme-blue block py-2 md:inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Case Studies
            </Link>
            <Link
                href="/contact"
                className="text-sm font-medium hover:text-theme-blue block py-2 md:inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Contact
            </Link>
        </>
    )

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <a href="/">
                    <div className="flex items-center gap-2">
                        <MedicalIcon className="h-6 w-6 text-theme-blue" />
                        <span className="text-xl font-bold">MedicBuilds</span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLinks />
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden  flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMobileMenu}
                        className="text-theme-blue"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>

                {/* Contact Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        size="sm"
                        className="w-full text-theme-blue bg-white border border-theme-blue hover:bg-theme-blue/10"
                        asChild
                    >
                        <Link href="/contact">+1 (647) 633-6042 </Link>
                    </Button>
                    <Button size="sm" className="bg-theme-blue hover:bg-theme-blue/90" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-16 bg-white md:hidden z-20">
                    <div className="flex bg-white flex-col p-4 space-y-2">
                        <NavLinks />
                        <div className="pt-4 gap-4 flex flex-col">
                            <Button
                                size="sm"
                                className="w-full text-theme-blue bg-white border border-theme-blue hover:bg-theme-blue/10"
                                asChild
                            >
                                <Link href="/contact">+1 (647) 633-6042 </Link>
                            </Button>
                            <Button
                                size="sm"
                                className="w-full  bg-theme-blue hover:bg-theme-blue/90"
                                asChild
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>

                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}