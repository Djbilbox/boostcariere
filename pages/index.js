import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white border-b border-slate-100">
        <h1 className="text-2xl font-extrabold tracking-tight text-blue-600">
          Boost<span className="text-slate-800">Carrière</span>
        </h1>
        <div className="space-x-6 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Offres</a>
          <a href="#" className="hover:text-blue-600 transition">Entreprises</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Connexion
          </button>
        </div>
      </nav>

      {/* Hero Section - Minimaliste */}
      <header className="max-w-4xl mx-auto text-center py-20 px-4">
        <h2 className="text-5xl font-black mb-6 leading-tight">
          Propulsez votre futur <br />
          <span className="text-blue-600">en un clic.</span>
        </h2>
        <p className="text-lg text-slate-500 mb-10">
          La marketplace d'emploi qui connecte les meilleurs talents aux entreprises qui bougent.
        </p>

        {/* Barre de recherche stylée */}
        <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2 border border-slate-100">
          <input 
            type="text" 
            placeholder="Quel métier ?" 
            className="flex-1 p-4 rounded-xl focus:outline-none bg-slate-50"
          />
          <input 
            type="text" 
            placeholder="Où ça ?" 
            className="flex-1 p-4 rounded-xl focus:outline-none bg-slate-50"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
            Rechercher
          </button>
        </div>
      </header>

      {/* Section Offres Récentes */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-2xl font-bold">Dernières opportunités</h3>
          <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Voir tout →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Exemple de carte d'emploi */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-slate-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                🏢
              </div>
              <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">Développeur Fullstack</h4>
              <p className="text-slate-500 text-sm mb-4">Tech Corp • Paris (Hybride)</p>
              <div className="flex gap-2">
                <span className="text-xs bg-slate-100 px-2 py-1 rounded-md">CDI</span>
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md">45k - 60k€</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
