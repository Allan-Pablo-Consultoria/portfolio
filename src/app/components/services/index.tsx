// src/components/Services.tsx
const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Adicione seus serviços aqui */}
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-gray-100 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Consultoria DevOps</h2>
              <p className="leading-relaxed text-base">Detalhes sobre o serviço oferecido.</p>
            </div>
          </div>
          {/* Repita os blocos acima para outros serviços */}
        </div>
      </div>
    </section>
  );
};

export default Services;
