
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, About, Services, Contact } from './pages';

/**
 * Main App component for Alem Asefa's counseling website
 * Handles routing and layout structure
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col prevent-overflow no-bounce">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-text text-white py-12 mt-auto">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Alem Asefa, MS, LCPC</p>
                  <p>Baltimore, MD • Rockville, MD</p>
                  <p>Virtual Therapy Sessions</p>
                  <p>(571) 576-3057</p>
                  <p>alem@amracounseling.com</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/about" className="block text-gray-300 hover:text-white transition-colors">About</a>
                  <a href="/services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                  <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
                  <a href="/contact" className="block text-primary hover:text-primary-300 transition-colors">Free Consultation</a>
                </div>
              </div>

              {/* Professional Info */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Licensed Clinical Professional Counselor</p>
                  <p>MS in Clinical Psychology</p>
                  <p>EMDR Certified</p>
                  <p>Trauma-Informed Care</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Alem Asefa Counseling Services. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Confidential mental health services. Licensed in Maryland (LC15939).
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
