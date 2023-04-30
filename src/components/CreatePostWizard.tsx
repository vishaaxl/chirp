/* eslint-disable @next/next/no-img-element */
import { useUser } from "@clerk/nextjs";

const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex w-full gap-5">
      <img
        src={user.profileImageUrl}
        alt=""
        className="h-14 w-14 rounded-full"
      />
      <input
        type="text"
        placeholder="Type your content"
        className="w-full rounded-md border border-slate-400 bg-transparent p-4"
      />
    </div>
  );
};

export default CreatePostWizard;
