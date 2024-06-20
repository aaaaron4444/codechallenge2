import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=3')
      .then(response => {
        setTestimonials(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  return (
    <section>
      <h2>What Our Clients Say</h2>
      <div>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <img src={testimonial.picture.large} alt={`${testimonial.name.first} ${testimonial.name.last}`} />
            <p>"This is a testimonial from {testimonial.name.first} {testimonial.name.last}."</p>
            <cite>{testimonial.name.first} {testimonial.name.last}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
