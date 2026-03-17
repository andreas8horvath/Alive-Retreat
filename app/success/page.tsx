import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[var(--linen)] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-[var(--cream)] p-10 md:p-16 rounded-3xl shadow-sm border border-[var(--gold)]/20 text-center">
        <div className="w-20 h-20 mx-auto bg-[var(--terracotta)]/10 rounded-full flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-6">
          Thank you for your booking
        </h1>
        
        <p className="font-sans text-lg text-[var(--text-mid)] mb-10 leading-relaxed">
          We will send you more informations and payment details soon.
        </p>
        
        <Link 
          href="/" 
          className="inline-block bg-[var(--terracotta)] hover:bg-[#7a5f53] text-white font-sans font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg tracking-wide"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
