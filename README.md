# Criando button usando o react💥#

  ### Com o ótimo framework que o react é, utilizamos ele para criar alguns botões em meio de praticar a ferramenta. E, abaixo, disponibilizarei o código:###

1. ### _App.js_###

   import React from "react";

   //import mock from './mock';

   //import Button from "./components/Button";

   const listCustomer = [

     {

   ​    id: 1,

   ​    name: 'Isaque Al.',

   ​    skills: ['React', 'Node', 'CSS', 'webpack']

     },

     

     {

   ​    id: 2,

   ​    name: 'João F.',

   ​    skills: ['HTML', 'React Native', 'GO', 'JS']

     },

     

     {

   ​    id: 3,

   ​    name: 'Ivonete E.',

   ​    skills: ['Assembliy']

     },

     

     {

   ​    id: 4,

   ​    name: 'Luciano M.',

   ​    skills: ['C/C++', 'Python']

     }

   ];

   const App = () => {

     

     const name = 'Digital Innovation One';

     

     const handleChange = (e) =>{

   ​    const { value } = e.target;

   ​    console.log(value);

   ​    //alert(name);

     };

     

     const showEvent = (e) =>{

   ​    console.log('Evento Clicado'),

   ​    console.log(e),

   ​    alert (name);

     };

     const Button = <button onClick = {showEvent}

   ​    style = {{ borderRadius: '30px', color: 'blue' }}>

   ​    Mostrar Evento...

     </button>;

     const handleClick = (e, id) => {

   ​    console.log('Deletar Cliente');

   ​    alert(`Id do Cliente: ${id}`);

     };

     const renderCustomers = (customer, index) =>{

   ​    return(

   ​      /*Olhar dentro do bloco de notas com o node de "código anterior"

   ​      Usaremos o código anterior para fazer o "button com o delete"*/

   ​      <div key = {`customer - ${customer.id}`}>

   ​        <li>{customer.name} 

   ​          <button onClick = {(e) => handleClick(e, customer.id)}>

   ​            Deletar o Cliente

   ​          </button>

   ​        </li>

   ​        {customer.skills.map(renderSkills)}

   ​      </div>

   ​    );

     };

     const renderSkills = (skill, index) => {

   ​    return(

   ​      <div style={{ paddingLeft: '30px' }} key={`skill - ${index}`}>

   ​        <li>{skill}</li>

   ​      </div>

   ​    );

     };

     return(

   ​    <div>

   ​      <p>Digital Innovation One</p>

   ​      <p>Bem vindo a nossa aula!!</p>

   ​      {Button}

   ​      <input onChange = {handleChange}/>

   ​      <div>

   ​        <ul>

   ​          {listCustomer.map(renderCustomers)}

   ​        </ul>

   ​      </div>

   ​    </div>

     );

   };

   export default App;

2. ### _Button.js:_###

   import React from 'react';

   const Button = () => 

     <button>Olá!! =)</button>;

   export default Button;

3. ### _.eslincrc:_###

   {

   ​    "plugins": [

   ​        "react"

   ​    ],

   ​    "parser": "babel-eslint",

   ​    "parserOptions": {

   ​        "ecmaVersion": 11,

   ​        "sourceType": "module",

   ​        "ecmaFeatures": {

   ​            "jsx": true

   ​        }

   ​    },

   ​    "env": {

   ​        "es6": true,

   ​        "browser": true,

   ​        "node": true,

   ​        "mocha": true

   ​    },

   ​    "extends": [

   ​        "eslint:recommended",

   ​        "plugin:react/recommended"

   ​    ],

   ​    "rules": {

   ​        "semi":[

   ​            2,

   ​            "always"

   ​        ],

   ​        

   ​        "indent":[

   ​            "error",

   ​            2

   ​        ],

   ​        "object-curly-spacing":[

   ​            "error",

   ​            "always"

   ​        ],

   ​        "no-extra-parens":"error",

   ​        "max-len":[

   ​            "error",

   ​            {

   ​                "code": 100

   ​            }

   ​        ],

   ​        "no-multi-spaces":"error"

   ​    },

   ​    "settings": {

   ​        "react":{

   ​            "version":"16,8"

   ​        }

   ​    }

   }

4. ### _.bebelrc:_###

   {

   ​    "presets": [

   ​        "@babel/preset-env",

   ​        "@babel/preset-react"

   ​    ]

   }

5. ### _index.html:_###

   <!DOCTYPE html>

   <html lang="en">

   <head>

   ​    <meta charset="utf-8">

   ​    <title>webpack 4 + babel</title>

   ​    <link href="index.css" rel="index">

   </head>

   <body>

   ​    <div id="app"></div>

   </body>

   </html>

6. ### _App.test.js:_###

   import { render, screen } from '@testing-library/react';

   import React from 'react';

   import App from './App';

   test('renders learn react link', () => {

     render(<App />, React);

     const linkElement = screen.getByText(/learn react/i);

     // eslint-disable-next-line no-undef

     expect(linkElement).toBeInTheDocument();

   });