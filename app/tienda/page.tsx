import type { Metadata } from "next";
import { SEO_DATA } from "@/constants";
import Pos from "@/components/store/Pos";
import StoreHeader from "@/components/store/StoreHeader";

export const metadata: Metadata = {
  title: SEO_DATA.storeTitle,
};

export default function StorePage() {
  return (
    <div className="pos-page">
      <StoreHeader />
      <Pos />
    </div>
  );
}
