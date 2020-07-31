import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/styles';
import useForm from '../../../hooks/useForm';

function UploadCategory() {
  const defaultValues = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { values, handleChangeValues, clearForm } = useForm(defaultValues);

  const [categories, setCategories] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setCategories([...categories, values]);

    clearForm();
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://aluraflixbeta.herokuapp.com/categories';

    fetch(URL).then(async (response) => {
      const responseServer = await response.json();
      setCategories([...responseServer]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {values.title}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.title}
          name="title"
          onChange={handleChangeValues}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.description}
          name="description"
          onChange={handleChangeValues}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.color}
          name="color"
          onChange={handleChangeValues}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default UploadCategory;
