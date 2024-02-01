"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchGitHubData } from "@/app/utils/githubFetcher";

interface Repository {
  id: string;
  name: string;
  html_url: string;
  description: string | null; // A descrição pode ser nula
}

interface Organization {
  id: string;
  login: string;
  avatar_url: string;
}

interface UserProfile {
  name: string;
  avatar_url: string;
}

interface GitHubData {
  userProfile: UserProfile;
  repositories: Repository[];
  organizations: Organization[];
}
interface GitHubData {
  userProfile: UserProfile;
  repositories: Repository[];
  organizations: Organization[];
}

const GitHubProjects = () => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const githubData = await fetchGitHubData();
        setData(githubData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData(null); // ou trate o erro de forma mais específica
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Failed to load data.</div>;
  } else
    return (
      <div className="space-y-8 bg-mediumblue text-gray-700">
      {data.userProfile && (
        <div className="text-center">
          <Image src={data.userProfile.avatar_url} alt="Avatar do GitHub" className="mx-auto rounded-full" width={96} height={96} />
          <p className="mt-2 font-semibold">{data.userProfile.name}</p>
        </div>
      )}
    
      <h2 className="text-2xl font-bold text-center">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.repositories.map((repo) => (
          <a href={repo.html_url} key={repo.id} aria-label={`Visitar ${repo.name}`} className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{repo.description || "Descrição não disponível."}</p>
          </a>
        ))}
      </div>
    
      <h2 className="text-2xl font-bold text-center">Minhas Organizações</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {data.organizations.map((org) => (
          <div key={org.id} className="p-4 flex flex-col items-center text-center">
            <Image src={org.avatar_url} alt={`Logo de ${org.login}`} width={80} height={80} className="rounded-full" />
            <p className="mt-2">{org.login}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default GitHubProjects;
