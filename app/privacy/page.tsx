
import Link from "next/link";
import { Header } from "../header";
import PrivacyPolicy from "./pp";




export default function Home() {
    return (
        <div>
            <Header />
            <PrivacyPolicy />
            <footer className="w-full bg-gradient-to-r from-theme-blue/10 to-theme-purple/10 border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex items-center gap-4">
                        {/* <Tooth className="h-6 w-6 text-theme-blue" /> */}
                        <div className="flex flex-col">
                            <p className="text-sm font-bold text-theme-blue">MedicBuilds</p>
                            <p className="text-xs text-muted-foreground">© 2025 All rights reserved</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm font-medium text-theme-purple hover:text-theme-purple/80 transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm font-medium text-theme-purple hover:text-theme-purple/80 transition-colors duration-300"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 bg-theme-blue text-white rounded-full text-sm font-medium hover:bg-theme-blue/90 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </footer>

        </div>
    );
}
