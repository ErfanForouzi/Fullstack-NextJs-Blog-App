import { Suspense } from "react";
import CardSkeleton from "./_components/CardSkeleton";
import CardsWrapper from "./_components/CardsWrapper";
import LatestPosts from "./_components/LatestPosts";
import TableSkeleton from "./_components/TableSkeleton";

const Profile = async () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<CardSkeleton />}>
        <CardsWrapper />
      </Suspense>
      <h2 className="text-xl font-bold mb-4 text-secondary-700"> آخرین پست ها</h2>
      <Suspense fallback={<TableSkeleton height={300} />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
};

export default Profile;
