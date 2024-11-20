import { create } from 'zustand';
import type { Problem } from '../types';

interface ProblemsState {
  problems: Problem[];
  selectedProblem: Problem | null;
  loading: boolean;
  filter: 'all' | 'Easy' | 'Medium' | 'Hard';
  setFilter: (filter: ProblemsState['filter']) => void;
  setSelectedProblem: (problem: Problem | null) => void;
  fetchProblems: () => Promise<void>;
}

export const useProblemsStore = create<ProblemsState>((set) => ({
  problems: [],
  selectedProblem: null,
  loading: false,
  filter: 'all',
  setFilter: (filter) => set({ filter }),
  setSelectedProblem: (problem) => set({ selectedProblem: problem }),
  fetchProblems: async () => {
    set({ loading: true });
    // Mock API call - in production, this would fetch from your backend
    const mockProblems: Problem[] = [
      {
        id: '1',
        title: 'Two Sum',
        difficulty: 'Easy',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        examples: [
          {
            input: 'nums = [2,7,11,15], target = 9',
            output: '[0,1]',
            explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
          },
        ],
        constraints: [
          '2 <= nums.length <= 104',
          '-109 <= nums[i] <= 109',
          '-109 <= target <= 109',
        ],
        acceptance: 49.2,
        submissions: 14532167,
      },
      {
        id: '2',
        title: 'Add Two Numbers',
        difficulty: 'Medium',
        description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.',
        examples: [
          {
            input: 'l1 = [2,4,3], l2 = [5,6,4]',
            output: '[7,0,8]',
            explanation: '342 + 465 = 807',
          },
        ],
        constraints: [
          'The number of nodes in each linked list is in the range [1, 100]',
          '0 <= Node.val <= 9',
        ],
        acceptance: 39.8,
        submissions: 8234567,
      },
      {
        id: '3',
        title: 'Median of Two Sorted Arrays',
        difficulty: 'Hard',
        description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
        examples: [
          {
            input: 'nums1 = [1,3], nums2 = [2]',
            output: '2.00000',
            explanation: 'merged array = [1,2,3] and median is 2.',
          },
        ],
        constraints: [
          'nums1.length == m',
          'nums2.length == n',
          '0 <= m <= 1000',
          '0 <= n <= 1000',
          '1 <= m + n <= 2000',
        ],
        acceptance: 35.1,
        submissions: 3456789,
      },
    ];
    set({ problems: mockProblems, loading: false });
  },
}));