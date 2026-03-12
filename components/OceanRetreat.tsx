'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function OceanRetreat() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const init = () => {
      try {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
          setShowCookieConsent(true);
        }
      } catch (e) {
        console.warn('localStorage is not available', e);
        setShowCookieConsent(true);
      }
    };
    
    // Use a small delay to avoid synchronous setState in effect warning
    const timer = setTimeout(init, 0);
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Mark all animate elements visible immediately as fallback
    document.querySelectorAll('.animate').forEach(el => el.classList.add('visible'));
    
    // Also use observer for subtle staggered effect where supported
    if ('IntersectionObserver' in window) {
      document.querySelectorAll('.animate').forEach(el => {
        el.classList.remove('visible');
        (el as HTMLElement).style.opacity = '0';
      });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.animate').forEach(el => observer.observe(el));
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const item = btn.closest('.faq-item');
    if (item) {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }
  };

  const transforms = [
    { title: "Turn Sensitivity Into Strength", desc: "Stop managing your emotions as symptoms. Learn somatic practices that transform your sensitivity into your greatest creative and relational resource." },
    { title: "Restore Your Vital Energy", desc: "Discover where your energy is leaking — and seal those leaks. Leave with a sustainable personal practice that fits into real life, not an idealized one." },
    { title: "Reconnect With Authentic Joy", desc: "Not manufactured positivity — the quiet, deep joy of being in your body, present to beauty, connected to other women who truly see you." },
    { title: "Calm the Stress Loop", desc: "Learn nervous system regulation tools you can use anywhere. Breathwork, movement, and meditation techniques clinically effective for anxiety and burnout." },
    { title: "Feel Alive in Your Body Again", desc: "Water healing, somatic movement, ceremony by the ocean — experiences that return you to the physical pleasure of simply existing, unscheduled and unhurried." },
    { title: "One Month of Continued Support", desc: "Integration matters. A private group supports you for a full month after the retreat, so the changes you make in Les Landes become permanent." }
  ];

  const practices = [
    { icon: "🧘", title: "Meditation", desc: "Morning stillness practices anchored in breath and body awareness. No prior experience needed." },
    { icon: "🌊", title: "Somatic Practices", desc: "Body-based movement to discharge stored tension and reconnect with sensation and presence." },
    { icon: "🎶", title: "Chanting", desc: "Vocal resonance practices that unlock the chest, quiet the mind, and activate collective energy." },
    { icon: "💧", title: "Water Healing", desc: "Aquatic therapy in a private spa — a deeply somatic, profoundly restoring experience." },
    { icon: "🌬️", title: "Breathwork", desc: "Transformational breathing sessions to shift your state, release old patterns, and access clarity." },
    { icon: "✨", title: "Energy Healing", desc: "Collective healing circles working with subtle body energy to restore flow and vitality." },
    { icon: "🫂", title: "Sharing Circles", desc: "Held, witnessed, and truly heard. Women sharing without fixing, advising, or performing." },
    { icon: "🍫", title: "Cacao Ceremony", desc: "Heart-opening ceremonial cacao in a sacred container. A threshold between worlds." },
    { icon: "🌅", title: "Ceremony by the Ocean", desc: "As the Atlantic light fades, a closing ritual by the sea. Marking who you were, who you are now." }
  ];

  return (
    <>
      <nav id="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <Image src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773290879/logo_ypajgk.png" alt="ALIVE" width={120} height={40} />
          </a>
          <a href="#booking" className="nav-cta">
            <span className="mobile-text">Book Now</span>
            <span className="desktop-text">Reserve Your Spot</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grain"></div>
        <div className="container hero-content">
          <p className="hero-eyebrow">Women&apos;s Retreat · Les Landes, France</p>
          <h1 className="hero-title">A Unique<br/><em>Transformational</em><br/>Retreat.</h1>
          <p className="hero-subtitle">Five nights in the pine forests and Atlantic coast of Les Landes — to unplug, feel deeply, and return home genuinely transformed.</p>
          <div className="hero-meta">
            <div className="hero-meta-item"><span className="hero-meta-label">Duration</span><span className="hero-meta-value">5 Nights</span></div>
            <div className="hero-meta-item"><span className="hero-meta-label">Location</span><span className="hero-meta-value">Les Landes, France</span></div>
            <div className="hero-meta-item"><span className="hero-meta-label">Group Size</span><span className="hero-meta-value">Max 12 Women</span></div>
            <div className="hero-meta-item"><span className="hero-meta-label">When</span><span className="hero-meta-value">29 May – 3 June</span></div>
          </div>
          <div className="hero-cta-group">
            <a href="#booking" className="btn-primary">Reserve My Place</a>
            <a href="#experience" className="btn-ghost">What Happens There →</a>
          </div>
        </div>
        <div className="hero-scroll-hint"><div className="scroll-line"></div><span>Scroll</span></div>
      </section>

      {/* RESONANCE */}
      <section className="resonance">
        <div className="container">
          <div className="resonance-inner">
            <div className="resonance-visual animate">
              <Image className="resonance-img" src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773290879/resonance_ssypid.jpg" alt="Woman meditating in nature" width={600} height={800} loading="lazy" />
              <div className="resonance-accent"></div>
              <div className="resonance-accent2"></div>
            </div>
            <div className="animate">
              <span className="section-eyebrow">This retreat was made for you</span>
              <h2>You Give Everything.<br/>Now It&apos;s Your <em>Turn.</em></h2>
              <p>You are a mother, a partner, an entrepreneur, a friend. You show up for everyone with full presence. You are capable, driven, and deeply caring — and you deserve to receive that same energy back.</p>
              <p>ALIVE is a sacred pause designed for women like you: to reconnect with your body, restore your vital energy, and return home with tools that sustain you long after the retreat ends.</p>
              <p>Five nights in Les Landes to remember what it feels like to be truly, joyfully alive.</p>
              <div className="resonance-check">
                <div className="check-item"><div className="check-dot"></div><span>Your sensitivity is a profound gift — learn to channel it as a strength</span></div>
                <div className="check-item"><div className="check-dot"></div><span>Real tools for calm, clarity and sustained energy in everyday life</span></div>
                <div className="check-item"><div className="check-dot"></div><span>Deep connection with women who truly see and hear you</span></div>
                <div className="check-item"><div className="check-dot"></div><span>An embodied transformation that continues long after you return home</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="promise">
        <div className="container--narrow animate">
          <span className="section-eyebrow" style={{color: 'white'}}>The transformation</span>
          <h2>Leave Renewed.<br/><em>Grounded. Equipped.</em></h2>
          <p className="promise-lead">Not just rested — genuinely changed. You&apos;ll leave with a new relationship with your body, your emotions, and your energy. And you&apos;ll have real tools to sustain it at home.</p>
        </div>
        <div className="container">
          <div className="transforms-grid animate">
            {transforms.map((t, i) => (
              <div key={i} className="transform-card">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CACAO CEREMONY INTERLUDE */}
      <section className="cacao-interlude animate">
        <div className="cacao-img" style={{ position: 'relative' }}>
          <Image 
            src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773290880/cacao-bg_n4kcla.jpg" 
            alt="Cacao Ceremony" 
            fill 
            style={{ objectFit: 'cover' }} 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="cacao-text">
          <span className="section-eyebrow">A threshold moment</span>
          <h3>The Heart Opens<br/>Before the Mind Does.</h3>
          <p>The cacao ceremony is one of the most anticipated moments of the retreat — a sacred container where the heart softens, defences dissolve, and something deeper becomes available.</p>
          <p>Ceremonial-grade cacao has been used for centuries as a gentle plant medicine. In our ceremony, it becomes a threshold: between who you arrived as, and who is emerging.</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="experience">
        <div className="container">
          <div className="experience-header animate">
            <span className="section-eyebrow">What Happens There</span>
            <h2>Powerful Collective Moments.<br/>Space for Your Own.</h2>
            <p>Structure without rigidity. Depth without heaviness. Every day holds ceremony, movement, and connection — with freedom to simply be.</p>
          </div>
          <div className="practices-grid animate">
            {practices.map((p, i) => (
              <div key={i} className="practice-item">
                <div className="practice-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACE */}
      <section className="place">
        <div className="container">
          <div className="place-inner">
            <div className="animate">
              <span className="section-eyebrow">Les Landes, France</span>
              <h2>A Hidden Gem.<br/>The Forest Meets<br/>the Atlantic.</h2>
              <p>Les Landes is one of France&apos;s best-kept secrets — vast maritime pine forests, rolling Atlantic dunes, a quiet place to breath and feel</p>
              <p>You will stay in a charming boutique property with a private spa — including a hammam, sauna, jacuzzi, and swimming pool — exclusively reserved for our group during the retreat. During your free time, you can enjoy peaceful walks in the surrounding mountains directly from the retreat center, immersed in nature and tranquility. The retreat is also located just 7 km from the beach, where we will gather for special rituals by the ocean</p>
              <div className="place-details">
                <div className="place-detail"><span className="place-detail-label">Property</span><span>Boutique retreat house with private spa — see full details on <a href="https://yogasearcher.com/en/pages/" style={{color: 'var(--ocean)', textDecoration: 'underline'}} target="_blank" rel="noreferrer">yogasearcher.com</a></span></div>
                <div className="place-detail"><span className="place-detail-label">Cuisine</span><span>Gourmet vegetarian buffet — seasonal, local, abundant. Snacks and teas available all day.</span></div>
                <div className="place-detail"><span className="place-detail-label">Travel</span><span>Accessible from Bordeaux airport (90 min). Group logistics are handled — you just arrive.</span></div>
              </div>
            </div>
            <div className="place-gallery animate">
              <div className="gallery-item item-1" onClick={() => setSelectedImage("https://res.cloudinary.com/dt806m3nm/image/upload/v1773292149/chambre_fqmng1.jpg")}>
                <Image src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773292149/chambre_fqmng1.jpg" alt="Boutique room" width={400} height={300} loading="lazy" referrerPolicy="no-referrer" />
              </div>
              <div className="gallery-item item-2" onClick={() => setSelectedImage("https://res.cloudinary.com/dt806m3nm/image/upload/v1773292150/yoga3_fzzinr.jpg")}>
                <Image src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773292150/yoga3_fzzinr.jpg" alt="Yoga practice" width={400} height={300} loading="lazy" referrerPolicy="no-referrer" />
              </div>
              <div className="gallery-item item-3" onClick={() => setSelectedImage("https://res.cloudinary.com/dt806m3nm/image/upload/v1773292149/hammam_bl5ah9.jpg")}>
                <Image src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773292149/hammam_bl5ah9.jpg" alt="Private Spa Hammam" width={400} height={300} loading="lazy" referrerPolicy="no-referrer" />
              </div>
              <div className="gallery-item item-4" onClick={() => setSelectedImage("https://res.cloudinary.com/dt806m3nm/image/upload/v1773292184/yoga2_a8qodg.jpg")}>
                <Image src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773292184/yoga2_a8qodg.jpg" alt="Yoga session" width={400} height={300} loading="lazy" referrerPolicy="no-referrer" />
              </div>
              <div className="gallery-item item-5" onClick={() => setSelectedImage("https://res.cloudinary.com/dt806m3nm/image/upload/v1773292185/yoga1_f4f9vd.jpg")}>
                <Image src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773292185/yoga1_f4f9vd.jpg" alt="Yoga by the forest" width={400} height={300} loading="lazy" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="for-whom">
        <div className="container">
          <div className="for-whom-inner">
            <h2>You Were Made for<br/>This Kind of Depth.</h2>
            <div>
              <div className="for-list-header">You&apos;ll thrive here if…</div>
              <div className="for-list">
                <div className="for-item"><span className="for-mark">✓</span><span>You&apos;re a woman ready to receive as generously as you give</span></div>
                <div className="for-item"><span className="for-mark">✓</span><span>You want to reconnect with your body, your pleasure, your energy</span></div>
                <div className="for-item"><span className="for-mark">✓</span><span>You&apos;re craving real transformation — not just a beautiful holiday</span></div>
                <div className="for-item"><span className="for-mark">✓</span><span>You long to connect with women who are willing to go deep — to share authentically, create true sisterhood, and be inspired by one another.</span></div>
                <div className="for-item"><span className="for-mark">✓</span><span>You&apos;re open to embodied, somatic, and ceremonial practices</span></div>
                <div className="for-item"><span className="for-mark">✓</span><span>You are ready to take 6 days for yourself, to rest and feel ALIVE</span></div>
              </div>
            </div>
            <div>
              <div className="for-list-header outcomes">What you&apos;ll walk away with</div>
              <div className="for-list">
                <div className="for-item"><span className="for-mark arrow">→</span><span>A living relationship with your own nervous system — tools you&apos;ll actually use</span></div>
                <div className="for-item"><span className="for-mark arrow">→</span><span>Clarity about what truly nourishes you versus what drains you</span></div>
                <div className="for-item"><span className="for-mark arrow">→</span><span>A body that feels like home again — grounded, alive, present</span></div>
                <div className="for-item"><span className="for-mark arrow">→</span><span>A circle of women who have seen the real you — and love her</span></div>
                <div className="for-item"><span className="for-mark arrow">→</span><span>One month of integration support so the change actually sticks</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="guides">
        <div className="container">
          <div className="guides-header animate">
            <span className="section-eyebrow">Your Guides</span>
            <h2>Two Alchemists.<br/>One Extraordinary Week.</h2>
            <p>Carole & Océane: two paths, two methodologies, 2 two energies (Manifesting Generator & Projector), one shared vision — to help women remember who they are.</p>
            <p>The luxury of shared presence. Being two allows us to offer a level of attention and guidance you won&apos;t find elsewhere. Our support is both collective and individual, so each woman feels fully seen, heard, and safe.</p>
          </div>
          <div className="guides-grid animate">
            <div className="guide-card">
              <Image className="guide-avatar" src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773290880/carole_x83sqc.jpg" alt="Carole" width={300} height={300} />
              <div>
                <div className="guide-name">Carole – &apos;The Magician in Sneakers&apos;</div>
                <div className="guide-role">Multidimensional Therapist and Founder of CaroleAnna, Selfcare Paradise, and Odyssée Alchimique.</div>
                <p className="guide-bio">Her magic lies in blending the visible and invisible to help you love yourself and your body, dare to shine, and fully live. Her expertise combines movement, energetic releases (healing, massage, soul retrieval, sound therapy) and mentoring with deep self-knowledge tools. A unique journey toward profound metamorphosis — healing life wounds, transforming your relationship to your body, and embracing neuro-diversity for a sovereign and serene life.</p>
              </div>
            </div>
            <div className="guide-card">
              <Image className="guide-avatar" src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773290879/Ocean_puvzg9.jpg" alt="Océane" width={300} height={300} />
              <div>
                <div className="guide-name">Océane</div>
                <div className="guide-role">Holistic Therapist and Founder of Oceane Therapy & Oceane Flow.</div>
                <p className="guide-bio">Océane supports nervous system regulation through a body-based and energetic approach blending yoga, embodiment, breathwork, Thai massage, Reiki, and sound healing. A specialist in aquatic therapy, she created Oceane Flow — a unique water experience inviting deep surrender and a return to self. Her magic: her softness, yin energy, and nurturing presence create a safe space where you can fully relax, reconnect, and be authentically yourself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="logistics" id="booking">
        <div className="container">
          <div className="logistics-header animate">
            <span className="section-eyebrow">Practical Details</span>
            <h2>Everything You Need to Know.</h2>
          </div>
          <div className="logistics-grid animate">
            <div>
              <div className="logistics-block">
                <h3>What&apos;s Included</h3>
                <div className="logistics-items">
                  <div className="logistics-item">5 nights accommodation in the retreat house</div>
                  <div className="logistics-item">All group sessions: meditation, somatic work, breathwork, chanting, ceremony, energy healing, sharing circles</div>
                  <div className="logistics-item">Cacao Ceremony + Ocean Ceremony</div>
                  <div className="logistics-item">Full access to private spa: hammer sauna, jacuzzi, swimming pool</div>
                  <div className="logistics-item">Gourmet vegetarian buffet — all meals and snacks</div>
                  <div className="logistics-item">Private WhatsApp group + 1 month integration support post-retreat</div>
                  <div className="logistics-item">Preparatory call before arrival</div>
                  <div className="logistics-item">All materials and ceremony supplies</div>
                </div>
              </div>
            </div>
            <div>
              <div className="logistics-block">
                <h3>What to Expect</h3>
                <div className="logistics-items">
                  <div className="logistics-item">Intimate group of maximum 12 women —</div>
                  <div className="logistics-item">French Atlantic coast: pine forest, dunes, ocean air</div>
                  <div className="logistics-item">Flexible daily structure</div>
                  <div className="logistics-item">Vegetarian food, lovingly prepared.</div>
                  <div className="logistics-item">Comfortable, private room with natural light</div>
                  <div className="logistics-item">Language: French and English</div>
                  <div className="logistics-item">no spiritual background required</div>
                  <div className="logistics-item">accessible from Bordeaux — approximately 90 min by car ( we organized a shared transfer)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="investment-section animate">
            <div className="not-included-box">
              <p><strong>Not included:</strong> Travel to Les Landes, optional individual sessions (massage, coaching — available to add on).</p>
            </div>
            <div className="investment-card">
              <h3 className="investment-title">Your Investment</h3>
              <div className="investment-amount">€2,497</div>
              <p className="investment-desc">Full retreat including accommodation, all meals and all group sessions. Payment plans available.</p>
              <a href="https://yogasearcher.com/en/pages/" target="_blank" rel="noreferrer" className="investment-btn">RESERVE YOUR PLACE →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="faq-header animate">
            <span className="section-eyebrow">Questions</span>
            <h2>The Things You&apos;re Already Wondering</h2>
          </div>
          <div className="faq-list animate">
            <div className="faq-item">
              <button className="faq-q" onClick={toggleFaq}>I&apos;ve never done somatic work or ceremony. Is this still for me?<span className="faq-arrow">↓</span></button>
              <div className="faq-a"><div className="faq-a-inner">Absolutely. In fact, many of our most transformative participants came in with zero background in embodied practices. Carole and Océane are expert at meeting each woman exactly where she is. No spiritual résumé required — just a genuine willingness to feel.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" onClick={toggleFaq}>Will I have alone time, or is the whole week group activities?<span className="faq-arrow">↓</span></button>
              <div className="faq-a"><div className="faq-a-inner">We deliberately build generous free time into every afternoon. Nothing is mandatory. If your nervous system needs solitude, a long bath, or a walk through the forest, we actively support that. This is your retreat — we design structure, you choose how to inhabit it.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" onClick={toggleFaq}>What if I&apos;m not comfortable sharing in a group?<span className="faq-arrow">↓</span></button>
              <div className="faq-a"><div className="faq-a-inner">You are never pressured to share anything. Our sharing circles are held in total respect of each woman&apos;s pace and boundaries. The container is genuinely safe — and many women who arrive convinced they won&apos;t share end up having profound breakthroughs in those circles. But it&apos;s always your choice.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" onClick={toggleFaq}>How physically demanding are the activities?<span className="faq-arrow">↓</span></button>
              <div className="faq-a"><div className="faq-a-inner">Nothing requires fitness or prior training. Somatic practices work with gentle, intuitive movement. Breathwork is done lying down. Yoga is yin-style — deep, slow, and therapeutic. The ocean ceremony involves a beautiful walk on the beach. This retreat is about sensation and presence, not physical performance.</div></div>
            </div>
            <div className="faq-item">
              <button className="faq-q" onClick={toggleFaq}>Can I come if I&apos;m going through a difficult time emotionally?<span className="faq-arrow">↓</span></button>
              <div className="faq-a"><div className="faq-a-inner">Yes — and in fact, many women who come to ALIVE are in a moment of meaningful transition. Grief, burnout, divorce, identity shift — these are exactly the thresholds this retreat was designed to support. Our facilitators are trained in trauma-informed work. That said, if you have acute mental health needs, please reach out for a conversation before booking.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container--narrow final-cta-inner animate">
          <h2>This Is Your Invitation<br/>to <em>Come Alive.</em></h2>
          <p>Five nights in Les Landes is the beginning of a lasting transformation. You&apos;ll leave with your energy restored, your body grounded, and a circle of women who truly see you.</p>
          <div className="final-urgency">12 WOMEN ONLY · NEXT RETREAT: SUMMER 2026</div>
          <div className="mt-8">
            <a href="https://yogasearcher.com/en/pages/" target="_blank" rel="noreferrer" className="btn-primary">RESERVE MY PLACE NOW</a>
          </div>
        </div>
      </section>

      <footer>
        <Image src="https://res.cloudinary.com/dt806m3nm/image/upload/v1773290879/logo_ypajgk.png" alt="ALIVE" width={240} height={140} className="footer-logo" />
        <div className="footer-links">
          <a href="https://yogasearcher.com" target="_blank" rel="noreferrer">YOGASEARCHER.COM</a>
          <a href="#experience">THE EXPERIENCE</a>
          <a href="#booking">BOOK</a>
        </div>
        <p className="footer-copy">© 2026 ALIVE Retreat · Les Landes, France</p>
      </footer>

      {/* Gallery Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-backdrop"></div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <Image src={selectedImage} alt="Gallery Preview" className="modal-image" width={1200} height={800} style={{objectFit: 'contain', width: '100%', height: 'auto'}} referrerPolicy="no-referrer" />
          </div>
        </div>
      )}

      {showCookieConsent && (
        <div id="cookie-consent" className="cookie-consent">
          <div className="container">
            <div className="cookie-content">
              <p>We use cookies to enhance your experience. By clicking &quot;Accept All&quot;, you consent to our use of cookies. <a href="/privacy-policy" target="_blank">Privacy Policy</a></p>
              <div className="cookie-actions">
                <button onClick={() => { try { localStorage.setItem('cookie-consent', 'accepted'); } catch(e) {} setShowCookieConsent(false); }} className="btn-cookie-accept">Accept All</button>
                <button onClick={() => { try { localStorage.setItem('cookie-consent', 'declined'); } catch(e) {} setShowCookieConsent(false); }} className="btn-cookie-decline">Decline</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
