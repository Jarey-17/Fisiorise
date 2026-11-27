import type { Metadata } from "next";
import { FEATURES, SEO_DATA, STORE_DATA } from "@/constants";
import Pos from "@/components/store/Pos";
import StoreHeader from "@/components/store/StoreHeader";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: SEO_DATA.storeTitle,
};

export default function StorePage() {
  return (
    <div className="pos-page">
      <StoreHeader />
      {FEATURES.store ? (
        <Pos />
      ) : (
        <main className="store-soon">
          <ComingSoon {...STORE_DATA.comingSoon} className="coming-soon--card" />
        </main>
      )}
    </div>
  );
}
