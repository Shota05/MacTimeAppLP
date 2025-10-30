import { en } from "../../../lib/bluePrint/copy";
import ClientHome from "@/components/bluePrint/ClientHome";
type Props = { searchParams?: { v?: string } };

export default function Page({ searchParams }: Props) {
  const variantKey = (searchParams?.v ?? "a").toLowerCase() as "a" | "b" | "c";
  const hero =
    en.hero.variants.find((v) => v.key === variantKey) ?? en.hero.variants[0];

  // Pass computed hero + copy to a client component
  return <ClientHome hero={hero} copy={en} />;
}
