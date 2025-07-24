import { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Lock } from 'lucide-react';

interface MobileProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MobileProjectModal = ({ isOpen, onClose, title }: MobileProjectModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-80' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`absolute inset-x-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="bg-background border border-border/50 rounded-2xl shadow-2xl max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/50 bg-gradient-to-r from-blue-500/10 to-blue-600/15">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Lock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Private Repository</h3>
                <p className="text-sm text-blue-400">{title}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Privacy Notice */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Repository Status</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This repository is currently private as it contains client-specific code and configurations. 
                    The project was built for a commercial client and includes proprietary business logic.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Project Overview</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CheapOTT Store is a complete e-commerce platform built for streaming service subscriptions. 
                  Features responsive design, product catalog, shopping cart functionality, and modern UI/UX.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => window.open('https://cheapott.store', '_blank')}
                className="flex items-center justify-center px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Live Site
              </button>
              <button
                onClick={onClose}
                className="flex items-center justify-center px-4 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-xl border border-border transition-colors text-sm font-medium"
              >
                Close
              </button>
            </div>

            {/* Contact Note */}
            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">
                For source code access or collaboration inquiries, please contact me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectModal;