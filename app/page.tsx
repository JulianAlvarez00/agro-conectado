import { HeroSection } from "@/components/sections/hero";
import { WorkerSection } from "@/components/sections/workers";
import { EmployerSection } from "@/components/sections/employers";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/footer";
import { RegisterForm } from "@/components/register-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <WorkerSection />
      <EmployerSection />
      {/* <TestimonialsSection /> */}
      <RegisterForm />
      <Footer />
    </main>
  );
}