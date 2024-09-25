import React, { useState } from 'react';
import { Cpu, Database, Brain, Users, BookOpen, Award, ChevronDown, MessageSquare, BarChart2, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="p-6 bg-gray-50">{children}</div>}
    </div>
  );
};

const SkunkworksAcademyOverview = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Skunkworks Academy</h1>
        <p className="text-xl text-gray-600">Next-Gen AI-Powered Learning Platform</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Rich User Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={BookOpen}
            title="Personalized Learning Paths"
            description="AI-driven course recommendations and adaptive learning experiences tailored to each student's pace and style."
          />
          <FeatureCard
            icon={Users}
            title="Interactive Collaboration"
            description="Real-time study groups, shared whiteboards, and peer-to-peer learning opportunities to enhance engagement."
          />
          <FeatureCard
            icon={Brain}
            title="AI Study Assistant"
            description="24/7 intelligent chatbot support for instant answers to questions and personalized study tips."
          />
          <FeatureCard
            icon={Award}
            title="Gamified Progress"
            description="Achievement badges, leaderboards, and rewards to motivate and celebrate learning milestones."
          />
          <FeatureCard
            icon={BarChart2}
            title="Comprehensive Analytics"
            description="Detailed insights into learning progress, strengths, and areas for improvement with visual dashboards."
          />
          <FeatureCard
            icon={Zap}
            title="Hands-On Labs"
            description="Virtual lab environments for practical, risk-free experience with real-world IT scenarios and tools."
          />
        </div>
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <Cpu className="w-16 h-16 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold">Frontend</h3>
            <ul className="mt-2 text-gray-600">
              <li>React Native Web</li>
              <li>IBM Carbon Design</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="text-center">
            <Database className="w-16 h-16 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold">Backend</h3>
            <ul className="mt-2 text-gray-600">
              <li>Node.js & Express</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="text-center">
            <Brain className="w-16 h-16 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold">AI/ML</h3>
            <ul className="mt-2 text-gray-600">
              <li>TensorFlow.js</li>
              <li>NLP</li>
              <li>IBM Watson</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">User Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          <div className="relative z-10">
            {[
              { title: "Sign Up", description: "Quick and easy registration with social login options" },
              { title: "Skill Assessment", description: "AI-powered evaluation to determine the best starting point" },
              { title: "Personalized Dashboard", description: "Custom learning path and progress tracking" },
              { title: "Interactive Lessons", description: "Engaging multimedia content and hands-on exercises" },
              { title: "Practice Tests", description: "Simulated exams with detailed performance analysis" },
              { title: "Certification", description: "Achieve your CompTIA certification goals" }
            ].map((step, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Key Features Deep Dive</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <AccordionItem title="AI-Powered Personalization">
            <ul className="list-disc pl-6 space-y-2">
              <li>Machine learning algorithms analyze learning patterns and preferences</li>
              <li>Dynamic content difficulty adjustment based on performance</li>
              <li>Predictive analytics for exam readiness assessment</li>
              <li>Personalized study schedules and reminders</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Interactive Learning Environments">
            <ul className="list-disc pl-6 space-y-2">
              <li>Virtual machines for hands-on practice with different operating systems</li>
              <li>Simulated network environments for troubleshooting exercises</li>
              <li>Code sandboxes for programming-related certifications</li>
              <li>Augmented reality modules for hardware identification and assembly practice</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Community and Collaboration">
            <ul className="list-disc pl-6 space-y-2">
              <li>Peer-to-peer tutoring and mentorship programs</li>
              <li>Industry expert AMAs and webinars</li>
              <li>Collaborative study rooms with shared resources and notes</li>
              <li>Gamified challenges and hackathons to apply learned skills</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Comprehensive Analytics and Reporting">
            <ul className="list-disc pl-6 space-y-2">
              <li>Detailed performance breakdowns by topic and skill area</li>
              <li>Time management analysis for optimized study sessions</li>
              <li>Comparative analytics with peer groups and industry benchmarks</li>
              <li>Predictive scoring for certification exam performance</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      <footer className="text-center text-gray-600">
        <p>&copy; 2024 Skunkworks Academy. Empowering the next generation of IT professionals.</p>
      </footer>
    </div>
  );
};

export default SkunkworksAcademyOverview;