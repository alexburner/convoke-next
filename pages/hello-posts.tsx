import { NextPage } from "next";
import { PostOrPage } from "@tryghost/content-api";

import { getPosts, getSettings } from "../util/ghost";

interface Props {
  posts: PostOrPage[];
}

const HelloPosts: NextPage<Props> = ({ posts }) => {
  getSettings().then(x => console.log(x));
  return (
    <>
      {posts.map(post => (
        <div
          key={post.id}
          className="post"
          dangerouslySetInnerHTML={{ __html: post.html || "" }}
        />
      ))}
    </>
  );
};

HelloPosts.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default HelloPosts;
