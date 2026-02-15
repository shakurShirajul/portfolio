export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shirajul Islam Shakur',
  url: 'https://shakurshirajul.com',
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack Developer and Software Engineer specializing in React, Next.js, TypeScript, and modern web development',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'International Islamic University Chittagong',
  },
  sameAs: [
    'https://github.com/shakurShirajul',
    'https://linkedin.com/in/shakur-shirajul',
    'https://facebook.com/shakur.shirajul',
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Web Development',
    'Full Stack Development',
    'Software Engineering',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shakur Shirajul Portfolio',
  url: 'https://shakurshirajul.com',
  description: 'Personal portfolio and blog of Shakur Shirajul, Full Stack Developer',
  author: {
    '@type': 'Person',
    name: 'Shakur Shirajul',
  },
}
