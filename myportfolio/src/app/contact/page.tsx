import Nav from '../components/Navigation';

export default function Home() {
  return (
    <div>
      <Nav />

      <main className="p-4">
        <h1 className="text-h1-mobile sm:text-h1-desktop">Welcome to My Portfolio</h1>
        <p className="text-base-mobile sm:text-base-desktop">
          This is the main content of the page.
        </p>
      </main>
    </div>
  );
}
