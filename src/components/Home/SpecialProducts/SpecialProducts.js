import React from "react";

import CardProduct from "../../UI/Card/CardProduct";

const specialProducts = () => (
  <section className="container">
    <h2>SPECIAL PRODUCTS</h2>
    <div className="listbundle">
      {[...Array(4)].map((x, i) => (
        <CardProduct key={i} index={i + 1} />
      ))}
    </div>
  </section>
);

export default specialProducts;
