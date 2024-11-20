import React from 'react';
import type { Problem } from '../types';

interface DifficultyBadgeProps {
  difficulty: Problem['difficulty'];
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const colors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}