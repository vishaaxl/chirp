/* eslint-disable @next/next/no-img-element */
import type { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["post"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post } = props;
  return (
    <div
      className="flex items-center gap-4 border-b border-slate-400 px-4 py-8"
      key={post.id}
    >
      {post.content}
    </div>
  );
};

export default PostView;
