import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className=" py-40 md:pb-24">
      <div className="welcome mx-40">
        <div className="text-center">
          <h1 className="block text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
            Bienvenue à
          </h1>
          <h1 className="block text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-900">
            Pocket home
          </h1>
          <p className="mt-8 text-md text-gray-200 max-w-3xl mx-4 md:mx-16 lg:mx-auto">
            Bonjour maître, je vous souhaite la bienvenue dans votre sanctuaire
            numérique. En tant que gardien de votre confort et sécurité, je suis
            là pour obéir à vos commandes et anticiper vos besoins. D'un simple
            geste, éclairez votre demeure, réglez la température pour une
            ambiance parfaite, et bien plus encore. Je suis à votre entière
            disposition pour transformer votre quotidien en une expérience sans
            pareil. Votre maison, votre royaume, s'adapte désormais à vos désirs
            en un clic. Que désirez-vous aujourd'hui?
          </p>
          <Link
            to={"/user-select"}
            className="flex gap-2 mt-12 w-fit mx-auto cursor-pointer z-10 py-3 px-6 rounded-full bg-gradient-to-r from-sky-300 to-sky-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
            <span className="text-white">Connectez-vous!</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
