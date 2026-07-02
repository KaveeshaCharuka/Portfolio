import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaEnvelope, FaLinkedin, FaTerminal, FaShieldAlt, FaCode, FaServer, FaRobot, FaUserSecret } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono p-4 md:p-10 selection:bg-green-900">
      
      {/* Main Terminal Window */}
      <div className="max-w-5xl mx-auto bg-black border border-green-500 rounded-lg p-6 shadow-[0_0_20px_rgba(0,255,65,0.15)] mb-10">
        
        {/* Terminal Header */}
        <div className="flex space-x-2 mb-6 border-b border-green-900 pb-3">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.8)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
          <span className="ml-4 text-xs text-gray-500">root@kaveesha-portfolio:~</span>
        </div>

        {/* 1. Hero Section & Identity */}
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Profile Picture */}
          <div className="shrink-0 relative group">
            <div className="absolute -inset-1 bg-green-500 opacity-20 blur rounded-full group-hover:opacity-40 transition duration-500"></div>
            <img 
              src="/me.dark.jpg" 
              alt="Kaveesha Charuka" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-green-500 p-1 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="text-xl md:text-3xl font-bold leading-relaxed mb-4">
              <span className="text-white">root@kaveesha:</span>
              <span className="text-blue-500">~</span>
              <span className="text-white"># </span>
              
              <TypeAnimation
                sequence={[
                  'whoami', 1000,
                  'Security Lead', 1500,
                  'Full-Stack Developer', 1500,
                  'Founder of Omnis Labs', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-400 text-sm md:text-base mt-2">> Executing main_profile.sh...</p>
            <p className="text-gray-400 text-sm md:text-base">> Access granted. Welcome to my digital territory.</p>
            
            {/* Security Clearance Badge */}
            <div className="mt-4 flex items-center justify-center md:justify-start space-x-2 text-xs">
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded border border-green-700 flex items-center">
                <FaShieldAlt className="mr-1"/> SECURE_CONNECTION
              </span>
              <span className="bg-gray-900 text-gray-400 px-2 py-1 rounded border border-gray-700">
                ENCRYPTED_PORTFOLIO
              </span>
            </div>
          </div>
        </div>

        {/* 2. System Logs (About Me) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-green-900 pb-2 flex items-center">
            <FaUserSecret className="mr-3 text-green-500" /> [1] System_Logs.txt
          </h2>
          <div className="bg-[#0f1511] border border-green-800 p-5 rounded text-sm md:text-base opacity-90 leading-relaxed border-l-4 border-l-green-500">
            <p className="mb-3">
              I architect secure digital systems and automate business workflows. As a Full-Stack Developer and Security Lead, my playground ranges from crafting resilient Spring Boot backends and robust MySQL databases to building seamless React interfaces.
            </p>
            <p className="mb-3">
              Beyond the code, I bridge the gap between software and the physical world through IoT, designing systems that utilize UWB sensors and Arduino hardware. I'm also the founder of Omnis Labs, where I develop custom Telegram and WhatsApp bot solutions.
            </p>
            <p className="text-green-400">
              > When the terminal is closed, you'll find me on stage performing as a Lead Guitarist. Tech by day, tone by night.
            </p>
          </div>
        </div>

        {/* 3. The Arsenal (Skills) - 2x2 Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-green-900 pb-2 flex items-center">
            <FaTerminal className="mr-3 text-green-500" /> [2] The Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="border border-green-800 p-4 rounded hover:bg-green-900 hover:bg-opacity-20 transition-all">
              <h3 className="text-white font-bold mb-3 flex items-center"><FaShieldAlt className="mr-2"/> Defensive & Architecture</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li>> Software System Design (SSD)</li>
                <li>> Secure Data Flow</li>
                <li>> Spring Boot Security</li>
                <li>> Database Access Control</li>
              </ul>
            </div>
            
            <div className="border border-green-800 p-4 rounded hover:bg-green-900 hover:bg-opacity-20 transition-all">
              <h3 className="text-white font-bold mb-3 flex items-center"><FaUserSecret className="mr-2"/> Security Operations</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li>> TryHackMe Active User</li>
                <li>> Vulnerability Scanning</li>
                <li>> Penetration Testing Basics</li>
                <li>> Security Audit Reporting</li>
              </ul>
            </div>

            <div className="border border-green-800 p-4 rounded hover:bg-green-900 hover:bg-opacity-20 transition-all">
              <h3 className="text-white font-bold mb-3 flex items-center"><FaCode className="mr-2"/> Core Stack</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li>> React / HTML / CSS / JS</li>
                <li>> Spring Boot / Java</li>
                <li>> Python</li>
                <li>> MySQL</li>
              </ul>
            </div>

            <div className="border border-green-800 p-4 rounded hover:bg-green-900 hover:bg-opacity-20 transition-all">
              <h3 className="text-white font-bold mb-3 flex items-center"><FaRobot className="mr-2"/> Hardware & Automation</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li>> IoT (Arduino, ESP32)</li>
                <li>> UWB Sensor Technology</li>
                <li>> Telegram/WhatsApp Bots</li>
                <li>> TryHackMe CTF Exp.</li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* 4. Classified Missions (Projects) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-green-900 pb-2 flex items-center">
            <FaServer className="mr-3 text-green-500" /> [3] Classified Missions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nex24 */}
            <div className="bg-[#0f1511] border border-green-800 rounded overflow-hidden group">
              <div className="h-40 bg-gray-900 border-b border-green-800 overflow-hidden relative">
                <img src="/nex24-placeholder.png" alt="Nex24 System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-green-900 bg-opacity-20"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">Nex24 (Smart Online Exam)</h3>
                  <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Active</span>
                </div>
                <p className="text-sm opacity-80 mb-3">Role: Security Lead. Engineered secure proctoring mechanisms, system architecture, and robust database access control.</p>
                <div className="text-xs text-gray-500">> Stack: Spring Boot, React, MySQL</div>
                {/* Security Log Added Here */}
                <div className="text-xs text-green-400 mt-1">> Status: [Vulnerability Assessed: Clean]</div>
              </div>
            </div>

            {/* Omnis Labs */}
            <div className="bg-[#0f1511] border border-green-800 rounded overflow-hidden group">
              <div className="h-40 bg-gray-900 border-b border-green-800 overflow-hidden relative">
                <img src="/omnis-placeholder.png" alt="Omnis Labs Bots" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-green-900 bg-opacity-20"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">Omnis Labs Bot Systems</h3>
                  <span className="text-xs border border-green-500 text-green-500 px-2 py-1 rounded">Commercial</span>
                </div>
                <p className="text-sm opacity-80 mb-3">Development of custom, automated WhatsApp and Telegram bots designed to streamline business operations.</p>
                <div className="text-xs text-gray-500">> Stack: Python, API Integration</div>
              </div>
            </div>

            {/* Shopmate POS */}
            <div className="bg-[#0f1511] border border-green-800 rounded overflow-hidden group">
              <div className="h-40 bg-gray-900 border-b border-green-800 overflow-hidden relative">
                <img src="/pos-placeholder.jpg" alt="Shopmate POS" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-green-900 bg-opacity-20"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">Shopmate POS</h3>
                  <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">Full-Stack</span>
                </div>
                <p className="text-sm opacity-80 mb-3">A retail management system featuring day-to-day calculations, stock tracking, and sales analytics dashboards.</p>
                <div className="text-xs text-gray-500">> Stack: JS, HTML/CSS, MySQL</div>
              </div>
            </div>

            {/* Smart Cart */}
            <div className="bg-[#0f1511] border border-green-800 rounded overflow-hidden group">
              <div className="h-40 bg-gray-900 border-b border-green-800 overflow-hidden relative">
                <img src="/cart-placeholder.jpg" alt="Smart Cart IoT" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-green-900 bg-opacity-20"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">IoT Smart Cart System</h3>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Hardware</span>
                </div>
                <p className="text-sm opacity-80 mb-3">A smart cart system for supermarkets utilizing UWB technology and Arduino for human-following capabilities.</p>
                <div className="text-xs text-gray-500">> Stack: Arduino, UWB Sensors, C++</div>
              </div>
            </div>

          </div>
        </div>

        {/* 5. The Gateway (Contact) */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-green-900 pb-2 flex items-center">
            <FaTerminal className="mr-3 text-green-500" /> [4] The Gateway
          </h2>
          <p className="text-sm opacity-80 mb-6">> Establish a secure connection:</p>
          <div className="flex space-x-6">
            {/* Added target="_blank" for security and better UX */}
            <a href="https://github.com/KaveeshaCharuka" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors cursor-pointer">
              <FaGithub className="text-2xl mr-2" />
              <span>/GitHub</span>
            </a>
            <a href="mailto:kaveeshacharuka12@gmail.com" className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors cursor-pointer">
              <FaEnvelope className="text-2xl mr-2" />
              <span>/Email</span>
            </a>
            <a href="https://linkedin.com/in/kaveesha-charuka" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors cursor-pointer">
              <FaLinkedin className="text-2xl mr-2" />
              <span>/LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-green-800">
          > Connection closed. System standing by.
        </div>
      </div>
    </div>
  );
}

export default App;