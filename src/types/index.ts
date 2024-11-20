export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: Example[];
  constraints: string[];
  acceptance: number;
  submissions: number;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  solved: number;
  attempted: number;
  rank: number;
  avatar: string;
}

export interface Submission {
  id: string;
  problemId: string;
  userId: string;
  language: string;
  code: string;
  status: 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Runtime Error';
  timestamp: Date;
  runtime: number;
  memory: number;
}