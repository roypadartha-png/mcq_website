import React from 'react';
import { DOCTOR_PROFILE } from '../constants';
import { Quote, Building2, Phone, Globe } from 'lucide-react';

export const DoctorProfile: React.FC = () => {
  const cleanPhone = DOCTOR_PROFILE.phone.replace(/\s+/g, '');

  return (
    <div className="bg-white border border-ayur-green/5 rounded-[2rem] p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 transition-all hover:shadow-xl hover:shadow-ayur-green/5">
      {/* Profile Image Section */}
      <div className="relative shrink-0">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-[2.5rem] border-4 border-white shadow-2xl overflow-hidden relative z-10 rotate-3 transition-transform hover:rotate-0">
          <img 
            src={DOCTOR_PROFILE.imageUrl} 
            alt={DOCTOR_PROFILE.name}
            className="w-full h-full object-cover object-top scale-110"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
        {/* Modern Accent */}
        <div className="absolute -top-2 -left-2 w-20 h-20 bg-ayur-saffron/20 rounded-full blur-2xl -z-0"></div>
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-ayur-green/10 rounded-full blur-2xl -z-0"></div>
      </div>

      {/* Info & Note */}
      <div className="text-center md:text-left flex-1 w-full">
        <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-ayur-charcoal mb-2 leading-tight">
              {DOCTOR_PROFILE.name}
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
              <span className="px-3 py-1 bg-ayur-saffron text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                {DOCTOR_PROFILE.designation}
              </span>
            </div>
            
            <div className="text-ayur-charcoal/60 text-sm space-y-2 mb-6">
                <div className="flex items-center justify-center md:justify-start gap-2 font-semibold text-ayur-green">
                    <Building2 className="w-4 h-4" />
                    <span className="font-heading">{DOCTOR_PROFILE.department}</span>
                </div>
                <p className="text-xs font-medium tracking-wide leading-relaxed opacity-70">
                  {DOCTOR_PROFILE.college}
                </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a 
                  href={`tel:${cleanPhone}`}
                  className="flex items-center gap-2 px-5 py-2.5 bg-ayur-green text-white rounded-2xl font-bold text-xs hover:bg-ayur-charcoal transition-all duration-300 shadow-lg shadow-ayur-green/20 active:scale-95"
                >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                </a>
                
                <a 
                  href={DOCTOR_PROFILE.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-ayur-charcoal border border-ayur-charcoal/10 rounded-2xl font-bold text-xs hover:border-ayur-saffron hover:text-ayur-saffron transition-all duration-300 shadow-sm active:scale-95"
                >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Visit Website</span>
                </a>
            </div>
        </div>
        
        <div className="relative bg-ayur-cream p-6 rounded-3xl border border-ayur-green/5 shadow-inner">
          <div className="mb-3 text-ayur-saffron">
            <Quote className="w-5 h-5 fill-current opacity-30" />
          </div>
          <p className="text-ayur-charcoal/80 font-medium leading-relaxed text-base">
            {DOCTOR_PROFILE.welcomeMessage}
          </p>
        </div>
      </div>
    </div>
  );
};