import React, { useState, useEffect } from "react";
import { Globe, Code, Star, GitFork, Calendar, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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

interface GitHubProjectsResponse {
  success: boolean;
  projects: ProjectData[];
  user_info: {
    username: string;
    name: string;
    public_repos: number;
  };
  error?: string;
}

export function GitHubProjects() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      setLoading(true);
      console.log('Fetching GitHub projects...');

      const { data, error: functionError } = await supabase.functions.invoke('github-projects');

      if (functionError) {
        throw new Error(functionError.message);
      }

      const response: GitHubProjectsResponse = data;

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch projects');
      }

      // Enhance project data with better features and technologies
      const enhancedProjects = response.projects.map(project => ({
        ...project,
        technologies: getEnhancedTechnologies(project.name, project.description),
        features: getEnhancedFeatures(project.name, project.description)
      }));

      setProjects(enhancedProjects);
      console.log(`Loaded ${enhancedProjects.length} projects from GitHub`);

    } catch (err: any) {
      console.error('Error fetching GitHub projects:', err);
      setError(err.message);
      toast({
        title: "Error loading projects",
        description: "Using fallback project data. Please check your GitHub token configuration.",
        variant: "destructive"
      });

      // Fallback to static projects if GitHub fetch fails
      setProjects([
        {
          name: "NIST Framework Mapper",
          description: "Automated tool mapping OWASP Top 10 vulnerabilities to NIST Cybersecurity Framework controls.",
          technologies: ["Python", "NIST CSF", "Security"],
          features: "Vulnerability mapping, compliance tracking, automated reporting",
          github_url: "#",
          stars: 0,
          forks: 0,
          last_updated: new Date().toISOString()
        },
        {
          name: "ISO 27001 Audit Suite", 
          description: "Comprehensive ISO 27001 compliance assessment tool with automated evidence collection.",
          technologies: ["PowerShell", "ISO 27001", "Compliance"],
          features: "114 security controls, automated evidence collection, gap analysis reporting",
          github_url: "#",
          stars: 0,
          forks: 0,
          last_updated: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getEnhancedTechnologies = (name: string, description: string) => {
    const nameLower = name.toLowerCase();
    const descLower = description.toLowerCase();
    
    const technologies = [];
    
    // Framework detection
    if (descLower.includes('react')) technologies.push('React');
    if (descLower.includes('typescript')) technologies.push('TypeScript');
    if (descLower.includes('tailwind')) technologies.push('Tailwind CSS');
    if (descLower.includes('supabase')) technologies.push('Supabase');
    if (descLower.includes('node')) technologies.push('Node.js');
    if (descLower.includes('express')) technologies.push('Express');
    if (descLower.includes('next')) technologies.push('Next.js');
    
    // Language detection
    if (descLower.includes('python') || nameLower.includes('python')) technologies.push('Python');
    if (descLower.includes('shell') || descLower.includes('bash')) technologies.push('Shell');
    if (descLower.includes('powershell')) technologies.push('PowerShell');
    if (descLower.includes('javascript')) technologies.push('JavaScript');
    
    // Domain-specific
    if (descLower.includes('cryptocurrency') || descLower.includes('crypto')) technologies.push('Blockchain');
    if (descLower.includes('real estate') || nameLower.includes('luxury')) technologies.push('Real Estate');
    if (descLower.includes('portfolio') || descLower.includes('cv')) technologies.push('Portfolio');
    if (descLower.includes('pentest') || descLower.includes('security')) technologies.push('Cybersecurity');
    if (descLower.includes('reconnaissance') || descLower.includes('recon')) technologies.push('Pentesting');
    
    return technologies.length > 0 ? technologies : ['Web Development'];
  };

  const getEnhancedFeatures = (name: string, description: string) => {
    const nameLower = name.toLowerCase();
    const descLower = description.toLowerCase();
    
    // Specific project features based on name and description
    if (nameLower.includes('luxury') && nameLower.includes('homes')) {
      return 'Property listings, responsive design, location pages, premium UI components';
    }
    
    if (nameLower.includes('trade') && nameLower.includes('flow')) {
      return 'Real-time market data, P2P trading, portfolio management, secure exchange';
    }
    
    if (nameLower.includes('portfolio') || nameLower.includes('manish')) {
      return 'CV generator, project showcase, contact forms, responsive design';
    }
    
    if (nameLower.includes('webtools')) {
      return 'One-click installer, automated setup, pentesting tools configuration';
    }
    
    if (nameLower.includes('recon')) {
      return 'Automated reconnaissance, web enumeration, beginner-friendly interface';
    }
    
    // Generic features based on description content
    const features = [];
    if (descLower.includes('responsive')) features.push('responsive design');
    if (descLower.includes('real-time')) features.push('real-time updates');
    if (descLower.includes('portfolio')) features.push('project showcase');
    if (descLower.includes('cv') || descLower.includes('resume')) features.push('CV generation');
    if (descLower.includes('contact')) features.push('contact forms');
    if (descLower.includes('authentication') || descLower.includes('auth')) features.push('user authentication');
    if (descLower.includes('database')) features.push('data persistence');
    if (descLower.includes('api')) features.push('API integration');
    
    return features.length > 0 ? features.join(', ') : 'Modern web application features';
  };

  const getTechColor = (tech: string) => {
    const techColors: Record<string, string> = {
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'React': 'bg-cyan-100 text-cyan-800',
      'Python': 'bg-green-100 text-green-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'CSS': 'bg-pink-100 text-pink-800',
      'Node.js': 'bg-green-100 text-green-800',
      'Express': 'bg-gray-100 text-gray-800',
      'Supabase': 'bg-emerald-100 text-emerald-800',
      'Tailwind': 'bg-teal-100 text-teal-800',
      'Next.js': 'bg-black text-white',
      'PowerShell': 'bg-blue-100 text-blue-800',
      'NIST CSF': 'bg-purple-100 text-purple-800',
      'ISO 27001': 'bg-indigo-100 text-indigo-800'
    };
    return techColors[tech] || 'bg-gray-100 text-gray-800';
  };

  const getProjectIcon = (technologies: string[]) => {
    if (technologies.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('typescript'))) {
      return <Code className="w-4 h-4" />;
    }
    return <Globe className="w-4 h-4" />;
  };

  const getProjectColor = (index: number) => {
    const colors = [
      'from-blue-50 to-indigo-50 border-blue-200',
      'from-emerald-50 to-green-50 border-emerald-200', 
      'from-amber-50 to-yellow-50 border-amber-200',
      'from-orange-50 to-red-50 border-orange-200',
      'from-purple-50 to-indigo-50 border-purple-200',
      'from-cyan-50 to-blue-50 border-cyan-200'
    ];
    return colors[index % colors.length];
  };

  const getIconColor = (index: number) => {
    const colors = [
      'text-blue-600',
      'text-emerald-600',
      'text-amber-600', 
      'text-orange-600',
      'text-purple-600',
      'text-cyan-600'
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded mb-3"></div>
            <div className="flex gap-1 mb-2">
              <div className="h-6 w-16 bg-gray-300 rounded"></div>
              <div className="h-6 w-16 bg-gray-300 rounded"></div>
            </div>
            <div className="h-3 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {projects.map((project, index) => (
        <div 
          key={project.name}
          className={`bg-gradient-to-br ${getProjectColor(index)} p-4 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300`}
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-sm">
              {React.cloneElement(getProjectIcon(project.technologies), { 
                className: `w-4 h-4 ${getIconColor(index)}` 
              })}
              {project.name}
            </h3>
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <p className="text-xs text-gray-700 mb-3 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className={`px-2 py-1 text-xs rounded ${getTechColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="text-xs text-gray-600 mb-2">
            <strong>Features:</strong> {project.features}
          </div>

          <div className="flex items-center justify-end text-xs text-gray-500">
            <a 
              href={project.github_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors flex items-center gap-1"
            >
              <Code className="w-3 h-3" />
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}