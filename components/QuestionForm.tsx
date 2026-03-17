'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuestionForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        router.push('/success');
      } else {
        alert("There was a problem submitting your form.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("There was a problem submitting your form.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="questions-form" className="py-24 bg-[var(--linen)]">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[var(--gold)] uppercase tracking-widest text-sm font-semibold mb-3 block">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">Have a Question?</h2>
          <p className="text-[var(--text-mid)] font-sans">We are here to help. Send us your questions and we will get back to you shortly.</p>
        </div>
        
        <div className="bg-[var(--cream)] p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--gold)]/20">
          <form action="https://formspree.io/f/mnjggenj" method="POST" onSubmit={handleSubmit} className="space-y-6 font-sans">
            <input type="hidden" name="_next" value="/success" />
            
            <div className="space-y-2 text-left">
              <label htmlFor="q_name" className="block text-sm font-medium text-[var(--text-dark)]">Full Name *</label>
              <input 
                type="text" 
                id="q_name" 
                name="name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)]"
                placeholder="Jane Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label htmlFor="q_email" className="block text-sm font-medium text-[var(--text-dark)]">Email Address *</label>
                <input 
                  type="email" 
                  id="q_email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)]"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="q_whatsapp" className="block text-sm font-medium text-[var(--text-dark)]">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  id="q_whatsapp" 
                  name="whatsapp" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)]"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="q_question" className="block text-sm font-medium text-[var(--text-dark)]">Your Question *</label>
              <textarea 
                id="q_question" 
                name="question" 
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)] resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--terracotta)] hover:bg-[#7a5f53] text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-lg tracking-wide disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Question'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
