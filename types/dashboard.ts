import { GitHubUser } from "@/api/github/types"

export type DashboardProps = {
    users: GitHubUser[]
    fetchQueryData: () => void
}