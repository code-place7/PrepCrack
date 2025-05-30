import Agent from "@/components/Agent";
import { getCurrentUser } from "@/app/api/auth/signin/route";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

      <Agent />
    </>
  );
};

export default Page;
