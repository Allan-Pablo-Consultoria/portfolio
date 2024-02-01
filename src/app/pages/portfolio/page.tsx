// src/pages/sobre.tsx
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import GitHubProjects from '@/app/components/portfolio';

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <GitHubProjects />
      <Footer />
    </>
  );
}
