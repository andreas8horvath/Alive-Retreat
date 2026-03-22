'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[var(--cream)] rounded-2xl shadow-2xl border border-[var(--gold)]/20 my-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-[var(--text-light)] hover:text-[var(--text-dark)] transition-colors z-10 p-2">
          <X size={24} />
        </button>
        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <span className="text-[var(--gold)] uppercase tracking-widest text-sm font-semibold mb-3 block">Reserve Your Spot</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mb-2">Book Your Retreat</h2>
            <p className="text-[var(--text-mid)] font-sans">Please fill out the form below to secure your place.</p>
          </div>
          
          <form action="https://formspree.io/f/mnjggenj" method="POST" onSubmit={handleSubmit} className="space-y-6 font-sans">
            <input type="hidden" name="_next" value="/success" />
            
            <div className="space-y-2 text-left">
              <label htmlFor="b_name" className="block text-sm font-medium text-[var(--text-dark)]">Full Name *</label>
              <input 
                type="text" 
                id="b_name" 
                name="name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)]"
                placeholder="Jane Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label htmlFor="b_email" className="block text-sm font-medium text-[var(--text-dark)]">Email Address *</label>
                <input 
                  type="email" 
                  id="b_email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)]"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="b_whatsapp" className="block text-sm font-medium text-[var(--text-dark)]">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  id="b_whatsapp" 
                  name="whatsapp" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)]"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="b_room_type" className="block text-sm font-medium text-[var(--text-dark)]">Room Selection *</label>
              <div className="relative">
                <select 
                  id="b_room_type" 
                  name="room_type" 
                  required 
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)] appearance-none"
                >
                  <option value="" disabled>Select your room preference</option>
                  <option value="Double room (shared room with another participant)">Double room (shared room with another participant)</option>
                  <option value="Single room (own private room)">Single room (own private room)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--terracotta)]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="b_message" className="block text-sm font-medium text-[var(--text-dark)]">Message (Optional)</label>
              <textarea 
                id="b_message" 
                name="message" 
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-[var(--gold)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/50 focus:border-[var(--terracotta)] transition-colors text-[var(--text-dark)] resize-none"
                placeholder="Any dietary requirements, intentions for the retreat, or questions?"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--terracotta)] hover:bg-[#7a5f53] text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-lg tracking-wide disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
