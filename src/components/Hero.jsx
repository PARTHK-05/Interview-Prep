import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="relative w-full bg-gradient-to-r from-blue-100 to-blue-300 py-8 flex justify-center items-center overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center text-center md:text-left w-full">
                {/* Left Section */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }} 
                    className="w-full space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
                        🚀 Ace Your Next <span className="text-blue-700">Interview</span> with Confidence!
                    </h1>
                    <p className="text-lg text-gray-800 md:text-xl">
                        🎯 Master real-world questions, get AI-driven feedback, and land your dream job with ease! ✨
                    </p>
                    <Link to='/FileUploader'>
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }} 
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 flex items-center gap-2">
                            🚀 Get Started ➡️
                        </motion.button>
                    </Link>
                </motion.div>
                
                {/* Right Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-lg">
                    <div className="bg-white/60 backdrop-blur-lg shadow-2xl rounded-xl p-4 md:p-6">
                        <motion.img 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                            src="https://img.freepik.com/free-vector/interview-concept-illustration_114360-1678.jpg" 
                            alt="Interview Preparation" 
                            className="rounded-xl w-full h-auto shadow-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
