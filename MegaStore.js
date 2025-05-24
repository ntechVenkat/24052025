import React, { useState } from "react";

const PriceCalculator = () => {
  const [weightType, setWeightType] = useState("standard");
  const [weight, setWeight] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  let discountedPrice;

  const weightTypeHandler = (e) => {
    setWeightType(e.target.value);
  };
  const weightHandler = (e) => {
    setWeight(e.target.value);
  };
  const totalPriceHandler = (e) => {
    setTotalPrice(e.target.value);
  };

  if (weightType === "standard") {
    discountedPrice = +totalPrice - +totalPrice * 0.06;
  } else if (weightType === "seasonal") {
    discountedPrice = +totalPrice - +totalPrice * 0.12;
  } else if (weightType === "weight" && weight <= 10) {
    discountedPrice = +totalPrice - +totalPrice * 0.06;
  } else if (weightType === "weight" && weight > 10) {
    discountedPrice = +totalPrice - +totalPrice * 0.18;
  } else {
    discountedPrice = totalPrice;
  }

  return (
    <div>
      <center className="m-5">
        <h1>Mega Store Project</h1>
        <p style={{ fontSize: "25px" }}>
          Reuirement : In the store billing stage implementing the discounts
          based on the conditions like, Standard, Seasonal, Weight less than or
          equal to 10kgs, Weight greater than 10 kgs have the discount
          percentages are 6%, 12%, 6%, 18% respectively.
        </p>
        <label htmlFor="type">Select Type</label>
        <br />
        <select
          id="type"
          name="type"
          value={weightType}
          onChange={weightTypeHandler}
        >
          <option value="standard">Standard</option>
          <option value="seasonal">Seasonal</option>
          <option value="weight">Weight</option>
        </select>
        <br />

        <label htmlFor="weight">Weight (kg) : </label>
        <br />
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={weightHandler}
        />
        <br />
        <label htmlFor="totalPrice">Total Price ($) : </label>
        <br />
        <input
          type="number"
          id="totalPrice"
          name="totalPrice"
          value={totalPrice}
          onChange={totalPriceHandler}
        />

        <div>
          Discounted price:
          <h3>{discountedPrice /*discounted price expected here */}</h3>
        </div>
      </center>
    </div>
  );
};

export default PriceCalculator;
