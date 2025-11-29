import React from 'react';

const StayfindrMarketplace = () => {
  // Sample data
  const hotels = [
    { id: 1, name: 'Grand Hôtel Stockholm', category: 'luxury', city: 'Stockholm', is_verified: true, is_active: true },
    { id: 2, name: 'Nobis Hotel Stockholm', category: 'luxury', city: 'Stockholm', is_verified: true, is_active: true },
    { id: 3, name: 'Ett Hem', category: 'boutique', city: 'Stockholm', is_verified: true, is_active: false },
    { id: 4, name: 'Miss Clara by Nobis', category: 'boutique', city: 'Stockholm', is_verified: true, is_active: true },
  ];

  const influencers = [
    { id: 1, display_name: 'Emma Lindström', niche: 'travel', instagram_followers: 245000, ranking_score: 92, is_verified: true },
    { id: 2, display_name: 'Johan Rehnberg', niche: 'luxury', instagram_followers: 87500, ranking_score: 78, is_verified: true },
    { id: 3, display_name: 'Sofia Karlén', niche: 'lifestyle', instagram_followers: 156000, ranking_score: 65, is_verified: false },
  ];

  const dealSteps = [
    { key: 'proposed', label: 'Förslag', icon: '📝' },
    { key: 'accepted', label: 'Accepterat', icon: '✓' },
    { key: 'in_progress', label: 'Pågår', icon: '⚡' },
    { key: 'delivered', label: 'Levererat', icon: '📦', active: true },
    { key: 'approved', label: 'Godkänt', icon: '★' },
    { key: 'paid', label: 'Betalt', icon: '💰' },
  ];

  const formatFollowers = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getRankBadge = (score) => {
    if (score >= 80) return { label: 'Guld', class: 'badge-gold' };
    if (score >= 60) return { label: 'Silver', class: 'badge-silver' };
    if (score >= 40) return { label: 'Brons', class: 'badge-bronze' };
    return { label: 'Ny', class: 'badge-new' };
  };

  const getCategoryLabel = (cat) => {
    const labels = { luxury: 'Lyxhotell', boutique: 'Boutique', budget: 'Budget', chain: 'Kedja' };
    return labels[cat] || cat;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap');

        :root {
          --bg-primary: #0D0D0D;
          --bg-secondary: #161616;
          --bg-card: #1A1A1A;
          --bg-elevated: #222222;
          --text-primary: #F5F5F5;
          --text-secondary: #A0A0A0;
          --text-muted: #666666;
          --accent-gold: #D4A853;
          --accent-gold-light: #E8C878;
          --accent-amber: #F59E0B;
          --accent-coral: #E07B5A;
          --accent-coral-light: #F0967A;
          --border-subtle: rgba(255,255,255,0.08);
          --border-accent: rgba(212,168,83,0.3);
          --gradient-gold: linear-gradient(135deg, #D4A853 0%, #E8C878 50%, #D4A853 100%);
          --gradient-mesh: radial-gradient(ellipse at 20% 0%, rgba(212,168,83,0.15) 0%, transparent 50%),
                          radial-gradient(ellipse at 80% 100%, rgba(224,123,90,0.1) 0%, transparent 50%);
          --shadow-card: 0 4px 24px rgba(0,0,0,0.4);
          --shadow-glow: 0 0 40px rgba(212,168,83,0.15);
          --radius-sm: 6px;
          --radius-md: 10px;
          --radius-lg: 16px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Bricolage Grotesque', sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .marketplace {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .fade-in {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }

        /* Hero Section */
        .hero {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 60px 24px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-mesh);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: 20%;
          left: 50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%);
          transform: translateX(-50%);
          pointer-events: none;
          animation: pulse 8s ease-in-out infinite;
        }

        .hero-logo {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 48px;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          max-width: 800px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .hero-title span {
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 48px;
          position: relative;
          z-index: 1;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .btn {
          padding: 16px 32px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--gradient-gold);
          color: var(--bg-primary);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);
        }

        .btn-secondary:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        /* Section Styles */
        .section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 48px;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        /* Filters */
        .filters {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 500;
          background: var(--bg-card);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--bg-elevated);
          color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        /* Hotel Grid */
        .hotel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .hotel-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s ease;
        }

        .hotel-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-accent);
        }

        .card-image {
          height: 180px;
          position: relative;
        }

        .card-image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2A2520 0%, #1F1D1A 50%, #252320 100%);
        }

        .card-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 8px;
        }

        .badge {
          padding: 4px 10px;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 100px;
        }

        .badge-active {
          background: rgba(212,168,83,0.2);
          color: var(--accent-gold);
        }

        .badge-category {
          background: rgba(255,255,255,0.1);
          color: var(--text-primary);
        }

        .card-verified {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: var(--accent-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .card-content {
          padding: 20px;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .card-location {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 16px;
        }

        .card-cta {
          width: 100%;
          padding: 12px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          background: transparent;
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .card-cta:hover {
          background: rgba(212,168,83,0.1);
        }

        /* Influencer Section */
        .influencer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .influencer-grid {
            grid-template-columns: 1fr;
          }
        }

        .influencer-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          padding: 24px;
          text-align: center;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s ease;
        }

        .influencer-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-accent);
        }

        .influencer-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 16px;
          background: linear-gradient(135deg, var(--accent-coral) 0%, var(--accent-gold) 100%);
          position: relative;
        }

        .influencer-verified {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: var(--accent-gold);
          border-radius: 50%;
          border: 3px solid var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .influencer-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .influencer-niche {
          color: var(--text-secondary);
          font-size: 0.85rem;
          text-transform: capitalize;
          margin-bottom: 12px;
        }

        .influencer-followers {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-gold);
          margin-bottom: 4px;
        }

        .influencer-followers-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .rank-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .badge-gold {
          background: linear-gradient(135deg, #D4A853 0%, #F0C970 100%);
          color: var(--bg-primary);
        }

        .badge-silver {
          background: linear-gradient(135deg, #8C8C8C 0%, #BEBEBE 100%);
          color: var(--bg-primary);
        }

        .badge-bronze {
          background: linear-gradient(135deg, #A66B4B 0%, #C89070 100%);
          color: white;
        }

        .badge-new {
          background: var(--bg-elevated);
          color: var(--text-secondary);
        }

        /* Profile Cards Section */
        .profile-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        @media (max-width: 900px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
        }

        .profile-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }

        .profile-header {
          height: 120px;
          position: relative;
        }

        .profile-cover {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2A2520 0%, #1F1D1A 100%);
        }

        .profile-logo {
          position: absolute;
          bottom: -30px;
          left: 24px;
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-coral) 100%);
          border: 3px solid var(--bg-card);
        }

        .profile-avatar {
          position: absolute;
          bottom: -40px;
          left: 24px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-coral) 0%, var(--accent-gold) 100%);
          border: 4px solid var(--bg-card);
        }

        .profile-body {
          padding: 48px 24px 24px;
        }

        .profile-body.hotel {
          padding-top: 40px;
        }

        .profile-name {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .profile-verified-icon {
          color: var(--accent-gold);
        }

        .profile-meta {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .profile-description {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .profile-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .profile-tag {
          padding: 4px 12px;
          font-size: 0.8rem;
          background: var(--bg-elevated);
          color: var(--text-secondary);
          border-radius: 100px;
        }

        .profile-stats {
          display: flex;
          gap: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .profile-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .profile-stat-icon {
          color: var(--accent-gold);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 16px;
        }

        .portfolio-thumb {
          aspect-ratio: 1;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, #2A2520 0%, #1F1D1A 100%);
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .availability-badge.available {
          background: rgba(34, 197, 94, 0.15);
          color: #22C55E;
        }

        .availability-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
        }

        /* Deal Flow Section */
        .deal-flow {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          padding: 32px;
          border: 1px solid var(--border-subtle);
        }

        .deal-stepper {
          display: flex;
          justify-content: space-between;
          position: relative;
        }

        .deal-stepper::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 40px;
          right: 40px;
          height: 2px;
          background: var(--border-subtle);
        }

        .deal-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .deal-step-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          border: 2px solid var(--border-subtle);
          transition: all 0.3s ease;
        }

        .deal-step.completed .deal-step-icon {
          background: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .deal-step.active .deal-step-icon {
          background: var(--bg-primary);
          border-color: var(--accent-gold);
          box-shadow: 0 0 20px rgba(212,168,83,0.4);
        }

        .deal-step-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .deal-step.completed .deal-step-label,
        .deal-step.active .deal-step-label {
          color: var(--text-primary);
        }

        .deal-revision {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px dashed var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .deal-revision-icon {
          color: var(--accent-coral);
        }

        /* Content Request */
        .content-request {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          padding: 32px;
          border: 1px solid var(--border-subtle);
          max-width: 500px;
        }

        .request-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .request-title {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .request-status {
          padding: 4px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(34, 197, 94, 0.15);
          color: #22C55E;
          border-radius: 100px;
          text-transform: uppercase;
        }

        .request-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .request-detail {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .request-detail-icon {
          color: var(--accent-gold);
          width: 20px;
          text-align: center;
        }

        .request-types {
          display: flex;
          gap: 8px;
        }

        .request-type {
          padding: 4px 12px;
          font-size: 0.8rem;
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-radius: var(--radius-sm);
          text-transform: capitalize;
        }

        /* Trust Section */
        .trust-section {
          background: var(--bg-secondary);
          padding: 80px 24px;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }

        .trust-item {
          text-align: center;
          padding: 32px;
        }

        .trust-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          background: rgba(212,168,83,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }

        .trust-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .trust-description {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Footer */
        .footer {
          padding: 48px 24px;
          text-align: center;
          border-top: 1px solid var(--border-subtle);
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .footer-logo span {
          color: var(--accent-gold);
        }

        .footer-tagline {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 8px;
          font-style: italic;
        }

        .footer-copyright {
          color: var(--text-muted);
          font-size: 0.8rem;
        }
      `}</style>

      <div className="marketplace">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-logo fade-in delay-1">Stayfindr</div>
          <h1 className="hero-title fade-in delay-2">
            Där hotell möter influencers för <span>äkta innehåll</span>
          </h1>
          <p className="hero-subtitle fade-in delay-3">
            Sveriges första B2B-plattform för UGC-samarbeten inom hospitality
          </p>
          <div className="hero-ctas fade-in delay-4">
            <button className="btn btn-primary">Jag är hotell</button>
            <button className="btn btn-secondary">Jag är influencer</button>
          </div>
        </section>

        {/* Hotel Grid Section */}
        <section className="section fade-in delay-5">
          <div className="section-header">
            <h2 className="section-title">Utforska hotell</h2>
            <p className="section-subtitle">Hitta rätt samarbetspartner för ditt innehåll</p>
          </div>

          <div className="filters">
            <button className="filter-btn active">Alla</button>
            <button className="filter-btn">Lyxhotell</button>
            <button className="filter-btn">Boutique</button>
            <button className="filter-btn">Budget</button>
            <button className="filter-btn">Kedja</button>
          </div>

          <div className="hotel-grid">
            {hotels.map((hotel, index) => (
              <div key={hotel.id} className={`hotel-card fade-in delay-${index + 1}`}>
                <div className="card-image">
                  <div className="card-image-placeholder" />
                  <div className="card-badges">
                    <span className="badge badge-category">{getCategoryLabel(hotel.category)}</span>
                    {hotel.is_active && <span className="badge badge-active">Söker UGC</span>}
                  </div>
                  {hotel.is_verified && (
                    <div className="card-verified">★</div>
                  )}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{hotel.name}</h3>
                  <p className="card-location">{hotel.city}</p>
                  <button className="card-cta">Visa profil</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Influencer Ranking Section */}
        <section className="section fade-in delay-6">
          <div className="section-header">
            <h2 className="section-title">Topprankade kreatörer</h2>
            <p className="section-subtitle">Verifierade influencers med bevisad leveransförmåga</p>
          </div>

          <div className="influencer-grid">
            {influencers.map((inf, index) => {
              const rank = getRankBadge(inf.ranking_score);
              return (
                <div key={inf.id} className={`influencer-card fade-in delay-${index + 1}`}>
                  <div className="influencer-avatar">
                    {inf.is_verified && (
                      <div className="influencer-verified">✓</div>
                    )}
                  </div>
                  <h3 className="influencer-name">{inf.display_name}</h3>
                  <p className="influencer-niche">{inf.niche}</p>
                  <div className="influencer-followers">{formatFollowers(inf.instagram_followers)}</div>
                  <div className="influencer-followers-label">Följare</div>
                  <span className={`rank-badge ${rank.class}`}>{rank.label}</span>
                  <button className="card-cta">Kontakta</button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Profile Cards Section */}
        <section className="section">
          <div className="section-header fade-in delay-1">
            <h2 className="section-title">Profilkort</h2>
            <p className="section-subtitle">Så presenteras hotell och kreatörer på plattformen</p>
          </div>

          <div className="profile-grid">
            {/* Hotel Profile */}
            <div className="profile-card fade-in delay-2">
              <div className="profile-header">
                <div className="profile-cover" />
                <div className="profile-logo" />
              </div>
              <div className="profile-body hotel">
                <div className="profile-name">
                  Grand Hôtel Stockholm
                  <span className="profile-verified-icon">★</span>
                </div>
                <p className="profile-meta">Lyxhotell · Stockholm</p>
                <p className="profile-description">
                  Skandinaviens mest ikoniska hotell sedan 1874. Vi söker kreatörer som kan fånga vår unika blandning av historia och modern lyx.
                </p>
                <div className="profile-tags">
                  <span className="profile-tag">Luxury</span>
                  <span className="profile-tag">Fine Dining</span>
                  <span className="profile-tag">Spa</span>
                </div>
                <div className="profile-stats">
                  <div className="profile-stat">
                    <span className="profile-stat-icon">📁</span>
                    Brand assets tillgängliga
                  </div>
                  <div className="profile-stat">
                    <span className="profile-stat-icon">📋</span>
                    3 aktiva förfrågningar
                  </div>
                </div>
              </div>
            </div>

            {/* Influencer Profile */}
            <div className="profile-card fade-in delay-3">
              <div className="profile-header">
                <div className="profile-cover" />
                <div className="profile-avatar" />
              </div>
              <div className="profile-body">
                <div className="profile-name">
                  Emma Lindström
                  <span className="profile-verified-icon">✓</span>
                </div>
                <p className="profile-meta">@emmalindstrom · 245K följare</p>
                <p className="profile-description">
                  Resekrtatör med fokus på lyxhotell och unika upplevelser. Samarbetar endast med varumärken som matchar min estetik.
                </p>
                <div className="profile-tags">
                  <span className="profile-tag">Travel</span>
                  <span className="profile-tag">Luxury</span>
                  <span className="profile-tag">Lifestyle</span>
                </div>
                <div className="portfolio-grid">
                  <div className="portfolio-thumb" />
                  <div className="portfolio-thumb" />
                  <div className="portfolio-thumb" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="rank-badge badge-gold">Guld</span>
                  <span className="availability-badge available">Tillgänglig</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deal Flow Section */}
        <section className="section">
          <div className="section-header fade-in delay-1">
            <h2 className="section-title">Samarbetets livscykel</h2>
            <p className="section-subtitle">Transparent process från förslag till betalning</p>
          </div>

          <div className="deal-flow fade-in delay-2">
            <div className="deal-stepper">
              {dealSteps.map((step, index) => {
                const isCompleted = index < 3;
                const isActive = step.active;
                return (
                  <div
                    key={step.key}
                    className={`deal-step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
                  >
                    <div className="deal-step-icon">{step.icon}</div>
                    <span className="deal-step-label">{step.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="deal-revision">
              <span className="deal-revision-icon">↩</span>
              Revision kan begäras efter leverans
            </div>
          </div>
        </section>

        {/* Content Request Section */}
        <section className="section">
          <div className="section-header fade-in delay-1">
            <h2 className="section-title">Innehållsförfrågningar</h2>
            <p className="section-subtitle">Så skapar hotell sina kampanjbriefingar</p>
          </div>

          <div className="content-request fade-in delay-2">
            <div className="request-header">
              <h3 className="request-title">Julkampanj för Instagram</h3>
              <span className="request-status">Öppen</span>
            </div>
            <div className="request-details">
              <div className="request-detail">
                <span className="request-detail-icon">🎬</span>
                <div className="request-types">
                  <span className="request-type">Reel</span>
                  <span className="request-type">Story</span>
                </div>
              </div>
              <div className="request-detail">
                <span className="request-detail-icon">💰</span>
                2 000 - 5 000 SEK
              </div>
              <div className="request-detail">
                <span className="request-detail-icon">📅</span>
                Deadline: 15 december 2025
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Skicka förslag</button>
          </div>
        </section>

        {/* Trust Section */}
        <section className="trust-section">
          <div className="trust-grid">
            <div className="trust-item fade-in delay-1">
              <div className="trust-icon">✓</div>
              <h3 className="trust-title">Verifierade profiler</h3>
              <p className="trust-description">Alla hotell och kreatörer genomgår verifiering för att säkerställa kvalitet och äkthet.</p>
            </div>
            <div className="trust-item fade-in delay-2">
              <div className="trust-icon">🔒</div>
              <h3 className="trust-title">Stripe-säkrad betalning</h3>
              <p className="trust-description">Trygg betalning via Stripe. Pengarna hålls i escrow tills leverans godkänns.</p>
            </div>
            <div className="trust-item fade-in delay-3">
              <div className="trust-icon">🇸🇪</div>
              <h3 className="trust-title">Svensk plattform & support</h3>
              <p className="trust-description">Utvecklat i Sverige med lokal support och förståelse för nordiska behov.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-logo">Stay<span>findr</span></div>
          <p className="footer-tagline">Where creators meet hospitality</p>
          <p className="footer-copyright">© 2025 Stayfindr</p>
        </footer>
      </div>
    </>
  );
};

export default StayfindrMarketplace;
