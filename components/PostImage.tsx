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
    <div style={{ width }} className={centered ? "mx-auto" : ""}>
      <Image src={src} alt={alt} width={1200} height={800} />;
    </div>
  );
}
