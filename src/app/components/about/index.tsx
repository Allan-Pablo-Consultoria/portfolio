import Link from "next/link";

const About = () => {
  return (
    <section className="text-gray-600 body-font bg-mediumblue">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Adicionando uma imagem à esquerda para md: e acima */}
        <div className="lg:flex-shrink-0">
          <img
            className="object-cover object-center rounded-lg lg:w-1/2 md:w-1/2 w-5/6 mb-10 md:mb-0"
            src="/path-to-your-image.jpg" // Substitua pelo caminho da sua imagem
            alt="Imagem representativa sobre DevOps"
          />
        </div>
        
        {/* Conteúdo textual e título */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Sobre Nós
          </h1>
          <p className="mb-8 leading-relaxed">
            Nossa missão é facilitar a transição das empresas para práticas modernas de DevOps, garantindo entregas rápidas e confiáveis. Com uma abordagem focada na cultura de colaboração, automação e integração contínua, visamos otimizar os processos de desenvolvimento e operações.
          </p>
          {/* Você pode adicionar um call-to-action aqui, se necessário */}
          <div className="flex justify-center">
            <Link href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
