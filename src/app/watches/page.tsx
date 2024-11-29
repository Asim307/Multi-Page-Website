import React from "react";

const Watches = () => {
  const watchData = [
    {
      id: 1,
      name: "Rolex",
      price: 500,
      Description: "luxury watch",
      image: "/watch1.jpeg",
    },
    {
      id: 2,
      name: "Omega",
      price: 350,
      Description: "Sporty design",
      image: "/watches2.jpeg",
    },
    {
      id: 3,
      name: "Rado",
      price: 100,
      Description: "Elegant timepiece",
      image: "/watch3.jpeg",
    },
    {
      id: 4,
      name: "TAG Heuer",
      price: 80,
      Description: "Bold and Rugged",
      image: "/watch4.jpeg",
    },
    {
      id: 5,
      name: "Seiko",
      price: 120,
      Description: "Affortable and relaible",
      image: "/watch5.jpeg",
    },
    {
      id: 6,
      name: "Smart Watch",
      price: 35,
      Description: "Affortable Smart Watch",
      image: "/watch6.jpeg",
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 50,
      Description: "Stylish Smartwatch",
      image: "/watch7.jpeg",
    },
    {
      id: 8,
      name: "Smart Watch",
      price: 50,
      Description: "Elegant Smart Watch",
      image: "/watch8.jpeg",
    },
    {
      id: 9,
      name: "Smart Watch",
      price: 30,
      Description: "Normal Smart Watch",
      image: "/watch9.jpeg",
    },
    {
      id: 10,
      name: "Smart Watch",
      price: 60,
      Description: "Sporty Smart Watch",
      image: "/watch10.jpeg",
    },
    {
        id: 11,
        name: "Smart Watch",
        price: 70,
        Description: "Stunning Smart Watch",
        image: "/watch11.jpeg",
      },
      {
        id: 12,
        name: "Smart Watch",
        price: 35,
        Description: "Regular Smart Watch",
        image: "/watch12.jpeg",
      },
  ];
  return (
    <div>
      <div className='watches'>
        {watchData.map((watch) => (
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.Description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
