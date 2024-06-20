import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <CompanyOverview />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
