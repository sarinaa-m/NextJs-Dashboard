import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchGithubUsers } from "./fetchers";

enum QueryKeys {
    USERS = "users",
}

export const UseUsers = () =>
    useQuery({
        queryKey: [QueryKeys.USERS],
        queryFn: fetchGithubUsers,
    });

export const prefetchUsers = async (queryClient: QueryClient) =>
    await queryClient.prefetchQuery({
        queryKey: [QueryKeys.USERS],
        queryFn: fetchGithubUsers,
    });
