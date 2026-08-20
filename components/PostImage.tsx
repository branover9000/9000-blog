import Image from "next/image";

type PostImageProps = {
  src: string;
  alt: string;
  width: string;
  centered?: boolean;
};

export default function PostImage({
  src,
  alt,
  width,
  centered,
}: PostImageProps) {
  return (
    <div style={{ width }} className={`max-w-full overflow-hidden ${centered ? "mx-auto" : ""}`}>
      <Image src={src} alt={alt} width={1200} height={800} className="h-auto w-full" />;
    </div>
  );
}
