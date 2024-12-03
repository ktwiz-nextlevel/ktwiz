import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="w-dvw h-dvh flex flex-col justify-center items-center">
        <div className="w-40 h-40 animate-spin">
          <a href="https://github.com/kimpuro" target="_blank">
            <Image
              src="/images/mr-egg-sushi-trans.png"
              className="mr-egg-sushi"
              alt="mr-egg-sushi"
              width={300}
              height={300}
            />
          </a>
        </div>
        <h1 className="mb-2">Next.js 14.2.18</h1>
        <h1 className="mb-2">React 18</h1>
        <h1 className="mb-2">Tailwind CSS</h1>
      </div>
    </>
  );
}
