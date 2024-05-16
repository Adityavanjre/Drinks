import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ liquid }) => {
  if (!liquid) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found... </h4>
    );
  }

  const formattedDrinks = liquid.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((items) => {
        return <CocktailCard key={items.id} {...items} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
