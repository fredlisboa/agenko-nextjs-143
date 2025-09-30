/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    // Enables the styled-jsx transforms
    styledJsx: true
  },
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  // Add allowedDevOrigins to resolve the cross-origin request warning
  allowedDevOrigins: ['3001-firebase-agenko-nextjs-143-1758813114838.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev']
};

export default nextConfig;