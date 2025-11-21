import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromptGrid from "@/components/PromptGrid";
import CategoryFilter from "@/components/CategoryFilter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter />
        <PromptGrid />
      </div>
    </div>
  );
}
