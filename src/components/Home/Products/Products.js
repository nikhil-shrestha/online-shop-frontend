import React from "react";

import CardProduct from "../../UI/Card/CardProduct";

const products = () => (
  <section className="container">
    <h2>FEATURED PRODUCTS</h2>
    <div className="listbundle">
      {[...Array(8)].map((x, i) => (
        <CardProduct key={i} index={i + 1} />
      ))}
    </div>
  </section>
);

export default products;
