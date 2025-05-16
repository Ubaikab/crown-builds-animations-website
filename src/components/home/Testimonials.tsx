
import React from 'react';
import { Star, StarHalf, UserRound, MessageSquare } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, comment, rating, image }) => {
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} size={18} className="text-yellow-400 fill-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" size={18} className="text-yellow-400 fill-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {renderRating()}
      </div>
      
      <div className="relative flex-grow">
        <MessageSquare size={40} className="text-gray-100 absolute top-0 left-0" />
        <p className="text-gray-700 relative z-10 pl-6 italic">{comment}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      comment: "Crown Construction transformed our dream home into reality. Their attention to detail and commitment to quality exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Michael Robinson",
      role: "Business Owner",
      comment: "Working with Crown Construction on our new office building was a seamless experience. They delivered on time and on budget with exceptional quality.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Emily Chen",
      role: "Property Developer",
      comment: "As a developer, I've worked with many construction companies, but Crown stands out for their professionalism and craftsmanship. Truly exceptional work.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Crown Construction.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100} duration={0.8}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-construction-yellow flex items-center justify-center">
                <UserRound className="text-construction-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Join Our Satisfied Clients</h3>
            </div>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              Ready to experience the Crown Construction difference? Contact us today for a consultation and see why we're the trusted choice for construction excellence.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center group">
              Get in Touch
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
