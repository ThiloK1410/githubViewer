import { useEffect, useState } from "react"

type GitRepository = {
    name: string
    forks_count: number
    stargazers_count: number
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
        <ul className="repo-list">
            {repos.map((r) => (
                <li className="repo-list-item" key={r.name}>
                    {r.name} — ★ {r.stargazers_count} / ⑂ {r.forks_count}
                </li>
            ))}
        </ul>
    )
}

export default RepoViewer