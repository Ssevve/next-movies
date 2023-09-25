import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex w-max items-center gap-2">
      <div className="text-primary">
        <Image src="/images/logo-image.svg" alt="Next Movies Logo" width={28} height={28} />
      </div>
      <span className="text-xl font-bold uppercase">Next Movies</span>
    </div>
  );
}
