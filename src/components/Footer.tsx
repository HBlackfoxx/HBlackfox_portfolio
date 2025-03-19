import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

interface SocialLink {
    Icon: React.ElementType;
    link: string;
    label: string;
}

const RearrangedCompactFooter: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const socialLinks: SocialLink[] = [
        { Icon: Github, link: 'https://github.com/Eljakani', label: 'GitHub' },
        { Icon: Linkedin, link: 'https://linkedin.com/in/eljakaniyassine', label: 'LinkedIn' },
        { Icon: Twitter, link: 'https://x.com/eljakaniyassin', label: 'Twitter' },
    ];

    return (
        <footer className="bg-background border py-6 px-3 border-b-0 rounded-t-2xl">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col items-center md:items-start">
                        <a href="/"> <h2 className="text-2xl font-bold font-alt mb-2">Boukri<span className="text-point">.</span></h2></a>
                        <p className="text-sm text-center md:text-start text-muted-foreground">Bridging the gap between &lt;dev/&gt; and security.</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex space-x-4 mb-2">
                            {socialLinks.map(({ Icon, link, label }) => (
                                <motion.a
                                    key={label}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center justify-center md:justify-end">
                                <Mail size={14} className="mr-1" />
                                <a href="mailto:hamada.cero@gmail.com">hamada.cero@gmail.com</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-end">
                                <Phone size={14} className="mr-1" />
                                <a href="tel:+212672486817">+212 6 72 48 68 17</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-muted-foreground mt-4 font-alt">
                    &copy; {new Date().getFullYear()} Mohamed Boukri. All rights reserved.
                </div>
            </div>

            <motion.button
                className="fixed bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-lg"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </motion.button>
        </footer>
    );
};

export default RearrangedCompactFooter;