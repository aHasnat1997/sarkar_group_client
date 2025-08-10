import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

export const useAuthenticatedApi = () => {
  const { data: session } = useSession();

  const apiClient = useMemo(() => {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;

    return {
      async request(endpoint: string, options: RequestInit = {}) {
        const url = `${baseURL}${endpoint}`;
        const config: RequestInit = {
          ...options,
          headers: {
            'Content-Type': 'application/json',
            ...(session?.accessToken && {
              Authorization: `Bearer ${session.accessToken}`,
            }),
            ...options.headers,
          },
        };

        const response = await fetch(url, config);
        return response.json();
      }
    };
  }, [session?.accessToken]);

  return { apiClient, session };
};
