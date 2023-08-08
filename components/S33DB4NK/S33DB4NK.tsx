import React, { FC } from "react";
import { SwapForm, BuySellForm, ExchangePoolForm, Listings } from "./index";

const S33DB4NK: FC = () => {
  return (
    <div className="s33db4nk-container">
      <h1 className="s33db4nk-title">S33DB4NK</h1>
      <div className="s33db4nk-sub-container">
        <SwapForm />
        <BuySellForm />
        <ExchangePoolForm />
      </div>
      <Listings />
    </div>
  );
};

export default S33DB4NK;
