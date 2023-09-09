import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[filter.sort]))
        }
    
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts;
