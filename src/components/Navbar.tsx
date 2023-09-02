import ThemeToggler from '@/components/ThemeToggler';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>NextMovies</h1>
      <ThemeToggler />
    </header>
  );
}
