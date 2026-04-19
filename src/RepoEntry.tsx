import type { GitRepository } from "./RepoViewer"
import { FaCodeFork } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";


type EntryProps = {
    repoData: GitRepository,
}

export function RepoEntry({ repoData }: EntryProps) {

    return (
        <div className="repo-list-item">
            <div className="repo-list-item-content">
                <div className="repo-list-item-content-header">
                    <h4 className="repo-list-item-content-name">{repoData.name}</h4>
                    <p className="repo-description">{repoData.description}</p>
                </div>
                <div className="repo-list-item-content-footer">
                <MdOutlineUpdate style={{transform: "translate(0px, 2px)"}}/> {formatDistanceToNow(new Date(repoData.updated_at))}
                </div>
            </div>
            
            <div className="repo-list-item-stats">
                <div>
                    <FaCodeFork /> {repoData.forks_count}
                </div>
                <div>
                    <MdOutlineStar /> {repoData.stargazers_count}
                </div>
            </div>
        </div>
    )
}