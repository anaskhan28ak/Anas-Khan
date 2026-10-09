import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import contactSectionImage from '../assets/images/contact_section.png';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight,
  ExternalLink,
  User,
  Tag,
  MessageSquare,
  X
} from 'lucide-react';

// Official WhatsApp Brand SVG Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.85C9.36 7.85 9.08 7.91 8.85 8.16C8.61 8.41 7.96 9.02 7.96 10.25C7.96 11.48 8.86 12.67 8.98 12.83C9.11 13 10.74 15.5 13.23 16.58C13.82 16.83 14.28 16.99 14.64 17.1C15.23 17.29 15.77 17.26 16.2 17.2C16.68 17.13 17.67 16.6 17.88 16.02C18.08 15.44 18.08 14.95 18.02 14.85C17.96 14.75 17.8 14.69 17.55 14.56C17.3 14.44 16.07 13.83 15.84 13.75C15.62 13.67 15.45 13.63 15.28 13.88C15.12 14.12 14.64 14.69 14.5 14.85C14.35 15.02 14.21 15.04 13.96 14.91C13.71 14.79 12.91 14.53 11.96 13.68C11.22 13.02 10.72 12.21 10.58 11.96C10.43 11.71 10.56 11.58 10.69 11.45C10.8 11.34 10.94 11.16 11.06 11.02C11.19 10.88 11.23 10.77 11.31 10.61C11.39 10.44 11.35 10.3 11.29 10.18C11.23 11.06 10.74 8.86 10.54 8.37C10.34 7.89 10.14 7.95 9.98 7.95C9.84 7.94 9.68 7.85 9.53 7.85Z" />
  </svg>
);

// Gmail SVG Icon
const GmailIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

interface ContactSectionProps {
  onCopyNotice: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyNotice }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showChoiceModal, setShowChoiceModal] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showChoiceModal) {
        setShowChoiceModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showChoiceModal]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onCopyNotice(`Copied ${label} to clipboard!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onCopyNotice('Please fill out all required fields (*)');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      onCopyNotice('Please enter a valid email address');
      return;
    }

    // Open choice modal to let visitor choose between WhatsApp and Email
    setShowChoiceModal(true);
  };

  const handleSendWhatsApp = () => {
    const rawNumber = '923220235506';
    const text =
      `*New Portfolio Message from Anas Khan's Website* 🚀\n\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📧 *Email:* ${formData.email.trim()}\n` +
      (formData.subject.trim() ? `📌 *Subject:* ${formData.subject.trim()}\n\n` : `\n`) +
      `💬 *Message:*\n${formData.message.trim()}\n\n` +
      `— Sent via anas-khan.dev`;

    const whatsappUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setShowChoiceModal(false);
    setIsSubmitted(true);
    onCopyNotice('Opened WhatsApp! Tap send to deliver your message.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleSendMailto = () => {
    const to = 'ak28anaskhan@gmail.com';
    const emailSubject = formData.subject.trim()
      ? `[Portfolio Contact] ${formData.subject.trim()}`
      : `[Portfolio Contact] Inquiry from ${formData.name.trim()}`;
    const emailBody =
      `Hello Anas,\n\n` +
      `You have received a new message from your portfolio contact form:\n\n` +
      `Name: ${formData.name.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Subject: ${formData.subject.trim() || 'General Inquiry'}\n\n` +
      `Message:\n${formData.message.trim()}\n\n` +
      `---\nSent from Portfolio`;

    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;

    setShowChoiceModal(false);
    setIsSubmitted(true);
    onCopyNotice('Opening your email client to send to ak28anaskhan@gmail.com!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleSendGmailWeb = () => {
    const to = 'ak28anaskhan@gmail.com';
    const emailSubject = formData.subject.trim()
      ? `[Portfolio Contact] ${formData.subject.trim()}`
      : `[Portfolio Contact] Inquiry from ${formData.name.trim()}`;
    const emailBody =
      `Hello Anas,\n\n` +
      `You have received a new message from your portfolio contact form:\n\n` +
      `Name: ${formData.name.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Subject: ${formData.subject.trim() || 'General Inquiry'}\n\n` +
      `Message:\n${formData.message.trim()}\n\n` +
      `---\nSent from Portfolio`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setShowChoiceModal(false);
    setIsSubmitted(true);
    onCopyNotice('Opening Gmail Web with your pre-filled draft!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleCopyMessageDraft = () => {
    const summary =
      `Name: ${formData.name.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Subject: ${formData.subject.trim() || 'General Inquiry'}\n` +
      `Message:\n${formData.message.trim()}`;
    navigator.clipboard.writeText(summary);
    onCopyNotice('Copied draft to clipboard!');
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 bg-transparent overflow-hidden selection:bg-[#42e896]/30 selection:text-[#42e896]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[800px] sm:w-[1300px] h-[500px] sm:h-[850px] ambient-blur-glow rounded-full opacity-55"></div>
      </div>

      {/* Screen Reader Semantic Text for Accessibility & SEO */}
      <div className="sr-only">
        <h2>Get In Touch</h2>
        <p>
          I&apos;m always open to discussing new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out using the details or the form. I&apos;ll get back to you as soon as possible.
        </p>
        <p>Phone: +92 322 0235506</p>
        <p>Email: ak28anaskhan@gmail.com</p>
        <p>Address: R-19, sector:7-b, Surjani town, Karachi, Pakistan</p>
        <p>LinkedIn: https://www.linkedin.com/in/anas-khan-005b22332/</p>
        <p>GitHub: https://github.com/anaskhan28ak</p>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1672px] mx-auto flex flex-col items-center justify-center z-10 px-2 sm:px-4 md:px-6 py-6 sm:py-10">
        
        {/* Visual Graphic Container with Pixel-Perfect Aspect Ratio and Interactive Overlays */}
        <div className="relative w-full aspect-[1672/941] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)] border border-white/10 bg-[#0a0f0d]">
          
          {/* Exact Reference Artwork */}
          <img
            src={contactSectionImage}
            alt="Get In Touch - Anas Khan Contact"
            className="w-full h-full object-contain object-center select-none pointer-events-none"
          />

          {/* Interactive Hotspot 1: Phone Card */}
          <button
            onClick={() => handleCopy('+92 322 0235506', 'phone number')}
            onMouseEnter={() => setActiveCard('phone')}
            onMouseLeave={() => setActiveCard(null)}
            className="group absolute rounded-2xl cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/60"
            style={{
              left: '34.8%',
              top: '16.2%',
              width: '28.2%',
              height: '12.4%',
            }}
            title="Click to copy phone: +92 322 0235506"
          >
            <div
              className={`w-full h-full rounded-2xl transition-all duration-300 flex items-center justify-end pr-4 ${
                activeCard === 'phone'
                  ? 'bg-[#42e896]/10 border border-[#42e896]/40 shadow-[0_0_25px_rgba(66,232,150,0.15)]'
                  : 'border border-transparent'
              }`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#42e896] bg-black/80 px-2 py-1 rounded shadow flex items-center gap-1 font-mono">
                <Copy className="w-3 h-3" />
                Copy Phone
              </span>
            </div>
          </button>

          {/* Interactive Hotspot 2: Email Card */}
          <button
            onClick={() => handleCopy('ak28anaskhan@gmail.com', 'email')}
            onMouseEnter={() => setActiveCard('email')}
            onMouseLeave={() => setActiveCard(null)}
            className="group absolute rounded-2xl cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/60"
            style={{
              left: '34.8%',
              top: '29.7%',
              width: '28.2%',
              height: '12.4%',
            }}
            title="Click to copy email: ak28anaskhan@gmail.com"
          >
            <div
              className={`w-full h-full rounded-2xl transition-all duration-300 flex items-center justify-end pr-4 ${
                activeCard === 'email'
                  ? 'bg-[#42e896]/10 border border-[#42e896]/40 shadow-[0_0_25px_rgba(66,232,150,0.15)]'
                  : 'border border-transparent'
              }`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#42e896] bg-black/80 px-2 py-1 rounded shadow flex items-center gap-1 font-mono">
                <Copy className="w-3 h-3" />
                Copy Email
              </span>
            </div>
          </button>

          {/* Interactive Hotspot 3: Address Card */}
          <button
            onClick={() =>
              handleCopy(
                'R-19, sector:7-b, Surjani town, Karachi, Pakistan',
                'address'
              )
            }
            onMouseEnter={() => setActiveCard('address')}
            onMouseLeave={() => setActiveCard(null)}
            className="group absolute rounded-2xl cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/60"
            style={{
              left: '34.8%',
              top: '44.0%',
              width: '28.2%',
              height: '14.0%',
            }}
            title="Click to copy address"
          >
            <div
              className={`w-full h-full rounded-2xl transition-all duration-300 flex items-center justify-end pr-4 ${
                activeCard === 'address'
                  ? 'bg-[#42e896]/10 border border-[#42e896]/40 shadow-[0_0_25px_rgba(66,232,150,0.15)]'
                  : 'border border-transparent'
              }`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#42e896] bg-black/80 px-2 py-1 rounded shadow flex items-center gap-1 font-mono">
                <Copy className="w-3 h-3" />
                Copy Address
              </span>
            </div>
          </button>

          {/* Interactive Hotspot 4: LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/anas-khan-005b22332/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveCard('linkedin')}
            onMouseLeave={() => setActiveCard(null)}
            className="group absolute rounded-2xl cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/60"
            style={{
              left: '34.8%',
              top: '59.5%',
              width: '28.2%',
              height: '13.5%',
            }}
            title="Open LinkedIn Profile"
          >
            <div
              className={`w-full h-full rounded-2xl transition-all duration-300 flex items-center justify-end pr-4 ${
                activeCard === 'linkedin'
                  ? 'bg-[#42e896]/10 border border-[#42e896]/40 shadow-[0_0_25px_rgba(66,232,150,0.15)]'
                  : 'border border-transparent'
              }`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#42e896] bg-black/80 px-2 py-1 rounded shadow flex items-center gap-1 font-mono">
                <ExternalLink className="w-3 h-3" />
                Open LinkedIn
              </span>
            </div>
          </a>

          {/* Interactive Hotspot 5: GitHub Card */}
          <a
            href="https://github.com/anaskhan28ak"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveCard('github')}
            onMouseLeave={() => setActiveCard(null)}
            className="group absolute rounded-2xl cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42e896]/60"
            style={{
              left: '34.8%',
              top: '74.6%',
              width: '28.2%',
              height: '12.5%',
            }}
            title="Open GitHub Profile"
          >
            <div
              className={`w-full h-full rounded-2xl transition-all duration-300 flex items-center justify-end pr-4 ${
                activeCard === 'github'
                  ? 'bg-[#42e896]/10 border border-[#42e896]/40 shadow-[0_0_25px_rgba(66,232,150,0.15)]'
                  : 'border border-transparent'
              }`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#42e896] bg-black/80 px-2 py-1 rounded shadow flex items-center gap-1 font-mono">
                <ExternalLink className="w-3 h-3" />
                Open GitHub
              </span>
            </div>
          </a>

          {/* Interactive Form Overlays (Name, Email, Subject, Message, Send Button) */}
          <form onSubmit={handleSubmit} className="contents">
            {/* Input 1: Name */}
            <label
              htmlFor="desktop-contact-name"
              className="absolute cursor-text"
              style={{
                left: '68.2%',
                top: '20.0%',
                width: '25.8%',
                height: '6.5%',
              }}
            />
            <input
              id="desktop-contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`absolute text-sm sm:text-base md:text-lg lg:text-xl font-medium text-neutral-100 px-2 rounded-md border border-transparent focus:border-[#42e896]/50 focus:outline-none transition-all ${
                formData.name ? 'bg-[#090e0b]' : 'bg-transparent focus:bg-[#090e0b]'
              }`}
              style={{
                left: '71.6%',
                top: '20.2%',
                width: '22.2%',
                height: '6.0%',
              }}
            />

            {/* Input 2: Email */}
            <label
              htmlFor="desktop-contact-email"
              className="absolute cursor-text"
              style={{
                left: '68.2%',
                top: '28.0%',
                width: '25.8%',
                height: '6.5%',
              }}
            />
            <input
              id="desktop-contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`absolute text-sm sm:text-base md:text-lg lg:text-xl font-medium text-neutral-100 px-2 rounded-md border border-transparent focus:border-[#42e896]/50 focus:outline-none transition-all ${
                formData.email ? 'bg-[#090e0b]' : 'bg-transparent focus:bg-[#090e0b]'
              }`}
              style={{
                left: '71.6%',
                top: '28.2%',
                width: '22.2%',
                height: '6.0%',
              }}
            />

            {/* Input 3: Subject */}
            <label
              htmlFor="desktop-contact-subject"
              className="absolute cursor-text"
              style={{
                left: '68.2%',
                top: '35.9%',
                width: '25.8%',
                height: '6.5%',
              }}
            />
            <input
              id="desktop-contact-subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`absolute text-sm sm:text-base md:text-lg lg:text-xl font-medium text-neutral-100 px-2 rounded-md border border-transparent focus:border-[#42e896]/50 focus:outline-none transition-all ${
                formData.subject ? 'bg-[#090e0b]' : 'bg-transparent focus:bg-[#090e0b]'
              }`}
              style={{
                left: '71.6%',
                top: '36.1%',
                width: '22.2%',
                height: '6.0%',
              }}
            />

            {/* Input 4: Message */}
            <label
              htmlFor="desktop-contact-message"
              className="absolute cursor-text"
              style={{
                left: '68.2%',
                top: '43.9%',
                width: '25.8%',
                height: '14.8%',
              }}
            />
            <textarea
              id="desktop-contact-message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className={`absolute text-sm sm:text-base md:text-lg lg:text-xl font-medium text-neutral-100 px-2 pt-1.5 rounded-md border border-transparent focus:border-[#42e896]/50 focus:outline-none transition-all resize-none ${
                formData.message ? 'bg-[#090e0b]' : 'bg-transparent focus:bg-[#090e0b]'
              }`}
              style={{
                left: '71.6%',
                top: '44.3%',
                width: '22.2%',
                height: '14.0%',
              }}
            />

            {/* Submit Button Hotspot */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute cursor-pointer rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80 active:scale-[0.98]"
              style={{
                left: '68.2%',
                top: '60.8%',
                width: '26.0%',
                height: '6.8%',
              }}
              title="Click to Send Message"
            >
              <div className="w-full h-full rounded-xl hover:bg-white/20 transition-all flex items-center justify-center">
                {isSubmitting ? (
                  <span className="text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="animate-spin w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="text-black font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-black" />
                    Sent!
                  </span>
                ) : null}
              </div>
            </button>
          </form>

          {/* Follow Me Hotspot 1: LinkedIn Circle */}
          <a
            href="https://www.linkedin.com/in/anas-khan-005b22332/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute rounded-full cursor-pointer transition-all duration-200 hover:bg-[#42e896]/20 focus:outline-none focus:ring-2 focus:ring-[#42e896]"
            style={{
              left: '71.0%',
              top: '77.0%',
              width: '4.5%',
              height: '8.0%',
            }}
            title="LinkedIn Profile"
          />

          {/* Follow Me Hotspot 2: GitHub Circle */}
          <a
            href="https://github.com/anaskhan28ak"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute rounded-full cursor-pointer transition-all duration-200 hover:bg-[#42e896]/20 focus:outline-none focus:ring-2 focus:ring-[#42e896]"
            style={{
              left: '79.6%',
              top: '77.0%',
              width: '4.5%',
              height: '8.0%',
            }}
            title="GitHub Profile"
          />

          {/* Follow Me Hotspot 3: Email Circle */}
          <a
            href="mailto:ak28anaskhan@gmail.com"
            className="absolute rounded-full cursor-pointer transition-all duration-200 hover:bg-[#42e896]/20 focus:outline-none focus:ring-2 focus:ring-[#42e896]"
            style={{
              left: '87.4%',
              top: '77.0%',
              width: '4.5%',
              height: '8.0%',
            }}
            title="Send Email"
          />

        </div>

        {/* Mobile / Tablet Screen Responsive Form & Contacts (Visible on < lg screens) */}
        <div className="flex lg:hidden flex-col w-full max-w-2xl gap-6 mt-8 pt-6 border-t border-white/10">
          
          <div className="text-center">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              LET&apos;S CONNECT
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#42e896] uppercase mt-1">
              GET IN TOUCH
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-lg mx-auto">
              I&apos;m always open to discussing new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out using the details or the form.
            </p>
          </div>

          {/* Mobile Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <button
              onClick={() => handleCopy('+92 322 0235506', 'phone')}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-[#0c120f] text-left hover:border-[#42e896]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#42e896]/15 flex items-center justify-center text-[#42e896]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-mono text-[#42e896]">PHONE</div>
                <div className="text-xs font-medium text-white truncate">+92 322 0235506</div>
              </div>
            </button>

            <button
              onClick={() => handleCopy('ak28anaskhan@gmail.com', 'email')}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-[#0c120f] text-left hover:border-[#42e896]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#42e896]/15 flex items-center justify-center text-[#42e896]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-mono text-[#42e896]">EMAIL</div>
                <div className="text-xs font-medium text-white truncate">ak28anaskhan@gmail.com</div>
              </div>
            </button>

            <a
              href="https://www.linkedin.com/in/anas-khan-005b22332/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-[#0c120f] text-left hover:border-[#42e896]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#42e896]/15 flex items-center justify-center text-[#42e896]">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-mono text-[#42e896]">LINKEDIN</div>
                <div className="text-xs font-medium text-white truncate">anas-khan-005b22332</div>
              </div>
            </a>

            <a
              href="https://github.com/anaskhan28ak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-[#0c120f] text-left hover:border-[#42e896]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#42e896]/15 flex items-center justify-center text-[#42e896]">
                <Github className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-mono text-[#42e896]">GITHUB</div>
                <div className="text-xs font-medium text-white truncate">anaskhan28ak</div>
              </div>
            </a>
          </div>

          {/* Mobile Address Note */}
          <div className="p-3.5 rounded-xl border border-white/10 bg-[#0c120f] flex items-center gap-3 text-xs text-neutral-300">
            <MapPin className="w-4 h-4 text-[#42e896] shrink-0" />
            <span>R-19, sector:7-b, Surjani town, Karachi, Pakistan</span>
          </div>

          {/* Mobile Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0c120f] p-5">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#42e896] mb-4">
              SEND ME A MESSAGE
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name *"
                className="w-full text-xs sm:text-sm text-neutral-100 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-[#42e896] focus:outline-none"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email *"
                className="w-full text-xs sm:text-sm text-neutral-100 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-[#42e896] focus:outline-none"
              />
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Subject"
                className="w-full text-xs sm:text-sm text-neutral-100 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-[#42e896] focus:outline-none"
              />
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message..."
                rows={3}
                className="w-full text-xs sm:text-sm text-neutral-100 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-[#42e896] focus:outline-none resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#42e896] to-[#36c980] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg active:scale-95"
              >
                {isSubmitted ? <Check className="w-3.5 h-3.5 text-black" /> : <Send className="w-3.5 h-3.5" />}
                <span>{isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Choice Modal: Select WhatsApp or Email */}
      <AnimatePresence>
        {showChoiceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowChoiceModal(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-[#090f0c] border border-[#42e896]/30 shadow-[0_25px_80px_rgba(0,0,0,0.95)] p-5 sm:p-7 text-white overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#42e896]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#25D366]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowChoiceModal(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-5 pr-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#42e896] block mb-1">
                  Ready to Send
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Choose Contact Method
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  How would you like to deliver your message to Anas Khan?
                </p>
              </div>

              {/* Options Container */}
              <div className="space-y-3.5">
                {/* 1. WhatsApp Option Card */}
                <div className="group relative rounded-2xl border border-white/10 hover:border-[#25D366]/60 bg-white/[0.03] hover:bg-[#25D366]/10 p-4 transition-all duration-200">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#25D366] transition-colors">
                          WhatsApp
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] font-medium border border-[#25D366]/30">
                          Instant Chat
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1">
                        Opens WhatsApp with your accurate message pre-filled to <span className="text-neutral-200 font-mono">+92 322 0235506</span>
                      </p>
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        className="mt-3 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20 active:scale-[0.98] cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Send to WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Email Option Card */}
                <div className="group relative rounded-2xl border border-white/10 hover:border-[#42e896]/60 bg-white/[0.03] hover:bg-[#42e896]/10 p-4 transition-all duration-200">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#42e896]/20 border border-[#42e896]/40 flex items-center justify-center text-[#42e896] shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#42e896] transition-colors">
                          Email
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#42e896]/20 text-[#42e896] font-medium border border-[#42e896]/30">
                          Direct Mail
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1">
                        Send to <span className="text-neutral-200 font-mono">ak28anaskhan@gmail.com</span> with your details
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                        <button
                          type="button"
                          onClick={handleSendGmailWeb}
                          className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
                        >
                          <GmailIcon className="w-3.5 h-3.5 text-red-400" />
                          <span>Gmail Web</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleSendMailto}
                          className="py-2.5 px-3 rounded-xl bg-[#42e896] hover:bg-[#36c980] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-[#42e896]/20 active:scale-[0.98] cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email App</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Summary Preview */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span className="truncate max-w-[280px]">
                  From: <span className="text-neutral-200">{formData.name}</span>
                  {formData.email ? <span className="text-neutral-400"> ({formData.email})</span> : null}
                </span>
                <button
                  type="button"
                  onClick={handleCopyMessageDraft}
                  className="flex items-center gap-1 text-[#42e896] hover:underline cursor-pointer shrink-0 ml-2"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy draft</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
