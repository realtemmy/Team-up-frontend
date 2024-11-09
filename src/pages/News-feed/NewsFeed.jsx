import Post from "@/features/post/Post";

const NewsFeed = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "https://via.placeholder.com/150",
      },
      content: "Loving this new feature! Excited to see more updates.",
      createdAt: "2024-11-09T12:34:56Z",
      likes: 23,
      comments: [
        {
          id: 1,
          user: {
            name: "Jane Smith",
            avatar: "https://via.placeholder.com/150",
          },
          content: "Totally agree! This feature is amazing.",
          createdAt: "2024-11-09T13:00:00Z",
        },
        {
          id: 2,
          user: {
            name: "Alex Brown",
            avatar: "https://via.placeholder.com/150",
          },
          content: "Can’t wait to try it myself.",
          createdAt: "2024-11-09T13:15:00Z",
        },
      ],
    },
    {
      id: 2,
      user: {
        name: "Sarah Lee",
        avatar: "https://via.placeholder.com/150",
      },
      content: "Anyone up for a coding challenge this weekend?",
      createdAt: "2024-11-08T08:15:45Z",
      likes: 17,
      comments: [
        {
          id: 1,
          user: {
            name: "Tom White",
            avatar: "https://via.placeholder.com/150",
          },
          content: "Count me in!",
          createdAt: "2024-11-08T09:00:00Z",
        },
      ],
    },
    {
      id: 3,
      user: {
        name: "Michael Green",
        avatar: "https://via.placeholder.com/150",
      },
      content: "Just finished a great workout! Feeling refreshed.",
      createdAt: "2024-11-07T14:25:30Z",
      likes: 42,
      comments: [
        {
          id: 1,
          user: {
            name: "Lisa Blue",
            avatar: "https://via.placeholder.com/150",
          },
          content: "Nice! Keep it up.",
          createdAt: "2024-11-07T15:30:00Z",
        },
        {
          id: 2,
          user: {
            name: "Chris Red",
            avatar: "https://via.placeholder.com/150",
          },
          content: "Great job!",
          createdAt: "2024-11-07T16:00:00Z",
        },
      ],
    },
  ];
  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default NewsFeed;
