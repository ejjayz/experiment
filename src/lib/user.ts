export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    isVerified: true, // Ensure this line is present
    createdAt: true,  // Ensure this line is also present
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