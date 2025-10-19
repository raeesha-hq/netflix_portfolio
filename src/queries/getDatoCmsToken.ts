// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;
  console.log('Current hostname:', hostname); // Debug log

  // In development, always use the ROR token
  if (hostname === 'localhost' || hostname.includes('localhost') || hostname.includes('MacBook')) {
    const token = process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
    if (!token) {
      throw new Error('REACT_APP_DATOCMS_ROR_TOKEN is not set in .env file');
    }
    return token;
  }

  // Production cases
  switch (hostname) {
    case 'ror.sumanthsamala.com':
    case 'sumanthsamala.com':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    case 'java.sumanthsamala.com':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.sumanthsamala.com':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.sumanthsamala.com':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
