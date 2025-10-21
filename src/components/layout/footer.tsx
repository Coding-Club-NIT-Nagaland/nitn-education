// src/components/layout/footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Twitter,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Heart,
    ExternalLink,
    GraduationCap,
    Users,
    BookOpen,
    Send,
    Sparkles,
    ArrowRight,
    Star,
    ChevronRight,
} from "lucide-react";

export function Footer() {
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Clubs", href: "/clubs" },
        { name: "Roadmaps", href: "/roadmaps" },
        { name: "Resources", href: "/resources" },
        { name: "Events", href: "/events" },
    ];

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Help Center", href: "/help" },
        { name: "Community Guidelines", href: "/guidelines" },
    ];

    const resources = [
        { name: "API Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
    ];

    const legal = [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR Compliance", href: "/gdpr" },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 mt-auto overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[bottom_1px_center] opacity-40" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl" />

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="border-b border-border/40 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10">
                    <div className="container px-4 md:px-6 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 mb-8">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Stay Updated</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Join Our Learning Community
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Get weekly insights, exclusive resources, and updates on new learning paths delivered straight to your inbox.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <Input
                                    placeholder="Enter your email address"
                                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500/50 focus:ring-blue-500/20"
                                />
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                                    Subscribe
                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="container px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20">
                                    <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                    Education Channel
                                </span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                Empowering learners worldwide through innovative educational resources, collaborative clubs, and comprehensive roadmaps.
                                Join our community of passionate educators and learners.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30">
                                    <Users className="h-5 w-5 text-blue-500" />
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">10K+</p>
                                        <p className="text-xs text-muted-foreground">Students</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30">
                                    <BookOpen className="h-5 w-5 text-purple-500" />
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">500+</p>
                                        <p className="text-xs text-muted-foreground">Resources</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-blue-500" />
                                Platform
                            </h3>
                            <nav className="space-y-3">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                                <ExternalLink className="h-4 w-4 text-purple-500" />
                                Quick Links
                            </h3>
                            <nav className="space-y-3">
                                {quickLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Resources */}
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-green-500" />
                                Resources
                            </h3>
                            <nav className="space-y-3">
                                {resources.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                                <Mail className="h-4 w-4 text-indigo-500" />
                                Get in Touch
                            </h3>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                                    <span className="leading-relaxed">123 Education Street<br />Learning City, LC 12345</span>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-200">
                                    <Phone className="h-4 w-4 flex-shrink-0 text-green-500" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-colors duration-200">
                                    <Mail className="h-4 w-4 flex-shrink-0 text-purple-500" />
                                    <span>hello@educationchannel.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-border/40 mt-16 pt-8">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                            {/* Copyright */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                                <p className="flex items-center gap-2">
                                    © {new Date().getFullYear()} Education Channel. Made with
                                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                                    for learners everywhere.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center space-x-3">
                                <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
                                <Link
                                    href="https://twitter.com/educationchannel"
                                    className="p-2 rounded-lg bg-white/60 hover:bg-blue-50 dark:bg-gray-800/60 dark:hover:bg-blue-900/20 text-muted-foreground hover:text-blue-500 transition-all duration-300 hover:scale-110"
                                    aria-label="Follow us on Twitter"
                                >
                                    <Twitter className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="https://github.com/educationchannel"
                                    className="p-2 rounded-lg bg-white/60 hover:bg-gray-50 dark:bg-gray-800/60 dark:hover:bg-gray-900/20 text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label="View our GitHub"
                                >
                                    <Github className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="https://linkedin.com/company/educationchannel"
                                    className="p-2 rounded-lg bg-white/60 hover:bg-blue-50 dark:bg-gray-800/60 dark:hover:bg-blue-900/20 text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110"
                                    aria-label="Connect on LinkedIn"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="mailto:hello@educationchannel.com"
                                    className="p-2 rounded-lg bg-white/60 hover:bg-red-50 dark:bg-gray-800/60 dark:hover:bg-red-900/20 text-muted-foreground hover:text-red-500 transition-all duration-300 hover:scale-110"
                                    aria-label="Send us an email"
                                >
                                    <Mail className="h-4 w-4" />
                                </Link>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                                {legal.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="hover:text-foreground transition-colors duration-200 hover:translate-y-[-1px]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}