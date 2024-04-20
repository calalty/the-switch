import { Switch } from "@/components/Switch";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";
import { Header } from "@/components/Header";
import SignInPage from "@/components/SignInPage";

export default async function Home() {
  const session = await getServerSession();

  return (
    <Providers session={session}>
      <Header session={session} />
      <SignInPage />
    </Providers>
  );
}