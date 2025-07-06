import React, { useState } from 'react';
import { Home, Shield, Building, BarChart3, Phone, FileText, Menu, X } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'public-safety', label: 'Public Safety', icon: Shield },
    { id: 'workplace-safety', label: 'Workplace Safety', icon: Building },
    { id: 'statistics', label: 'Statistics', icon: BarChart3 },
    { id: 'emergency', label: 'Emergency', icon: Phone },
    { id: 'follow-up', label: 'Follow Up', icon: FileText }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="content-container">
            <div className="hero-section">
              <h1 className="main-title">HSSE Hub</h1>
              <p className="subtitle">
                Building a Smarter, Safer Guyana through Digital Health, Safety, Security, and Environment Innovation
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card blue">
                <div className="feature-header">
                  <Shield className="feature-icon" />
                  <h2>Public Safety</h2>
                </div>
                <p className="feature-description">
                  Report incidents, hazards, and access safety resources for the general public. 
                  Managed by Ministry of Home Affairs agencies.
                </p>
                <ul className="feature-list">
                  <li>• Snap & Send Quick Reports</li>
                  <li>• Detailed Incident Reporting</li>
                  <li>• Hazard Mapping & Hotspots</li>
                  <li>• Safety Information & Resources</li>
                </ul>
              </div>

              <div className="feature-card green">
                <div className="feature-header">
                  <Building className="feature-icon" />
                  <h2>Workplace Safety</h2>
                </div>
                <p className="feature-description">
                  Comprehensive workplace safety management for organizations. 
                  Overseen by Ministry of Labour.
                </p>
                <ul className="feature-list">
                  <li>• Workplace Incident Reports</li>
                  <li>• NIS Claims Management</li>
                  <li>• Risk Assessment Tools</li>
                  <li>• Compliance Resources</li>
                </ul>
              </div>
            </div>

            <div className="key-features">
              <h2>Key Features</h2>
              <div className="features-row">
                <div className="feature-item">
                  <BarChart3 className="feature-icon-large" />
                  <h3>Real-time Analytics</h3>
                  <p>Live statistics and data visualization</p>
                </div>
                <div className="feature-item">
                  <Phone className="feature-icon-large" />
                  <h3>Emergency Contacts</h3>
                  <p>Quick access to emergency services</p>
                </div>
                <div className="feature-item">
                  <FileText className="feature-icon-large" />
                  <h3>Report Follow-up</h3>
                  <p>Track your submissions with reference numbers</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'public-safety':
        return (
          <div className="content-container">
            <div className="page-header">
              <Shield className="page-icon" />
              <h1>Public Safety</h1>
            </div>
            
            <div className="tools-grid">
              <div className="tools-card">
                <h2>Tools</h2>
                <div className="button-list">
                  <button className="tool-button primary">📸 Snap & Send</button>
                  <button className="tool-button primary">📝 Report Incident/Hazard</button>
                  <button className="tool-button primary">🗺️ View Hazard Map</button>
                  <button className="tool-button primary">🧮 Risk Calculator</button>
                </div>
              </div>

              <div className="tools-card">
                <h2>Information & Resources</h2>
                <div className="button-list">
                  <button className="tool-button secondary">📋 Rights & Policies</button>
                  <button className="tool-button secondary">⚖️ Laws & Regulations</button>
                  <button className="tool-button secondary">🌍 International Standards</button>
                  <button className="tool-button secondary">🎮 Safety Games</button>
                </div>
              </div>
            </div>

            <div className="info-section blue">
              <h2>Managed by Ministry of Home Affairs</h2>
              <div className="agencies-grid">
                <div>
                  <h3>Key Agencies:</h3>
                  <ul>
                    <li>• Guyana Police Force (GPF)</li>
                    <li>• Guyana Fire Services</li>
                    <li>• Trafficking in Persons (TIPs)</li>
                    <li>• Juvenile Holding Center</li>
                  </ul>
                </div>
                <div>
                  <h3>Additional Bodies:</h3>
                  <ul>
                    <li>• Environmental Protection Agency</li>
                    <li>• National Insurance Scheme</li>
                    <li>• General Registration Office</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'workplace-safety':
        return (
          <div className="content-container">
            <div className="page-header">
              <Building className="page-icon" />
              <h1>Workplace Safety</h1>
            </div>
            
            <div className="tools-grid">
              <div className="tools-card">
                <h2>Tools</h2>
                <div className="button-list">
                  <button className="tool-button green">📝 Report Incident/Hazard</button>
                  <button className="tool-button green">💼 NIS Claims</button>
                  <button className="tool-button green">🧮 Risk Calculator</button>
                  <button className="tool-button green">📊 Safety Dashboard</button>
                </div>
              </div>

              <div className="tools-card">
                <h2>Information & Resources</h2>
                <div className="button-list">
                  <button className="tool-button secondary">📋 Worker Rights</button>
                  <button className="tool-button secondary">⚖️ Labour Laws</button>
                  <button className="tool-button secondary">🌍 International Standards</button>
                  <button className="tool-button secondary">🎮 Safety Training Games</button>
                </div>
              </div>
            </div>

            <div className="info-section green">
              <h2>Managed by Ministry of Labour</h2>
              <p>Comprehensive workplace safety oversight for all organizations operating in Guyana.</p>
              <div className="industries-grid">
                <div className="industry-item">
                  <div className="industry-icon">🏗️</div>
                  <h3>Construction</h3>
                  <p>High-risk industry focus</p>
                </div>
                <div className="industry-item">
                  <div className="industry-icon">⛏️</div>
                  <h3>Mining</h3>
                  <p>Critical safety oversight</p>
                </div>
                <div className="industry-item">
                  <div className="industry-icon">🏢</div>
                  <h3>General Industry</h3>
                  <p>All workplace sectors</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'statistics':
        return (
          <div className="content-container">
            <div className="page-header">
              <BarChart3 className="page-icon" />
              <h1>Statistics & Analytics</h1>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h2>Public Safety</h2>
                <div className="stat-number blue">247</div>
                <p>Total Reports</p>
              </div>
              <div className="stat-card">
                <h2>Workplace Safety</h2>
                <div className="stat-number green">89</div>
                <p>Incidents Reported</p>
              </div>
              <div className="stat-card">
                <h2>Response Rate</h2>
                <div className="stat-number purple">94%</div>
                <p>Within 24 Hours</p>
              </div>
            </div>

            <div className="approval-section">
              <h2>Data Approval Process</h2>
              <p>All statistics are verified and approved by relevant regulatory bodies:</p>
              <div className="approval-grid">
                <ul>
                  <li>• GNBS (Bureau of Statistics)</li>
                  <li>• General Registration Office (GRA)</li>
                  <li>• Guyana Police Force (GPF)</li>
                </ul>
                <ul>
                  <li>• Ministry of Home Affairs (MOHA)</li>
                  <li>• Ministry of Labour</li>
                  <li>• Environmental Protection Agency</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'emergency':
        return (
          <div className="content-container">
            <div className="page-header">
              <Phone className="page-icon" />
              <h1>Emergency Contacts</h1>
            </div>
            
            <div className="emergency-section">
              <h2>🚨 Emergency Services</h2>
              <div className="emergency-grid">
                <div className="emergency-card">
                  <h3>Police</h3>
                  <p className="emergency-number">911</p>
                </div>
                <div className="emergency-card">
                  <h3>Fire Department</h3>
                  <p className="emergency-number">912</p>
                </div>
                <div className="emergency-card">
                  <h3>Medical Emergency</h3>
                  <p className="emergency-number">913</p>
                </div>
                <div className="emergency-card">
                  <h3>Disaster Management</h3>
                  <p className="emergency-number">914</p>
                </div>
              </div>
            </div>

            <div className="contacts-grid">
              <div className="contact-card">
                <h2>Public Safety Agencies</h2>
                <div className="contact-list">
                  <div className="contact-item">
                    <span>Guyana Police Force</span>
                    <span>(592) 225-2227</span>
                  </div>
                  <div className="contact-item">
                    <span>Guyana Fire Services</span>
                    <span>(592) 225-2345</span>
                  </div>
                  <div className="contact-item">
                    <span>TIPs Hotline</span>
                    <span>(592) 225-8477</span>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <h2>Workplace Safety</h2>
                <div className="contact-list">
                  <div className="contact-item">
                    <span>Ministry of Labour</span>
                    <span>(592) 225-4321</span>
                  </div>
                  <div className="contact-item">
                    <span>National Insurance Scheme</span>
                    <span>(592) 227-3461</span>
                  </div>
                  <div className="contact-item">
                    <span>Environmental Protection</span>
                    <span>(592) 225-5467</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'follow-up':
        return (
          <div className="content-container">
            <div className="page-header">
              <FileText className="page-icon" />
              <h1>Follow Up Reports</h1>
            </div>
            
            <div className="followup-card">
              <h2>Track Your Submission</h2>
              <div className="form-group">
                <label>Reference Number</label>
                <input 
                  type="text" 
                  placeholder="Enter your reference number (e.g., HSSE-2025-001234)"
                  className="form-input"
                />
                <button className="track-button">Track Report Status</button>
              </div>
            </div>

            <div className="status-guide">
              <h2>Report Status Guide</h2>
              <div className="status-list">
                <div className="status-item">
                  <div className="status-dot yellow"></div>
                  <span><strong>Submitted:</strong> Report received and under review</span>
                </div>
                <div className="status-item">
                  <div className="status-dot blue"></div>
                  <span><strong>In Progress:</strong> Investigation in progress</span>
                </div>
                <div className="status-item">
                  <div className="status-dot green"></div>
                  <span><strong>Resolved:</strong> Action taken and case closed</span>
                </div>
                <div className="status-item">
                  <div className="status-dot red"></div>
                  <span><strong>Follow-up Required:</strong> Additional information needed</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Shield className="logo-icon" />
            <h1>HSSE Hub</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`mobile-nav-button ${activeTab === item.id ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HSSE Hub</h3>
            <p>Building a Smarter, Safer Guyana through Digital Innovation</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Emergency Contacts</li>
              <li>Report Status</li>
              <li>Resources</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Regulatory Bodies</h3>
            <ul>
              <li>Ministry of Home Affairs</li>
              <li>Ministry of Labour</li>
              <li>Guyana Police Force</li>
              <li>Guyana Fire Services</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 HSSE Hub. Building a Safer Guyana.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;