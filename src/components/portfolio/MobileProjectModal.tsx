import { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Lock } from 'lucide-react';

interface MobileProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MobileProjectModal = ({ isOpen, onClose, title }: MobileProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="block sm:hidden">
      <div 
        className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <div 
          className="bg-background border border-border rounded-2xl shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto"
          onClick={handleContentClick}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-blue-500/10 to-blue-600/15">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Lock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Private Repository</h3>
                <p className="text-sm text-blue-400">{title}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Privacy Notice */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3">
              <div className="flex items-start space-x-3">
                <Lock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1 text-sm">Repository Status</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    This repository is currently private as it contains client-specific code and configurations.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1 text-foreground text-sm">Project Overview</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  CheapOTT Store is a complete e-commerce platform for streaming service subscriptions with responsive design and modern UI/UX.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground text-sm">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => window.open('https://cheapott.store', '_blank')}
                className="flex items-center justify-center px-3 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-xs font-medium"
              >
                <ExternalLink className="w-3 h-3 mr-1.5" />
                Live Site
              </button>
              <button
                onClick={onClose}
                className="flex items-center justify-center px-3 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-lg border border-border transition-colors text-xs font-medium"
              >
                Close
              </button>
            </div>

            {/* Contact Note */}
            <div className="text-center pt-1">
              <p className="text-xs text-muted-foreground">
                For source code access, please contact me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectModal;