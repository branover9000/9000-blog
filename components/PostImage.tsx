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
    <div style={{ width }} className={`my-8 max-w-full overflow-hidden border border-border/20 shadow-soft ${centered ? "mx-auto" : ""}`}>
      <Image src={src} alt={alt} width={1200} height={800} className="h-auto w-full" />
    </div>
  );
}
