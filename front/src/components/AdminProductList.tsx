import React, { useEffect } from "react";
import "../css/AirconProductList.css";
import productsJson from "../aircon_product_test.json";
import Divider from "@mui/material/Divider";
import { config } from "../config";
import TatamiButtons from "./TatamiButtons";

function createProductList(argJson: any, selectedTatamiButton: string) {
  if (argJson == null) {
    return <div className="product-container"></div>;
  } else {
    return argJson[selectedTatamiButton].map((product_info: any) => {
      return (
        <>
          <div className="product-container">
            <img className="product-img" src={product_info.img} />
            <div className="product-detail-container">
              <div className="product-title">{product_info.title}</div>
              <div className="product-model">
                {product_info.model_year}年モデル
              </div>
              <Divider />
              <div className="product-price">{product_info.price}円</div>
            </div>
          </div>
          <Divider />
        </>
      );
    });
  }
}

async function getAirconProductsJson(setAirconProductsJson: any) {
  let response;
  try {
    response = await fetch(config.TOP_PRODUCTS_JSON_URL);
    setAirconProductsJson(await response.json());
    return await response.json();
  } catch (e) {
    return null;
  }
}

function AdminProductList() {
  const [selectedTatamiButton, setSelectedTatamiButton] = React.useState("6-8");
  const [airconProductsJson, setAirconProductsJson] = React.useState(null);

  useEffect(() => {
    getAirconProductsJson(setAirconProductsJson);
  }, []);

  return (
    <div className="aircon-product-list-container">
      <TatamiButtons onClick={setSelectedTatamiButton} />
      {createProductList(airconProductsJson, selectedTatamiButton)}
    </div>
  );
}

export default AdminProductList;
