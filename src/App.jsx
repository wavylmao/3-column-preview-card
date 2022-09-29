import "./index.css";
function App() {

  return (
    <main className="App xs:w-64 sm:w-80 my-20 lg:flex lg:w-80 mx-auto align-middle">
      <div className="sedanCard lg:w-80 lg:shrink-0 p-9 bg-bright-orange xs:rounded-t-lg lg:rounded-none lg:rounded-l-lg">
        <img src="/images/icon-sedans.svg" alt="" />
        <h1 className="text-3xl my-6 text-white">SEDANS</h1>
        <p className="text-light-gray text-sm">
          Choose a sedan for its affordability or excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="rounded-full bg-white text-bright-orange py-3 px-6 mt-6 sedanPillButton">
          Learn More
        </button>
      </div>
      <div className="suvCard lg:w-80 lg:shrink-0 p-9 bg-dark-cyan">
        <img src="/images/icon-suvs.svg" alt="" />
        <h1 className="text-3xl my-6 text-white">SUVS</h1>
        <p className="text-light-gray text-sm">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="rounded-full bg-white text-dark-cyan py-3 px-6 mt-6 pillBtn suvPillButton">
          Learn More
        </button>
      </div>
      <div className="luxuryCard lg:w-80 lg:shrink-0 p-9 bg-very-dark-cyan xs:rounded-b-lg lg:rounded-none lg:rounded-r-lg">
        <img src="/images/icon-luxury.svg" alt="" />
        <h1 className="text-3xl my-6 text-white">LUXURY</h1>
        <p className="text-light-gray text-sm">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="rounded-full bg-white text-very-dark-cyan py-3 px-6 mt-6 luxuryPillButton">
          Learn More
        </button>
      </div>
    </main>
  );
}

export default App;
