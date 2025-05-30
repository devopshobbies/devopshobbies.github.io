import axios from 'axios'
import type { JSX } from 'react'
import { FaNodeJs } from 'react-icons/fa'

export interface Repository {
  id: string
  name: string
  author: string
  description: string
  stars: number
  forks: number
  watchers: number
  language: string
  languageColor: string
  icon: JSX.Element
  updated: string
}

export interface GitHubRepo {
  id: number
  name: string
  owner: {
    login: string
  }
  description: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string | null
  updated_at: string
}

export class GitHubOrganizationRepos {
  private apiUrl = 'https://api.github.com'
  private iconMap: Record<string, JSX.Element> = {
    'JavaScript': (<h1> Icon </h1>),
    'TypeScript': <FaNodeJs />,
    'Node.js': <FaNodeJs />,
  }

  async getOrganizationRepos(orgName: string, maxRepos = 100): Promise<Repository[]> {
    try {
      const response = await axios.get<GitHubRepo[]>(
        `${this.apiUrl}/orgs/${orgName}/repos?per_page=${maxRepos}&sort=stars&direction=desc`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        },
      )

      const repos = response.data.map((repo: any): Repository => ({
        id: repo.id.toString(),
        name: repo.name,
        author: repo.owner.login,
        description: repo.description || 'No description provided',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        language: repo.language || 'Unknown',
        languageColor: this.getLanguageColor(repo.language),
        icon: this.getLanguageIcon(repo.language),
        updated: this.formatUpdatedDate(repo.updated_at),
      }))

      return repos.sort((a, b) => b.stars - a.stars)
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('GitHub API error:', error.response?.status, error.message)
        throw new Error(`Failed to fetch repositories: ${error.response?.status || error.message}`)
      }
      console.error('Unexpected error:', error)
      throw new Error('Failed to fetch repositories')
    }
  }

  async getTopStarredRepos(orgName: string, maxRepos = 10): Promise<Repository[]> {
    try {
      const response = await axios.get<GitHubRepo[]>(
        `${this.apiUrl}/orgs/${orgName}/repos?per_page=${maxRepos}`, // Removed the sorting from the API call for now
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        },
      )

      const repos = response.data.map((repo: any): Repository => ({
        id: repo.id.toString(),
        name: repo.name,
        author: repo.owner.login,
        description: repo.description || 'No description provided',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        language: repo.language || 'Unknown',
        languageColor: this.getLanguageColor(repo.language),
        icon: this.getLanguageIcon(repo.language),
        updated: this.formatUpdatedDate(repo.updated_at),
      })).sort((a, b) => b.stars - a.stars)

      return repos.slice(0, maxRepos)
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('GitHub API error:', error.response?.status, error.message)
        throw new Error(`Failed to fetch repositories: ${error.response?.status || error.message}`)
      }
      console.error('Unexpected error:', error)
      throw new Error('Failed to fetch repositories')
    }
  }

  private getLanguageColor(language: string | null): string {
    const colors: Record<string, string> = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Node.js': '#339933',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'Go': '#00ADD8',
      'Ruby': '#701516',
      'PHP': '#4F5D95',
      'Unknown': '#cccccc',
    }

    return colors[language || 'Unknown'] || '#cccccc'
  }

  private getLanguageIcon(language: string | null): JSX.Element {
    return this.iconMap[language || ''] || <FaNodeJs />
  }

  private formatUpdatedDate(dateString: string): string {
    const now = new Date()
    const updated = new Date(dateString)
    const diffInDays = Math.floor((now.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24))

    if (diffInDays === 0)
      return 'Updated today'
    if (diffInDays === 1)
      return 'Updated yesterday'
    return `Updated ${diffInDays} days ago`
  }
}

export default GitHubOrganizationRepos
