import React, { useEffect } from 'react';
import { useProblemsStore } from '../store/useProblemsStore';
import { ProblemCard } from '../components/ProblemCard';
import type { Problem } from '../types';

export function Problems() {
  const { problems, loading, filter, setFilter, fetchProblems } = useProblemsStore();

  useEffect(() => {
    fetchProblems();
  }, [fetchProblems]);

  const filteredProblems = problems.filter((problem) => 
    filter === 'all' ? true : problem.difficulty === filter
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Coding Problems</h2>
          <div className="flex space-x-2">
            {(['all', 'Easy', 'Medium', 'Hard'] as const).map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setFilter(difficulty)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  filter === difficulty
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {difficulty === 'all' ? 'All' : difficulty}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {filteredProblems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}