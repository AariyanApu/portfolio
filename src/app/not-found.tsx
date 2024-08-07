import Link from "next/link";

export default function Error() {
  return (
    <section>
      <div className="to-lgreen h-[10dvh] w-full bg-gradient-to-b from-white"></div>
      <div className="from-lgreen to-dgreen flex h-[90dvh] w-full flex-col items-center justify-center bg-gradient-to-b px-10 text-center text-white">
        <div className="-mt-60 flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Error 404 | Page Not found</h1>
          <p className="text-sm">
            It seems the page you&apos;re looking for does not exist!
          </p>
          <Link href="/" className="text-2xl font-semibold underline">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
