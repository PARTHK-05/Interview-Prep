import { BookOpen, Users, Target } from "lucide-react"

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: "Extensive Question Bank",
    description: "Access thousands of interview questions across various industries and job roles.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Mock Interviews",
    description: "Practice with AI-powered mock interviews to build your confidence.",
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Personalized Feedback",
    description: "Receive detailed feedback and tips to improve your interview performance.",
  },
]

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

