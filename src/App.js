import React from "react";
//import mock from './mock';
//import Button from "./components/Button";

const listCustomer = [
  {
    id: 1,
    name: 'Isaque Al.',
    skills: ['React', 'Node', 'CSS', 'webpack']
  },
  
  {
    id: 2,
    name: 'João F.',
    skills: ['HTML', 'React Native', 'GO', 'JS']
  },
  
  {
    id: 3,
    name: 'Ivonete E.',
    skills: ['Assembliy']
  },
  
  {
    id: 4,
    name: 'Luciano M.',
    skills: ['C/C++', 'Python']
  }
];

const App = () => {

  
  const name = 'Digital Innovation One';
  
  const handleChange = (e) =>{
    const { value } = e.target;
    console.log(value);
    //alert(name);
  };
  
  const showEvent = (e) =>{
    console.log('Evento Clicado'),
    console.log(e),
    alert (name);
  };

  const Button = <button onClick = {showEvent}
    style = {{ borderRadius: '30px', color: 'blue' }}>
    Mostrar Evento...
  </button>;

  const handleClick = (e, id) => {
    console.log('Deletar Cliente');
    alert(`Id do Cliente: ${id}`);
  };

  const renderCustomers = (customer, index) =>{
    return(
      /*Olhar dentro do bloco de notas com o node de "código anterior"
      Usaremos o código anterior para fazer o "button com o delete"*/
      <div key = {`customer - ${customer.id}`}>
        <li>{customer.name} 
          <button onClick = {(e) => handleClick(e, customer.id)}>
            Deletar o Cliente
          </button>
        </li>
        {customer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return(
      <div style={{ paddingLeft: '30px' }} key={`skill - ${index}`}>
        <li>{skill}</li>
      </div>
    );
  };

  return(
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula!!</p>
      {Button}
      <input onChange = {handleChange}/>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};

export default App;