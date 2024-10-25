import React, { useState } from 'react';
import { Search, Sparkles, Filter, ExternalLink } from 'lucide-react';
import SearchBar from './components/SearchBar';
import ToolCard from './components/ToolCard';
import FilterSection from './components/FilterSection';
import { Tool, platforms, categories } from './data/types';
import { mockTools } from './data/mockData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTools = mockTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || tool.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesPlatform && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">IA Hispana</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Herramientas de IA en Español
          </h1>
          <p className="text-xl text-gray-600">
            Descubre las mejores herramientas de IA desarrolladas en España y Latinoamérica
          </p>
          <p className="text-base text-gray-500 mt-2">
            Tecnología innovadora creada por y para la comunidad hispanohablante
          </p>
        </div>

        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FilterSection
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            platforms={platforms}
            categories={categories}
          />

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
            
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron herramientas que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2024 IA Hispana - Herramientas de IA en español de España y Latinoamérica
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;