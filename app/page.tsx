import HeroSection from "./components/HeroSection";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row min-w-screen">
      <HeroSection />
      <LoginForm />
    </main>
  );
}
