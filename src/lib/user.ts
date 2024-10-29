export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    isVerified: true,
    createdAt: true, // Include this line to select createdAt
    _count: {
      select: {
        posts: true,
        followers: true,
      },
    },
    followers: {
      where: {
        followerId: loggedInUserId,
      },
    },
  };
}