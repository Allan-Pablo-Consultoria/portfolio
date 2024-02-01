// utils/githubFetcher.ts
const GITHUB_USERNAME = 'allanpablo'; // Substitua pelo seu nome de usuário do GitHub

const fetchWithAuth = async (url: string) => {
  const headers = {
    Authorization:'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' //`token ${process.env.GITHUB_TOKEN}`,
  };
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.json();
};
  
export const fetchGitHubData = async () => {
  try {
    const userProfile = await fetchWithAuth(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const repositories = await fetchWithAuth(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    const orgsResponse = await fetchWithAuth(`https://api.github.com/users/${GITHUB_USERNAME}/orgs`);


    const organizations = await Promise.all(
      orgsResponse.map(async (org:any) => fetchWithAuth(`https://api.github.com/orgs/${org.login}`))
    );

    return { userProfile, repositories, organizations };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null; // Ou tratamento de erro adequado
  }
};