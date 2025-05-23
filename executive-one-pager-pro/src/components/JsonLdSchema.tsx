
import { useEffect } from 'react';
import profile from '@/data/profile';

const JsonLdSchema: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'Person',
      name: profile.basics.name,
      jobTitle: profile.basics.title,
      description: profile.basics.summary,
      email: profile.basics.email,
      telephone: profile.basics.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: profile.basics.location
      },
      sameAs: profile.basics.links.map(link => link.url),
      alumniOf: profile.education.map(edu => ({
        '@type': 'EducationalOrganization',
        name: edu.institution,
        location: edu.location
      })),
      workExperience: profile.experience.map(exp => ({
        '@type': 'OrganizationRole',
        roleName: exp.role,
        startDate: exp.start,
        endDate: exp.end,
        worksFor: {
          '@type': 'Organization',
          name: exp.company,
          location: exp.location
        }
      }))
    };
    
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
};

export default JsonLdSchema;
