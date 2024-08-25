import React from 'react';

const noticias = [
  {
    id: 1,
    titulo: 'Nueva Especialidad en Cardiología',
    fecha: '20 de agosto de 2024',
    descripcion: 'Nos complace anunciar que hemos incorporado una nueva especialidad en Cardiología con el Dr. Juan Pérez, especialista con más de 15 años de experiencia.',
  },
  {
    id: 2,
    titulo: 'Jornada de Salud Preventiva',
    fecha: '15 de agosto de 2024',
    descripcion: 'El próximo 5 de septiembre estaremos realizando una jornada de salud preventiva gratuita para todos nuestros pacientes.',
  },
  {
    id: 3,
    titulo: 'Ampliación de Horarios',
    fecha: '10 de agosto de 2024',
    descripcion: 'A partir de este mes, ampliamos nuestros horarios de atención para mejor servir a nuestra comunidad. Ahora estamos abiertos de lunes a viernes de 8:00 a 20:00.',
  },
];

const servicios = [
  {
    nombre: 'Directora de Consultorio',
    img: '/enfer_direct.png',
    directora: 'Enf. Ana Gómez',
    telefono: '+34 123 456 789',
    email: 'ana.gomez@consultoriopinguinoadelaida.com',
  },
  {
    nombre: 'Cardiología',
    director: 'Dr. Juan Pérez',
    telefono: '+34 987 654 321',
    email: 'juan.perez@consultoriopinguinoadelaida.com',
  },
  {
    nombre: 'Dermatología',
    director: 'Dra. Laura Martínez',
    telefono: '+34 456 789 123',
    email: 'laura.martinez@consultoriopinguinoadelaida.com',
  },
];

const consejos = [
  {
    id: 1,
    mensaje: '¡Recuerda beber suficiente agua a lo largo del día!',
    tipo: 'general',
  },
  {
    id: 2,
    mensaje: '¡No olvides hacer ejercicio regularmente para mantener tu salud!',
    tipo: 'general',
  },
  {
    id: 3,
    mensaje: '¡Visita a tu médico para chequeos periódicos!',
    tipo: 'general',
  },
  {
    id: 4,
    mensaje: '¡Lleva a tus hijos al pediatra para chequeos regulares y asegúrate de que reciban todas las vacunas necesarias!',
    tipo: 'pediatría',
  },
  {
    id: 5,
    mensaje: '¡Mantén la calma y lleva a tus hijos a sus citas de vacunación puntualmente para proteger su salud!',
    tipo: 'vacunación',
  },
  {
    id: 6,
    mensaje: '¡Recuerda llevar siempre contigo una botella de agua y un pequeño snack durante el día!',
    tipo: 'general',
  },
];

const MainAdelaida = () => {
  return (
    <main className="flex flex-col p-4 space-y-4">
      {/* Contenedor Sobre Nosotros */}
      <section className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Sobre Nosotros</h2>
        <p>
          Bienvenido al Consultorio Pingüino Adelaida, un lugar donde la salud y el bienestar son nuestra prioridad. Fundado en 2020, nuestro consultorio se dedica a ofrecer atención médica de alta calidad con un enfoque personalizado y humano. Nuestro equipo de profesionales está comprometido en proporcionar un servicio excepcional en diversas especialidades médicas.
        </p>
        <div className="bg-gray-400 h-40 rounded-lg mt-4">
          {/* Aquí irá el carrusel de imágenes */}
        </div>
      </section>

      {/* Contenedor Últimas Noticias y Servicios */}
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        {/* Últimas Noticias */}
        <section className="bg-gray-200 p-4 rounded-lg lg:w-7/12 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Últimas Noticias</h2>
          <div className="space-y-4">
            {noticias.map(noticia => (
              <div key={noticia.id} className="flex space-x-4">
                <div className="w-1/3 bg-gray-400 h-32 rounded-lg"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{noticia.titulo}</h3>
                  <p className="text-sm text-gray-600">{noticia.fecha}</p>
                  <p>{noticia.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios */}
        <aside className="bg-gray-200 p-4 rounded-lg lg:w-5/12 space-y-4 mt-4 lg:mt-0">
          <h2 className="text-xl font-semibold">Servicios</h2>
          <ul>
            {servicios.map(servicio => (
              <li key={servicio.nombre} className="mb-4">
                <h3 className="text-lg font-semibold">{servicio.nombre}</h3>
                <p><strong>{servicio.director ? "Director:" : "Directora:"}</strong> {servicio.director ? servicio.director : servicio.directora}</p>
                <p><strong>Teléfono:</strong> {servicio.telefono}</p>
                <p><strong>Email:</strong> {servicio.email}</p>
                <img className='flex w-[25%] justify-center mx-auto my-6' src={servicio.img} alt={"imagen de " + servicio.director} />
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Consejos Médicos */}
      <section className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Consejos Médicos</h2>
        <div className="space-y-4">
          {consejos.map(consejo => (
            <div key={consejo.id} className={`flex items-center space-x-4 ${consejo.tipo === 'general' ? 'bg-blue-100' : consejo.tipo === 'pediatría' ? 'bg-green-100' : 'bg-yellow-100'} p-4 rounded-lg`}>
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                {/* Aquí irá la imagen del pingüino caricaturesco */}
                <img src={`path/to/penguin-${consejo.tipo}.png`} alt="Pingüino" className="object-cover w-full h-full"/>
              </div>
              <p className="text-sm">{consejo.mensaje}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dirección */}
      <section className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Dirección</h2>
        <p>Consultorio Pingüino Adelaida, Calle Ficticia 123, Ciudad Imaginaria, País Ficticio</p>
        <div className="bg-gray-400 h-40 rounded-lg mt-4">
          {/* Aquí irá el mapa */}
        </div>
      </section>
    </main>
  );
}

export default MainAdelaida;