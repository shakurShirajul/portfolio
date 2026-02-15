'use client';

import { useEffect } from 'react';
import { personSchema, websiteSchema } from '@/lib/schema';

export default function StructuredData() {
  useEffect(() => {
    // Add structured data after initial render
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.text = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);
  }, []);

  return null;
}
