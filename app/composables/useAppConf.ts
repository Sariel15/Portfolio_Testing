export const useAppConf = () => {
  const config = useRuntimeConfig();

  return {
    githubUsername: config.public.githubUsername ?? 'Sariel15',
    fullName: config.public.fullname ?? 'Rhonee James Tolentino',
  };
};