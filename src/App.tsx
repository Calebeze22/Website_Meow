import React from 'react';
import Logo from './components/Header/Logo';
import Navigation from './components/Header/Navigation';
import Hero from './components/Hero';
import NewsCard from './components/NewsCard';
import Calendar from './components/Calendar';
import ContactForm from './components/ContactForm';

const news = [
  {
    id: 1,
    title: "Students Win Science Fair",
    excerpt: "Our 6th graders took first place in the regional science competition...",
    date: "March 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8"
  },
  {
    id: 2,
    title: "New Art Program Launch",
    excerpt: "Exciting new after-school art program starting next month...",
    date: "March 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1499159058454-75067059248a"
  },
  {
    id: 3,
    title: "Parent Workshop Success",
    excerpt: "Thank you to all parents who attended our digital literacy workshop...",
    date: "March 5, 2024",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
  }
];

const events = [
  {
    id: 1,
    title: "Spring Concert",
    date: new Date("2024-04-15"),
    description: "Annual spring music performance featuring all grades",
    location: "School Auditorium"
  },
  {
    id: 2,
    title: "Parent-Teacher Conferences",
    date: new Date("2024-04-20"),
    description: "Schedule your meeting with teachers",
    location: "Individual Classrooms"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="fixed w-full bg-[#1B3665] text-white py-4 px-6 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />

        {/* Our Community Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Our Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                  alt="Students in classroom"
                  className="rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-montserrat font-bold mb-4">Small Classes, Big Opportunities</h3>
                <p className="text-gray-600 mb-6">
                  With just 80 students, we provide personalized attention and create an environment
                  where every child can thrive. Our small class sizes allow for meaningful
                  interactions and deeper learning experiences.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F4B942] rounded-full mr-2"></span>
                    Average class size of 12 students
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F4B942] rounded-full mr-2"></span>
                    7:1 student-teacher ratio
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#F4B942] rounded-full mr-2"></span>
                    100% parent engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Latest News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Calendar & Contact Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <Calendar events={events} />
            <div>
              <h2 className="text-3xl font-montserrat font-bold mb-8">Contact Us</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B3665] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Logo />
          <div className="mt-6">
            <p>123 Learning Lane, Education City, EC 12345</p>
            <p>Phone: (555) 123-4567 | Email: info@discoveryschool.edu</p>
          </div>
          <p className="mt-6 text-sm">© 2024 Discovery School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;