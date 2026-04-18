import type { GitRepository } from "./RepoViewer"
import { FiGithub } from "react-icons/fi";
import { FaCodeFork } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";

type EntryProps = {
    repoData: GitRepository,
}

export function RepoEntry({ repoData }: EntryProps) {

    return (
        <div className="repo-list-item">
            <div className="repo-list-item-content">
                {repoData.name}
            </div>
            
            <div className="repo-list-item-stats">
                <div>
                    <FaCodeFork />{repoData.forks_count}
                </div>
                <div>
                    <MdOutlineStar />{repoData.stargazers_count}
                </div>
            </div>
        </div>
    )
}