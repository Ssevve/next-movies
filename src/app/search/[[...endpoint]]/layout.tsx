import Searchbar from '@/components/Searchbar/Searchbar';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container p-4">
      <Searchbar />
      <section>{children}</section>
    </section>
  );
}
