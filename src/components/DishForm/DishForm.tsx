import { Dispatch, useEffect, useState, useCallback } from "react";
import { Field, InjectedFormProps, reduxForm, reset } from "redux-form";
import axios from "axios";
import Alert from "../UI/Alert";
import { AnyAction } from "@reduxjs/toolkit";
import { IDishForm } from "../../models/DishFormProps";
import {
  validateRequired,
  validateRequiredPizzaFields,
  validateRequiredSandwichFields,
  validateRequiredSoupFields,
} from "../../validations/dishFormValidations";

const DishForm: React.FC<InjectedFormProps<IDishForm>> = ({
  handleSubmit,
  change,
  pristine,
  invalid,
  error,
  submitSucceeded,
  submitFailed,
  submitting,
  reset,
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const fieldsToClear = [
        "no_of_slices",
        "diameter",
        "spiciness_scale",
        "slices_of_bread",
      ];
      for (let i = 0; i < fieldsToClear.length; i++) {
        change(fieldsToClear[i], null);
      }

      setSelectedType(event.target.value);
    },
    [change]
  );

  const resetForm = useCallback(() => {
    reset();
    setSelectedType(null);
  }, [reset]);

  useEffect(() => {
    if (submitSucceeded || submitFailed) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [submitSucceeded, submitFailed]);

  useEffect(() => {
    if (submitSucceeded) setSelectedType(null);
  }, [submitSucceeded]);

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-11/12 items-center py-5 px-3 lg:w-2/5 lg:px-16 lg:py-10 flex-col bg-bg-200 shadow-xl rounded-xl transition-all transform duration-150 ease-in-out "
      >
        <h1 className="text-black text-2xl font-bold pb-3">DISH FORM</h1>
        <div className="input-container-with-animation group">
          <Field
            className="input-with-animation peer"
            name="name"
            component="input"
            type="text"
            required
            validate={validateRequired}
          />
          <label htmlFor="name" className="label-with-animation">
            Name<span className="text-red-500">*</span>:
          </label>
        </div>
        <div className="flex flex-col lg:flex-row lg:pb-3 w-full">
          <div className="input-container">
            <label htmlFor="preparation_time">
              Preparation Time<span className="text-red-500">*</span>:
            </label>
            <Field
              className="input-default"
              name="preparation_time"
              component="input"
              type="time"
              step="1"
              required
              validate={validateRequired}
              placeholder="Preparation Time :"
            />
          </div>
          <div className="input-container">
            <label htmlFor="type">
              Type<span className="text-red-500">*</span>:
            </label>
            <Field
              className="input-default"
              name="type"
              component="select"
              onChange={handleTypeChange}
              required
              validate={validateRequired}
            >
              <option value="">Select a type...</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="sandwich">Sandwich</option>
            </Field>
          </div>
        </div>
        {selectedType === "pizza" && (
          <>
            <div className="input-container-with-animation group transition-all ease-in-out duration-300">
              <Field
                className="input-with-animation peer"
                name="no_of_slices"
                component="input"
                type="number"
                min="1"
                required
                validate={validateRequiredPizzaFields}
              />
              <label htmlFor="no_of_slices" className="label-with-animation">
                Number of slices<span className="text-red-500">*</span>:
              </label>
            </div>
            <div className="input-container-with-animation group">
              <Field
                className="input-with-animation peer"
                name="diameter"
                component="input"
                type="number"
                min="0"
                step="0.1"
                required
                validate={validateRequiredPizzaFields}
              />
              <label htmlFor="diameter" className="label-with-animation">
                Diameter<span className="text-red-500">*</span>:
              </label>
            </div>
          </>
        )}
        {selectedType === "soup" && (
          <div className="input-container-with-animation group">
            <Field
              className="input-with-animation peer"
              name="spiciness_scale"
              component="input"
              type="number"
              min="1"
              max="10"
              required
              validate={validateRequiredSoupFields}
            />
            <label htmlFor="diameter" className="label-with-animation">
              Spiciness Scale<span className="text-red-500">*</span>:
            </label>
          </div>
        )}
        {selectedType === "sandwich" && (
          <div className="input-container-with-animation group">
            <Field
              className="input-with-animation peer"
              name="slices_of_bread"
              component="input"
              type="number"
              min="1"
              required
              validate={validateRequiredSandwichFields}
            />
            <label htmlFor="slices_of_bread" className="label-with-animation">
              Number of Slices of Bread<span className="text-red-500">*</span>:
            </label>
          </div>
        )}
        <div className="flex flex-row my-4 space-x-5">
          <button
            className="button"
            type="submit"
            disabled={pristine || submitting || invalid}
          >
            {submitting && "Loading..."}
            {!submitting && !error && "Submit"}
          </button>
          <button className="button" onClick={resetForm}>
            Clear
          </button>
        </div>
        {showAlert && <Alert isError={!submitSucceeded} />}
      </form>
    </div>
  );
};

const submitForm = (values: IDishForm, dispatch: Dispatch<AnyAction>) => {
  return axios
    .post(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
      JSON.stringify(values),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      dispatch(reset("dishForm"));
    })
    .catch((error) => {
      throw new Error("Something went wrong");
    });
};

export default reduxForm<IDishForm>({
  form: "dishForm",
  onSubmit: submitForm,
})(DishForm);
