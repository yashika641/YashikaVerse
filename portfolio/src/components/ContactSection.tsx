import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formRef.current) return;

  setIsSubmitting(true);

  try {
    await emailjs.sendForm(
      "service_0zmls7e",
      "template_8yeizqk",
      formRef.current,
      "c5wZgwC8pmCSpYQ04"
    );

    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    toast.error("Failed to send message", {
      description: "Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#14141b] to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#e4e4e7] to-[#ef4444] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            Let's discuss your next AI/ML project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#e4e4e7] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"  
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-xl text-[#e4e4e7] 
                           focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#e4e4e7] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-xl text-[#e4e4e7] 
                           focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#e4e4e7] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-xl text-[#e4e4e7] 
                           focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-xl 
                         text-white hover:shadow-lg hover:shadow-[#3b82f6]/50 transition-all duration-300
                         flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Email Card */}
            <motion.div
              className="glass rounded-2xl p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-[#e4e4e7] mb-2">Email</h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-[#a1a1aa] hover:text-[#3b82f6] transition-colors"
                  >
                    palyashika641@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              className="glass rounded-2xl p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-[#e4e4e7] mb-2">Availability</h4>
                  <p className="text-[#a1a1aa]">
                    Open to full-time opportunities and consulting projects
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-[#e4e4e7] mb-4">Connect with me</h4>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://github.com/yashika641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] px-4 py-3 glass rounded-xl hover:bg-[#1f1f28] 
                           transition-all flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Github className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#e4e4e7]" />
                  <span className="text-sm text-[#a1a1aa] group-hover:text-[#e4e4e7]">
                    GitHub
                  </span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/-yashika-pal1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] px-4 py-3 glass rounded-xl hover:bg-[#1f1f28] 
                           transition-all flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Linkedin className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#3b82f6]" />
                  <span className="text-sm text-[#a1a1aa] group-hover:text-[#e4e4e7]">
                    LinkedIn
                  </span>
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] px-4 py-3 glass rounded-xl hover:bg-[#1f1f28] 
                           transition-all flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Twitter className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#06b6d4]" />
                  <span className="text-sm text-[#a1a1aa] group-hover:text-[#e4e4e7]">
                    Twitter
                  </span>
                </motion.a>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-[#a1a1aa]">
                💡 <span className="text-[#e4e4e7]">Quick Response:</span> I typically respond
                within 24-48 hours. For urgent inquiries, please mention it in your message.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
