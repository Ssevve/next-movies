import PersonImage from '@/components/PersonImage/PersonImage';
import Hoverable from '@/components/ui/Hoverable';

interface PersonCardProps {
  name: string;
  imagePath: string;
  children: React.ReactNode;
}

export default function CastPersonCard({ name, imagePath, children }: PersonCardProps) {
  return (
    <Hoverable>
      <div>
        <PersonImage imagePath={imagePath} alt={name} />
        <div>
          <h3 className="font-bold">{name}</h3>
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </Hoverable>
  );
}
