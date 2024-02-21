import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-20">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
          Your marketplace for high-quality {" "}
          <span className="text-blue-600">
            Digital Assets
          </span>
          .
        </h1>
        <p className="text-lg max-w-proset text-muted-foreground mt-6">
            Welcome  to DigitalHippo. Every assets on your platform is
            verified by our team to ensurre higher qulity standards.
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
