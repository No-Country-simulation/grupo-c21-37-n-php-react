import React from "react";

const MascotaDetalles = () => {
  return (
    <div className="container mx-auto p-4">
      <main className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex">
          <PetImageCarousel />
          <PetInfo />
        </div>
      </main>
    </div>
  );
};

const PetImageCarousel = () => {
  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-bold mb-4">Mascota Perdida</h1>
      <div className="relative">
        <img
          src=""
          alt="Imagen de un perro pequeño"
          className="w-full rounded-lg"
          height="400"
          width="400"
        />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button className="bg-gray-200 text-gray-600 rounded-full p-2">
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button className="bg-gray-200 text-gray-600 rounded-full p-2">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        {[1, 2, 3, 4].map((_, index) => (
          <img
            key={index}
            src=""
            alt="Imagen de un perro pequeño"
            className="w-20 h-20 rounded-lg"
          />
        ))}
      </div>
      <button className="bg-teal-600 text-white w-full py-2 mt-4 rounded-lg">
        Contactar al Dueño
      </button>
    </div>
  );
};

const PetInfo = () => {
  return (
    <div className="w-1/2 pl-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <i className="fas fa-user-circle text-2xl text-gray-600"></i>
          <span className="text-gray-600">Usuario01</span>
        </div>
        <span className="text-gray-600">
          Fecha de publicación: 20 Mayo 2040
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-4">Firulais</h2>
      <div className="space-y-2">
        <Detail label="Edad" value="Cachorro" />
        <Detail label="Color" value="Marron | Blanco" />
        <Detail label="Sexo" value="Macho" />
        <Detail label="Raza" value="Criolla" />
        <Detail label="Ubicación" value="Narnia" />
        <Detail label="Microchip" value="XXXXXX259" />
        <Detail label="Castrado" value="Si" />
        <Detail label="Fecha de perdida" value="20 Mayo 2040" isLink />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-600">Descripción</h3>
        <p className="text-gray-800">Tiene una patita blanca</p>
      </div>
      <div className="flex space-x-4 mt-6">
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
          Aportar Información
        </button>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
          Ver Última Ubicación
        </button>
      </div>
    </div>
  );
};

const Detail = ({ label, value, isLink }) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className={isLink ? "text-blue-600" : "text-gray-800"}>
        {value}
      </span>
    </div>
  );
};

export default MascotaDetalles;
