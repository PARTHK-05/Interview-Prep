import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Parth Khandelwal",
    role: "Software Engineer",
    content:
      "“InterviewPrep helped me land my dream job at a top tech company. The mock interviews were incredibly realistic! 🤩”",
    image:
      "https://www.w3schools.com/howto/img_avatar.png", // Placeholder profile image
  },
  {
    name: "Vedang Kulkarni",
    role: "Marketing Manager",
    content:
      "“I was amazed by the quality of the feedback I received. It really helped me improve my interview skills. 🙌”",
    image:
      "https://www.w3schools.com/howto/img_avatar.png", // Placeholder profile image
  },
  {
    name: "Ritwik Kumbhalkar",
    role: "Data Scientist",
    content:
      "“The extensive question bank covered everything I needed to know for my interviews. Highly recommended! 👍”",
    image:
      "https://www.w3schools.com/howto/img_avatar.png", // Placeholder profile image
  },
];

function TestimonialSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          What Our Users Say ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500 mr-4"
                />
                <div>
                  <p className="font-semibold text-blue-700">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
