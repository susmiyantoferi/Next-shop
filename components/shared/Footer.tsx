"use client";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constant";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full rounded-none text-gray-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/conditions-of-use">Conditions uf use</Link>
          <Link href="/page/privacy-policy">Privacy notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
        <p>{APP_NAME}, Inc or its affiliates</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-500">
        123, Main street | Indonesia
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
