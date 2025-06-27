import React, { useState } from 'react';
import cesarePortrait from './assets/cesare.jpg'
import marcinPortrait from './assets/marcin.jpeg'
import aicompass from './assets/logos/aicompass.png'
import coci from './assets/logos/coci.png'
import dit4tram from './assets/logos/dit4tram.png'
import ns from './assets/logos/ns.jpg'
import prorail from './assets/logos/prorail.png'
import vattenfall from './assets/logos/vattenfall.png'

// Import Nostr-tools functions
import { generatePrivateKey, getPublicKey, getEventHash, signEvent } from 'nostr-tools';
import { nip04 } from 'nostr-tools/nip04'; // NIP-04 specific functions


// Main App component that structures the entire website.
// It includes a Header, various content sections, and a Footer.
function App() {
  return (
    // Main container with full height, monochromatic background, and font styling.
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800 antialiased">
      <Header /> {/* Website header with navigation */}
      <main className="pt-20"> {/* Padding to account for the fixed header */}
        <HeroSection /> {/* Introduction section */}
        <ProjectsSection /> {/* Section for projects and themes */}
        <CollaborationsSection /> {/* Section for past collaborations (logo wall) */}
        <PublicationsSection /> {/* Section for academic publications */}
        <ProfilesSection /> {/* Section for personal profiles */}
        <ContactSection /> {/* Contact form section */}
      </main>
      <Footer /> {/* Website footer */}
    </div>
  );
}

// Header Component: Contains the navigation bar.
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-sm z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Company Logo/Name, scrolls to top */}
        <a href="#top" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200">
          Seismic
        </a>
        {/* Navigation links for smooth scrolling to sections */}
        <ul className="flex space-x-6">
          <li><a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Projects</a></li>
          <li><a href="#collaborations" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Collaborations</a></li>
          <li><a href="#publications" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Publications</a></li>
          <li><a href="#profiles" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Profiles</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Hero Section Component: Displays the main heading and call to action.
const HeroSection = () => {
  return (
    <section id="top" className="container mx-auto px-4 py-20 md:py-32 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Deep Research and Consulting
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
        We bring our state-of-the-art expertise in distributed technologies to the mobility-as-a-service industry.
      </p>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
        We blend deep expertise with a flexible approach to support teams on complex issues with mability data, planning, forecasting and modeling.
      </p>
      <a href="#contact" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md">
        Get in Touch
      </a>
    </section>
  );
};

// What We Do Section: Details Seismic's core service offerings.
const ProjectsSection = () => {
  // Data for service offerings, including SEO-rich descriptions.
  const services = [
    {
      title: "Modeling User Behavior at Scale",
      description: "Predict and understand travel patterns, platform engagement, and demand flows using behavioral data and causal inference for transport behavior modeling.",
    },
    {
      title: "Machine Learning for Distributed Optimization",
      description: "Develop scalable reinforcement learning and optimization algorithms for dynamic pricing, fleet balancing, and dispatch systems, crucial for AI for urban mobility platforms.",
    },
    {
      title: "Data-Driven Insights from Platform Usage",
      description: "Extract strategic insights from messy, high-volume user data to support business intelligence, operational forecasting, and experimentation, enhancing user data analytics for shared mobility.",
    },
    {
      title: "Gamification and Incentive Design",
      description: "Use multi-agent systems and game theory to incentivize eco-friendly, pro-social, or cost-effective behavior on your platform, leading to effective gamification in transport platforms.",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Map over services to render each offering card */}
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-102 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>
        ))}
      </div>
    </section>
  );
};

// Collaborations Section Component: Displays a wall of client/partner logos.
const CollaborationsSection = () => {
  // Array of collaboration data.
  const collaborations = [
    { name: "Dit4Tram", logo: dit4tram },
    { name: "CoCi", logo: coci },
    { name: "ProRail", logo: prorail },
    { name: "NS", logo: ns },
    { name: "Vattenfall", logo: vattenfall },
  ];

  return (
    <section id="collaborations" className="bg-gray-100 px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Previous Work</h2>
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {/* Map over the collaborations array to render each logo */}
        {collaborations.map((collab, index) => (
          <div key={index} className="group relative w-32 h-20 flex items-center justify-center p-2">
            <img
              src={collab.logo}
              alt={`${collab.name} Logo`}
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            {/* Hover overlay to show full name */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              {collab.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Publications Section Component: Lists academic publications.
const PublicationsSection = () => {
  // Array of publication data.
  const publications = [
    {
      citation: 'Korecki, Marcin, and Dirk Helbing. (2022). <span class="font-semibold">"Analytically guided reinforcement learning for green it and fluent traffic."</span> <span class="italic">IEEE Access</span>, <span class="italic">10</span>, 96348-96358.'
    },
    {
      citation: 'Korecki, Marcin, et al. (2024). <span class="font-semibold">"Democratizing traffic control in smart cities."</span> <span class="italic">Transportation research part C: emerging technologies</span>, <span class="italic">160</span>, 104511. DOI: <a href="https://doi.org/10.1016/j.trc.2024.104511" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">10.1016/j.trc.2024.104511</a>'
    },
    {
      citation: 'Carissimo, Cesare. (2024). <span class="font-semibold">"Counter-intuitive effects of Q-learning exploration in a congestion dilemma."</span> <span class="italic">IEEE Access</span>, <span class="italic">12</span>, 15984-15996.'
    },
    {
      citation: 'Carissimo, Cesare, Marcin Korecki, and Damian Dailisan. (2025). <span class="font-semibold">"Overcoming the Price of Anarchy by Steering with recommendations."</span> <span class="italic">Neurocomputing</span>, <span class="italic">129993</span>.'
    }
  ];

  return (
    <section id="publications" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Recent Publications</h2>
      <div className="space-y-6 max-w-3xl mx-auto"> {/* Adjusted spacing and width for a list */}
        {/* Map over publications to render each citation as a list item */}
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: pub.citation }} />
          </div>
        ))}
      </div>
    </section>
  );
};

// Profiles Section Component: Displays personal profiles of team members.
const ProfilesSection = () => {
  // Array of profile data.
  const profiles = [
    {
      name: "Cesare Carissimo",
      title: "Lead Economist",
      bio: "Cesare has a PhD in Machine Learning and Algorithmic Cooperation from ETH Zurich, and is specialized in game theoretic models played by artificial agents.",
      headshot: cesarePortrait
    },
    {
      name: "Marcin Korecki",
      title: "Lead AI Engineer",
      bio: "Marcin has a PhD in Machine Learning and Transportation from ETH Zurich, and is specialized in applying reinforcement learning to complex systems.",
      headshot: marcinPortrait
    },
  ];

  return (
    <section id="profiles" className="bg-gray-100 px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
        {/* Map over profiles to render each profile card */}
        {profiles.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm w-full md:w-1/2 lg:w-1/3 transform hover:scale-102 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={person.headshot}
              alt={`Headshot of ${person.name}`}
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{person.name}</h3>
            <p className="text-gray-600 text-lg mb-4">{person.title}</p>
            <p className="text-gray-700 leading-relaxed">{person.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section Component: Includes a contact form with basic validation.
const ContactSection = () => {
  // State variables for form fields and messages
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  // --- Configuration ---
  // REPLACE THIS WITH THE RECIPIENT'S ACTUAL PUBLIC KEY (hex format)
  const RECIPIENT_PUBLIC_KEY = 'npub1zyjrxwmus2zm0x8nw7vn7f3dagvghz54g6yzyww465zqa89az3rqe73xqr'; // Example public key

  // List of Nostr relays to try publishing to
  const RELAYS = [
      'wss://relay.damus.io',
      'wss://nostr.mom',
      'wss://nostr.wine',
      'wss://nos.lol',
      // Add more reliable relays as needed
  ];

  // Handles input changes and updates form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Basic validation
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      setSubmissionStatus('error');
    } else {
      setSubmissionStatus('success');
      console.log('Form Submitted:', formData);
      
      // 1. Generate a new ephemeral private key for the sender
      // This key will only be used once for this message.
      const privateKey = generatePrivateKey();
      const publicKey = getPublicKey(privateKey); // Sender's public key

      // 2. Prepare the content for encryption
      // We're sending a JSON string containing the form data.
      const formContent = JSON.stringify({
          fromName: name,
          fromEmail: email,
          message: message,
          timestamp: Date.now() // Add a timestamp for reference
      });

      // 3. Encrypt the message using NIP-04 (Shared Secret Encryption)
      // The recipient needs their private key and the sender's public key to decrypt.
      const encryptedContent = await nip04.encrypt(privateKey, RECIPIENT_PUBLIC_KEY, formContent);

      // 4. Create the Nostr event object
      // Kind 4 is for encrypted direct messages (NIP-04).
      // The 'p' tag indicates the recipient of the message.
      const unsignedEvent = {
          kind: 4,
          pubkey: publicKey, // Sender's public key
          created_at: Math.floor(Date.now() / 1000), // Current timestamp in seconds
          tags: [['p', RECIPIENT_PUBLIC_KEY]], // Recipient's public key tag
          content: encryptedContent, // The encrypted message
      };

      // 5. Sign the event with the sender's private key
      const signedEvent = finalizeEvent(unsignedEvent, privateKey);

      // 6. Attempt to publish the event to relays
      const pool = relayPool(); // Create a new relay pool

      let publishedToAnyRelay = false;
      let successRelays = [];
      let failedRelays = [];

      // Listen for 'ok' and 'error' events from the pool
      pool.on('ok', (eventId, successful, message, url) => {
          if (successful) {
              console.log(`Event ${eventId} published successfully to ${url}: ${message}`);
              successRelays.push(url);
              publishedToAnyRelay = true;
          } else {
              console.error(`Failed to publish event ${eventId} to ${url}: ${message}`);
              failedRelays.push(url);
          }
      });

      pool.on('error', (url) => {
          console.error(`Error connecting or publishing to relay: ${url}`);
          failedRelays.push(url);
      });

      // Iterate through relays and try to publish
      for (const relayUrl of RELAYS) {
          try {
              console.log(`Attempting to publish to: ${relayUrl}`);
              pool.publish(relayUrl, signedEvent);
              // No await here because pool.publish returns immediately.
              // The actual 'ok'/'error' status comes via event listeners.
          } catch (error) {
              console.error(`Failed to initiate publish to ${relayUrl}:`, error);
              failedRelays.push(relayUrl);
          }
      }

      // Give some time for relays to respond.
      // In a real app, you might want more sophisticated relay management (e.g., promises, timeouts for each).
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds for responses

      pool.close(); // Close all relay connections in the pool

      if (publishedToAnyRelay) {
          showStatus(`Message sent successfully! Published to: ${successRelays.join(', ')}.`, 'success');
          // Optionally clear the form after successful submission
          setName('');
          setEmail('');
          setMessage('');
      } else {
          showStatus(`Failed to send message to any relay. Failed relays: ${failedRelays.join(', ')}. See console for details.`, 'error');
      }

      setFormData({ name: '', email: '', message: '' });
    }
    // Hide messages after a few seconds
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-lg text-gray-800 placeholder-gray-500 bg-transparent border-b border-gray-300 focus:border-gray-900 transition-colors duration-200 pb-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-lg text-gray-800 placeholder-gray-500 bg-transparent border-b border-gray-300 focus:border-gray-900 transition-colors duration-200 pb-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full text-lg text-gray-800 placeholder-gray-500 bg-transparent border-b border-gray-300 resize-y focus:border-gray-900 transition-colors duration-200 pb-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md"
          >
            Send Message
          </button>
          {/* Conditional rendering for submission messages */}
          {submissionStatus === 'success' && (
            <div className="mt-4 p-4 text-green-700 bg-green-100 rounded-lg text-center" role="alert">
              Thank you for your message! We will get back to you soon.
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="mt-4 p-4 text-red-700 bg-red-100 rounded-lg text-center" role="alert">
              Please fill in all fields.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

// Footer Component: Displays copyright information.
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-8">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Seismic BV. All rights reserved.</p>
        <p className="mt-2 text-sm">Advance with focus and clarity.</p>
      </div>
    </footer>
  );
};

export default App; // Export the main App component.