import React from 'react';
import { Filter } from 'lucide-react';

interface FilterSectionProps {
  selectedPlatform: string;
  setSelectedPlatform: (platform: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  platforms: string[];
  categories: string[];
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedPlatform,
  setSelectedPlatform,
  selectedCategory,
  setSelectedCategory,
  platforms,
  categories,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Plataforma</h3>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="platform"
                  value="all"
                  checked={selectedPlatform === 'all'}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                />
                <span className="ml-2 text-sm text-gray-700">Todas</span>
              </label>
              {platforms.map((platform) => (
                <div key={platform}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="platform"
                      value={platform}
                      checked={selectedPlatform === platform}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{platform}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Categoría</h3>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="category"
                  value="all"
                  checked={selectedCategory === 'all'}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <span className="ml-2 text-sm text-gray-700">Todas</span>
              </label>
              {categories.map((category) => (
                <div key={category}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{category}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;