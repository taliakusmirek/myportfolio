export default async function Page() {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    return (
      <div>
        Home Page Content
      </div>
    )
  }