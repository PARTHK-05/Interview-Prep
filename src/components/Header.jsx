import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600"> {/* Use Link for home */}
                    InterviewPrep
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <a href="#features" className="text-gray-600 hover:text-blue-600">
                        Features
                    </a>
                    <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
                        Testimonials
                    </a>
                    <Link to="/profile" className="text-gray-600 hover:text-blue-600"> {/* Link to profile */}
                        Account
                    </Link>
                </nav>
                <button className="md:hidden">
                    <Menu className="h-6 w-6 text-gray-600" />
                </button>
            </div>
        </header>
    );
}

export default Header;


