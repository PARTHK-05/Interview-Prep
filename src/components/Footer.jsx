import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-700 py-12"> {/* Gradient background */}
            <div className="container mx-auto px-4 text-white">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Responsive grid */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">InterviewPrep</h4> {/* Brand name as title */}
                        <p className="text-sm">Your one-stop solution for interview preparation.</p> {/* Short tagline */}
                        <div className="mt-4 flex space-x-4"> {/* Social media icons */}
                            <a href="#" className="hover:text-blue-300">
                                <i className="fab fa-twitter text-xl"></i> {/* Font Awesome icon */}
                            </a>
                            <a href="#" className="hover:text-blue-300">
                                <i className="fab fa-linkedin-in text-xl"></i> {/* Font Awesome icon */}
                            </a>
                            <a href="#" className="hover:text-blue-300">
                                <i className="fab fa-facebook-f text-xl"></i> {/* Font Awesome icon */}
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4> {/* More concise title */}
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-300">Features</a></li>
                            <li><a href="#" className="hover:text-blue-300">Testimonials</a></li>
                            <li><a href="#" className="hover:text-blue-300">Pricing</a></li> {/* Added a link */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-300">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-300">Guides</a></li>
                            <li><a href="#" className="hover:text-blue-300">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:info@interviewprep.com" className="hover:text-blue-300">info@interviewprep.com</a></li> {/* Email link */}
                            <li><a href="tel:+15551234567" className="hover:text-blue-300">+1 (555) 123-4567</a></li> {/* Phone link */}
                            <li><a href="#" className="hover:text-blue-300">Address</a></li> {/* Placeholder address */}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-blue-600 text-center text-sm"> {/* Added separator line */}
                    <p>&copy; {new Date().getFullYear()} InterviewPrep. All rights reserved.</p> {/* Dynamic year */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;