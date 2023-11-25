import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  //* Estado del formulario con los valores iniciales
  const [formValues, setFormValues] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  //* Handle para hacer cambios en el formulario
  const handleInputChange = (e) => {
    // Clonamos el estado ya que hemos creado un objeto y no lo queremos mutar en cada inputChange
    const clone = JSON.parse(JSON.stringify(formValues));
    // Del clone, actualizamos el valor del campo en función del "name" del "target"
    clone[e.target.name] = e.target.value;
    setFormValues(clone);
  };

  //* Handle para mandar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Solicitud a la API y le pasamos el objeto con la info que añadimos al formulario
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        formValues
      );

      // Invocamos la función que actualiza el estado
      // 1o le pasamos el valor actual del estado
      // 2o Le pasamos el nuevo valor que en este caso es un objeto con las propiedades reiniciadas
      setFormValues((valorActual) => ({
        ...valorActual,
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-beer-page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
        />

        <br />

        <label htmlFor="tagline">Tagline </label>
        <input
          type="text"
          name="tagline"
          onChange={handleInputChange}
          value={formValues.tagline}
        />
        <br />

        <label htmlFor="description">Description </label>
        <textarea
          type="text"
          name="description"
          onChange={handleInputChange}
          value={formValues.description}
        />
        <br />

        <label htmlFor="firstBrewed">First Brewed </label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleInputChange}
          value={formValues.first_brewed}
        />
        <br />

        <label htmlFor="brewersTips">Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleInputChange}
          value={formValues.brewers_tips}
        />
        <br />

        <label htmlFor="attenuationLevel">Attenuation Level </label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleInputChange}
          value={formValues.attenuation_level}
        />
        <br />

        <label htmlFor="contributedBy">Contributed By </label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleInputChange}
          value={formValues.contributed_by}
        />
        <br />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
