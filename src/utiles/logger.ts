// src/utils/logger.ts
export const logError = (error: any) => {
    console.error(error);
  
    fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: error.message || 'Unknown error',
        stack: error.stack || '',
      }),
    });
  };
  