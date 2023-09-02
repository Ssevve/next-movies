import { ClapperboardIcon } from 'lucide-react';

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <div className="text-primary">
                <ClapperboardIcon size={28} />
            </div>
            <span className="text-xl font-bold uppercase">Next Movies</span>
        </div>
    );
}
