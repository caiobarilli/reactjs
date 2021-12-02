import React, { useState } from "react";
import PageTitle from "./Components/UI/PageTitle";
import List from "./Components/Form/ListFormData";
import Formulario from "./Components/Form/PageForm";

import { Container } from "reactstrap";

function App() {
  let example_data = [
    {
      name: "Teste",
    },
  ];

  const [data, setDataForm] = useState(example_data);

  const savePageFormData = (dataFormValues) => {
    setDataForm([...data, dataFormValues]);
  };

  return (
    <Container>
      <PageTitle text="Reactstrap Form!" />
      <List dataValues={data} />
      <Formulario sendPageFormData={savePageFormData} />
    </Container>
  );
}

export default App;
