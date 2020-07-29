import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function UploadCategory() {
  const defaultValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function handleSubmit(event) {
    event.preventDefault();

    setCategories([...categories, values]);
    
    setValues(defaultValues);
  }

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChangeValues(event) {
    setValue(
      event.target.getAttribute('name'), 
      event.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.name}</h1>
      
      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.name}
          name="name"
          onChange={handleChangeValues}
        />

        <div>
          <label>
            Descrição:
            <textarea 
              type="text"
              value={values.description}
              name="description"
              onChange={handleChangeValues}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          value={values.color}
          name="color"
          onChange={handleChangeValues}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, id) => {
          return (
            <li key={`${category}${id}`}>
              {category.name}
            </li>
          );
        })}
      </ul>
      
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default UploadCategory;