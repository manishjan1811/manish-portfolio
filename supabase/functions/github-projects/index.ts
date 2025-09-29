import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  homepage: string | null;
  fork: boolean;
}

interface ProjectData {
  name: string;
  description: string;
  technologies: string[];
  features: string;
  url?: string;
  github_url: string;
  stars: number;
  forks: number;
  last_updated: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Fetching GitHub repositories...');
    
    const githubToken = Deno.env.get('GITHUB_TOKEN');
    if (!githubToken) {
      throw new Error('GitHub token not configured');
    }

    // First, get the authenticated user to get their username
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Supabase-Function'
      }
    });

    if (!userResponse.ok) {
      throw new Error(`Failed to get user info: ${userResponse.statusText}`);
    }

    const userData = await userResponse.json();
    const username = userData.login;
    console.log(`Fetching repos for user: ${username}`);

    // Fetch repositories (including private repos)
    const reposResponse = await fetch(`https://api.github.com/user/repos?sort=updated&per_page=20`, {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Supabase-Function'
      }
    });

    if (!reposResponse.ok) {
      throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`);
    }

    const repos: GitHubRepo[] = await reposResponse.json();
    console.log(`Found ${repos.length} repositories`);

    // Filter and transform repositories to project data
    const projects: ProjectData[] = repos
      .filter(repo => 
        !repo.fork && // Exclude forks
        repo.description && // Must have description
        repo.stargazers_count >= 0 // Include all for now
      )
      .slice(0, 6) // Limit to 6 projects
      .map(repo => {
        // Generate tech stack based on language and topics
        const technologies = [
          repo.language,
          ...repo.topics.filter(topic => 
            ['react', 'typescript', 'javascript', 'python', 'nodejs', 'nextjs', 'tailwind', 'css', 'html', 'supabase', 'firebase'].includes(topic.toLowerCase())
          )
        ].filter((tech): tech is string => Boolean(tech)).slice(0, 4);

        // Generate features description
        const features = generateFeatures(repo);

        return {
          name: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repo.description || 'No description available',
          technologies,
          features,
          url: repo.homepage || undefined,
          github_url: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          last_updated: repo.updated_at
        };
      });

    console.log(`Processed ${projects.length} projects`);

    return new Response(JSON.stringify({ 
      success: true, 
      projects,
      user_info: {
        username: userData.login,
        name: userData.name,
        public_repos: userData.public_repos
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in github-projects function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function generateFeatures(repo: GitHubRepo): string {
  const features = [];
  
  if (repo.language) {
    features.push(`${repo.language} implementation`);
  }
  
  if (repo.topics.includes('responsive')) {
    features.push('responsive design');
  }
  
  if (repo.topics.includes('api')) {
    features.push('API integration');
  }
  
  if (repo.topics.includes('authentication') || repo.topics.includes('auth')) {
    features.push('user authentication');
  }
  
  if (repo.topics.includes('database') || repo.topics.includes('db')) {
    features.push('database integration');
  }
  
  if (repo.homepage) {
    features.push('live deployment');
  }
  
  // Default features based on common patterns
  if (features.length === 0) {
    if (repo.language === 'JavaScript' || repo.language === 'TypeScript') {
      features.push('modern web application', 'user interface', 'interactive features');
    } else if (repo.language === 'Python') {
      features.push('automation scripts', 'data processing', 'clean architecture');
    } else {
      features.push('clean code structure', 'documentation', 'best practices');
    }
  }
  
  return features.slice(0, 3).join(', ');
}