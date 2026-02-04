
import React, { useState } from 'react';
import { Icons } from '../constants';
import { getGameRecommendation } from '../services/geminiService';

interface GeminiRecommenderProps {
  onRecommendationFound: (projectId: number) => void;
}

const GeminiRecommender: React.FC<GeminiRecommenderProps> = ({ onRecommendationFound }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSuggestion(null);
    
    const result = await getGameRecommendation(query);
    setLoading(false);

    if (result) {
      setSuggestion(result.reason);
      onRecommendationFound(result.projectId);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-16 px-4">
      <div className="bg-slate-900/40 border border-amber-500/30 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icons.Sparkles />
        </div>
        
        <h3 className="text-xl font-serif text-amber-100 uppercase tracking-[0.2em] mb-4 text-center">
          ¿No sabes a qué jugar?
        </h3>
        <p className="text-xs text-slate-400 text-center mb-6 leading-relaxed">
          Cuéntame cómo te sientes o qué buscas y la IA te recomendará el mejor proyecto de Gabriel.
        </p>

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ej: Quiero un juego de lógica difícil..."
            className="w-full bg-slate-950 border border-amber-900/40 rounded-2xl px-6 py-4 text-sm text-amber-50 focus:outline-none focus:border-amber-500 transition-colors pr-12"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-slate-950 rounded-xl transition-all disabled:opacity-50"
          >
            {loading ? <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent animate-spin rounded-full"></div> : <Icons.ChevronRight />}
          </button>
        </form>

        {suggestion && (
          <div className="mt-6 p-4 bg-amber-600/5 border border-amber-600/20 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-500">
            <p className="text-sm text-amber-200 font-light italic text-center">
              " {suggestion} "
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiRecommender;
