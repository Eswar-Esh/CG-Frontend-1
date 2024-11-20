import type { Problem } from '../types';

export function generateBotResponse(userInput: string, problem: Problem): string {
  const input = userInput.toLowerCase();

  // Check for different types of questions
  if (input.includes('hint') || input.includes('help')) {
    return generateHint(problem);
  } else if (input.includes('explain') || input.includes('clarify')) {
    return explainProblem(problem);
  } else if (input.includes('test case') || input.includes('example')) {
    return explainTestCases(problem);
  } else if (input.includes('approach') || input.includes('solution')) {
    return suggestApproach(problem);
  }

  // Default response
  return `I can help you with:
- Understanding the problem
- Providing hints
- Explaining test cases
- Suggesting solution approaches

What would you like to know about?`;
}

function generateHint(problem: Problem): string {
  // In a real implementation, these hints would be stored in a database
  const hints = {
    '1': [
      "Think about using a hash map to store numbers you've seen.",
      "Consider what complement you need to find for each number.",
      "You can solve this in a single pass through the array.",
    ],
    '2': [
      "Remember that you're working with linked lists in reverse order.",
      "Consider how to handle carry-over in addition.",
      "Think about what happens when lists have different lengths.",
    ],
    '3': [
      "Think about how to efficiently find the median of two sorted arrays.",
      "Consider using binary search to optimize the solution.",
      "The problem can be solved in O(log(min(m,n))) time complexity.",
    ],
  };

  const problemHints = hints[problem.id as keyof typeof hints] || [
    "Break down the problem into smaller steps.",
    "Consider edge cases in your solution.",
    "Think about the most efficient data structure for this problem.",
  ];

  return problemHints[Math.floor(Math.random() * problemHints.length)];
}

function explainProblem(problem: Problem): string {
  return `Let me break down the problem for you:

${problem.description}

Key points to consider:
1. Input format and constraints
2. Expected output format
3. Edge cases to handle

The problem asks you to ${problem.description.split('.')[0].toLowerCase()}.
Would you like me to explain any specific part in more detail?`;
}

function explainTestCases(problem: Problem): string {
  const example = problem.examples[0];
  return `Let's look at the first example:

Input: ${example.input}
Output: ${example.output}
${example.explanation ? `\nExplanation: ${example.explanation}` : ''}

This example demonstrates the basic functionality required.
Would you like me to explain more test cases or create additional examples?`;
}

function suggestApproach(problem: Problem): string {
  const approaches = {
    '1': "For the Two Sum problem, consider using a hash map approach. As you iterate through the array, store each number and its index. For each number, check if its complement (target - current number) exists in the hash map.",
    '2': "For Add Two Numbers, simulate the addition process digit by digit. Keep track of the carry and create a new node for each sum. Remember to handle cases where one list is longer than the other.",
    '3': "For finding the median of two sorted arrays, you can use binary search on the smaller array to find the correct partition point. This gives you O(log(min(m,n))) time complexity.",
  };

  return approaches[problem.id as keyof typeof approaches] ||
    `Here's a general approach to solve this problem:

1. First, understand the input and output requirements
2. Consider the constraints and their implications
3. Think about edge cases
4. Start with a brute force solution
5. Look for optimization opportunities

Would you like me to elaborate on any of these points?`;
}