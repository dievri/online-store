import React from "react";
import { arrayOf, shape, string, number } from "prop-types";
import { productPropTypes } from "../../common/propTypes";
import { ProductLink } from "../../components/ProductLink";

export const AdminPage = ({ productList }) => (
  <div>
    {productList.map(({ title, id }) => (
      <ProductLink key={id} id={id} title={title} />
    ))}
  </div>
);

AdminPage.propTypes = {
  productList: arrayOf(productPropTypes).isRequired
};
