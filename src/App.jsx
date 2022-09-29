import "./index.css";
function App() {

  return (
    <main className="App xs:w-64 sm:w-80 my-20 lg:flex lg:w-80 mx-auto align-middle">
      <div className="sedanCard lg:w-80 lg:shrink-0 p-9 bg-bright-orange xs:rounded-t-lg lg:rounded-none lg:rounded-l-lg">
        <img src="/images/icon-sedans.svg" alt="" />
        <h2 className="text-3xl my-6 text-white">SEDANS</h2>
        <p className="text-light-gray text-sm">
          Choose a sedan for its affordability or excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <a className="rounded-full bg-white text-bright-orange py-3 px-6 inline-flex mt-6 sedanPill cursor-pointer">
          Learn More
        </a>
      </div>
      <div className="suvCard lg:w-80 lg:shrink-0 p-9 bg-dark-cyan">
        <img src="/images/icon-suvs.svg" alt="" />
        <h2 className="text-3xl my-6 text-white">SUVS</h2>
        <p className="text-light-gray text-sm">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <a className="rounded-full bg-white text-dark-cyan py-3 px-6 mt-6 suvPill cursor-pointer inline-flex">
          Learn More
        </a>
      </div>
      <div className="luxuryCard lg:w-80 lg:shrink-0 p-9 bg-very-dark-cyan xs:rounded-b-lg lg:rounded-none lg:rounded-r-lg">
        <img src="/images/icon-luxury.svg" alt="" />
        <h2 className="text-3xl my-6 text-white">LUXURY</h2>
        <p className="text-light-gray text-sm">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <a className="rounded-full bg-white text-very-dark-cyan py-3 px-6 mt-6 luxuryPill cursor-pointer inline-flex">
          Learn More
        </a>
      </div>
    </main>
  );
}

export default App;
