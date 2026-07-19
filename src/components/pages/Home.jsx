<div className="min-h-screen bg-yellow-600 flex items-center justify-center p-2 sm:p-4">
  <div className="relative min-h-screen w-full sm:w-[90vw] max-w-5xl bg-amber-50 overflow-hidden">

    {/* Background heading — fluid size, no jump cuts */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2">
      <div
        className="font-bold text-black leading-none tracking-tight text-center"
        style={{ fontSize: 'clamp(1.5rem, 7vw, 6rem)' }}
      >
        <div>NOIR</div>
        <div>INDEX</div>
        <div>A BLACK</div>
        <div>OWNED GUIDE</div>
      </div>
    </div>

    {/* Header — stays top-left, absolute, just like original */}
    <div className="absolute top-0 left-0 z-20 p-3 sm:p-6">
      <div className="text-sm sm:text-lg font-bold">NOIREX</div>
      <div className="text-xs sm:text-sm">
        Welcome, <strong>{user?.name || "Guest"}</strong>
      </div>
      {!user ? (
        <>
          <Link to="/Login" className="block text-xs sm:text-sm hover:underline">Login</Link>
          <Link to="/SignUp" className="block text-xs sm:text-sm hover:underline">Sign Up</Link>
        </>
      ) : (
        <>
          <Link to="/Submit" className="block text-xs sm:text-sm hover:underline">Submit a Business</Link>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/Home";
            }}
            className="text-left text-xs sm:text-sm text-red-700 hover:underline"
          >
            Logout
          </button>
        </>
      )}
    </div>

    {/* Nav — stays top-right, absolute, wraps if needed */}
    <div className="absolute top-0 right-0 z-20 p-3 sm:p-6 flex flex-wrap justify-end gap-2 sm:gap-6 text-xs sm:text-sm max-w-[60%] sm:max-w-none">
      <Link to="/Eats">Eats</Link>
      <Link to="/Drinks">Drinks</Link>
      <Link to="/Arts">Art</Link>
      <Link to="/Law">Law</Link>
      <Link to="/Therapy">Therapy</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About Us</Link>
    </div>

    {/* Right info panel — stays absolute top-24 right-4, just shrinks */}
    <div className="absolute top-20 sm:top-24 right-3 sm:right-4 text-xs sm:text-sm text-right space-y-1 sm:space-y-2 z-20">
      <div className="text-lg sm:text-2xl font-semibold">025</div>
      <div className="text-lg sm:text-2xl font-semibold">NYC EDITION</div>
      <div>
        <div>Brooklyn</div>
        <div>Bronx</div>
        <div>Manhattan</div>
        <div>Queens</div>
        <div>Staten Island</div>
      </div>
    </div>

  </div>
</div>