import type { GitRepository } from "./RepoViewer"

type EntryProps = {
    repoData: GitRepository,
}

export function RepoEntry({ repoData }: EntryProps) {

    return (
        <div>
            <li className="repo-list-item" key={repoData.name}>
                    {repoData.name} — ★ {repoData.stargazers_count} / ⑂ {repoData.forks_count}
            </li>
        </div>
    )
}