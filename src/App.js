import React, { useState, useEffect} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import ISearch from './components/ISearch';
import Tube from './components/Tube';

const items = [
{
  title:'What is react',
  content:'React is a front end javascript framework'
},

{
  title:'Why use react?',
  content:'React is favourite js library among  web devs'
},

{
  title:'How do you use it ?',
  content:'You use react by using components'
}

];


const options = [
{
  label:'The color Red ' ,
  value : 'red'
},
{
  label:'The color Green' ,
  value :'green'
},
{
  label: 'The color Blue' ,
  value :'Blue'
},
];






// export default ()=>{
//   return (
//     <div>
//       <br/>
//       <Accordion item={items} /> 
//     </div> )
// };



// export default ()=>{
//   return (
//     <div>
//       <Search /> 
//     </div> )
// };

// dropdown test
// export default ()=>{


  //  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(false);
 


  
//   return (
//     <div>
//       <button  onClick ={ ()=> setShowDropdown(!showDropdown) }> Toggle dropdown </button>

//         { showDropdown ?

//      <Dropdown 
//       selected ={selected} 
//       onSelectedChange ={setSelected}
//       options={options}
//       /> : null
//       }
//     </div>
//      );
// };

// const showAccordion = ()=>{
//   if(window.location.pathname === '/')
// {
//   return <Accordion items={items}/>
// }
// };

// const showList =() => {
//   if(window.location.pathname === '/list')
//   {
//     return <Search />
//   }
// };

// const showDropdown = ()=>{
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />;
//   }

// };


// const showTranslate = ()=>{

//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }

// };



export default ()=>{
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header/>
    <Route path="/" >
      <Accordion items={items} />
    </Route>

    <Route path="/list" >
      <Search />
    </Route>

    <Route path="/dropdown" >
    <Dropdown 
    label="select a color"
    selected ={selected} 
    onSelectedChange ={setSelected}
    options={options}
    />
    </Route>

  <Route path="/translate" >
      <Translate  />
    </Route>

    <Route path="/imagesearch" >
      <ISearch  />
    </Route>

    <Route path="/Youtube" >
      <Tube  />
    </Route>



       
    </div>
     );
};