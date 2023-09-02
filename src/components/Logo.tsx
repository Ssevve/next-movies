import Image from 'next/image';

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <div className="text-primary">
                <Image
                    src="/logo-image.png"
                    alt="Next Movies Logo"
                    width={28}
                    height={28}
                />
            </div>
            <span className="hidden text-xl font-bold uppercase sm:block">
                Next Movies
            </span>
        </div>
    );
}
