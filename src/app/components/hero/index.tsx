// src/app/components/hero/index.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-mediumblue text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Bem-vindo à Allan Pablo Consultoria</h1>
      <p className="text-lg md:text-xl mb-8 max-w-md">
        Oferecendo uma gama completa de soluções em TI, incluindo consultoria DevOps, infraestrutura, suporte técnico, análise e desenvolvimento de sistemas. Transformamos tecnologia em soluções de valor para o seu negócio.
      </p>
      <button type="button" onClick={() => router.push('/contato')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Fale Conosco
      </button>
    </div>
  );
}
