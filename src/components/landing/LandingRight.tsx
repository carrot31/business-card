"use client";
import Image from "next/image";

export default function LandingRight() {
  return (
    <div className="absolute left-[-150px] top-[-250px] flex flex-col gap-100 ">
      <div className="flex -rotate-[30deg] gap-50">
        <Image
          src="/images/business-card-back.svg"
          alt="business-card-back"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-back.svg"
          alt="business-card-back"
          width={400}
          height={0}
        />
      </div>
      <div className="flex -rotate-[30deg] gap-50">
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-back.svg"
          alt="business-card-back"
          width={400}
          height={0}
          className="fadeIn shadow-card"
        />
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
        />
      </div>
      <div className="flex -rotate-[30deg]  gap-50">
        <Image
          src="/images/business-card-back.svg"
          alt="business-card-back"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
          className="fadeIn2 shadow-card"
        />
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
        />
      </div>
      <div className="flex -rotate-[30deg]  gap-50">
        <Image
          src="/images/business-card-back.svg"
          alt="business-card-back"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-front.svg"
          alt="business-card-back"
          width={400}
          height={0}
        />
      </div>
      <div className="flex -rotate-[30deg]  gap-50">
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-back.svg"
          alt="business-card-back"
          width={400}
          height={0}
        />
        <Image
          src="/images/business-card-front.svg"
          alt="business_card"
          width={400}
          height={0}
        />
      </div>
    </div>
  );
}
