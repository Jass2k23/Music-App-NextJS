import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Courses */}
      <FeaturedCourses />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonial Section */}
      <TestimonialCards />

      {/* UpComing Webinar */}
      <UpComingWebinars />
    </main>
  );
}
