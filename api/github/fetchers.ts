import { BASE_URL } from "@/constants/variable";
import { GitHubUser } from "./types";

export const fetchGithubUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);

    if (response.ok) {
        const data: GitHubUser[] = await response.json();
        return data;
    }

    throw new Error("Failed to fetch data.");
};