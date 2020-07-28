import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function UploadCategory() {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      
      <form>
        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>
      
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default UploadCategory;