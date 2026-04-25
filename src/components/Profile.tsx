import Image from "next/image";
import { profile } from "../../data/portfolio";

export const Profile = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 sm:flex-row px-6 py-10 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full bg-gray-200">
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </div>
<div className="text-center sm:text-left space-y-4">
  <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
    {profile.name}
  </h2>

  <p className="text-lg font-medium text-blue-600 relative inline-block after:block after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
    {profile.role}
  </p>

  <p className="leading-relaxed text-gray-700 transition-all duration-300 hover:text-gray-900 hover:tracking-wide">
    {profile.bio}
  </p>
</div>
    </section>
  );
};
