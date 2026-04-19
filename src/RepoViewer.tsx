import { useEffect, useState } from "react"
import { RepoEntry } from './RepoEntry'
import Tilt from "react-parallax-tilt"

export type GitRepository = {
    name: string
    forks_count: number
    stargazers_count: number
    description: string
    url: string
    language: string
    default_branch: string
    updated_at: string
}

type RepoViewerProps = {
    username: string,
}

function RepoViewer({ username }: RepoViewerProps) {
    const [repos, setRepos] = useState<GitRepository[]>([])

    useEffect(() => {
        const controller = new AbortController()

        fetch(`https://api.github.com/users/${username}/repos`, {
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) throw new Error(`GitHub API ${res.status}`)
                return res.json() as Promise<GitRepository[]>
            })
            .then(setRepos)
            .catch((err) => {
                if (err.name !== "AbortError") console.error(err)
            })

        return () => controller.abort()
    }, [username])

    return (
        <div className="repo-list">
            {repos.map((r) => (
                <Tilt tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}
                        glareEnable={true} glareColor="white" glarePosition="top" glareMaxOpacity={0.3} scale={1.1}>
                    <RepoEntry repoData={r} />
                </Tilt>
            ))}
        </div>
    )
}

export default RepoViewer