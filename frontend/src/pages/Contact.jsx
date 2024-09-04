import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contactanos</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Lorem ipsum dolor sit, amet consectetur adipis. Lorem ipsum dolor sit
          amet.
        </p>
        <form action="https://formsubmit.co/mateo.chumbita@gmail.com" className="space-y-8 " method="POST">
          <div>
            <label htmlFor="email" className="form_label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@gmail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Asunto:
            </label>
            <input
              type="text"
              id="email"
              placeholder="¿En qué podemos ayudarte?"
              className="form_input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">
             Tu Consulta:
            </label>
            <textarea
            rows="3"
              type="text"
              id="email"
              placeholder="Escribe tu consulta..."
              className="form_input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
