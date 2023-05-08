import { IDishForm } from "../models/DishFormProps";

export const validateRequired = (value: any) =>
  !value || value.length === 0 ? "Required" : null;

export const validateRequiredPizzaFields = (value: any, props: IDishForm) => 
  (props.type === "pizza" && (!value || value.length === 0)) ? "Required" : null;

export const validateRequiredSoupFields = (value: any, props: IDishForm) => 
  (props.type === "soup" && (!value || value.length === 0)) ? "Required" : null;

export const validateRequiredSandwichFields = (value: any, props: IDishForm) =>
  (props.type === "sandwich" && (!value || value.length === 0)) ? "Required" : null;