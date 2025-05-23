
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import profile from '@/data/profile';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <AnimatedSection id="contact" className="py-16">
      <div className="container max-w-content mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-8 relative">
            Contact Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
          
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              {profile.contact.message && (
                <p className="text-muted-foreground mb-6">
                  {profile.contact.message}
                </p>
              )}
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Email</h4>
                    <a 
                      href={`mailto:${profile.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Phone</h4>
                    <a 
                      href={`tel:${profile.contact.phone.replace(/[\s-]/g, '')}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Location</h4>
                    <span className="text-muted-foreground">{profile.contact.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium mb-3">Availability</h4>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium">
                  {profile.contact.availability}
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Send Me A Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    aria-describedby="name-description"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    aria-describedby="email-description"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                    aria-describedby="message-description"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
