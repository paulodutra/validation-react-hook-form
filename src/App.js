import React from 'react';
import useForm from 'react-hook-form';


function App() {

  //Destructor no hook importado
  const { register, handleSubmit, watch, errors } = useForm();

  //Função que irá receber os dados após a validação do formulário
  const onSubmitForm = (data) => {
      console.log('dados do form' , data);

  }

  console.log(watch('name'))

  /**
   * ref: atributo jsx que registra o que será validado no input atráves da função register
   * e de um objeto com os tipos de validações a serem aplicados
   * 
   * errors: objeto criado, com base nos names dos inputs, caso não esteja vazio
   * significa que houve erro de validação. OBS: Esse processo acontece logo após a submissão
   * do formulário
   * 
   * watch: Atráves do name atribuito ao input é possível observar(assistir) as alterações 
   * que são feitas no campo. Funciona como um observable
   */

  return (
    <div className="form">
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <input type="text" name="name" ref={register({ required: true })} placeholder="Name" />
            {errors.name && <span>The field name is required</span>}
            <input type="number" name="age" ref={register({ required: true, min: 2})} placeholder="Age" />
            {errors.age && <span> The field age is required and min age 2</span>}
            <button type="submit">Send</button>
        </form>
    </div>
  );
}

export default App;
