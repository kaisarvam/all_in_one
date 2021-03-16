import React, { useState, useEffect,useRef } from  'react';

const Dropdown = ({options,selected,onSelectedChange,label}) =>{

    const [open,setOpen] = useState(false);

    const ref = useRef();



    useEffect(()=>{

  const onBodyClick = (e)=>{

    if(ref.current!==null)
    {

        if(ref.current.contains(e.target))
        {
            return ;
        }
  
    setOpen(false);
    }
    
    };

  document.body.addEventListener('click',onBodyClick);

    

    return ()=>{

    document.body.removeEventListener('click', onBodyClick);
    
     };

    }, []);



    const renderedOptions = options.map((option)=>{


        if(option.value===selected.value)
        return null;
        else
        return (

         <div 
         key={option.value}
          className="item"
            onClick={ ()=>{
                onSelectedChange(option);
                console.log ("item clicked");
               
            
            }}
            >
                <div style={{color: `${option.value}`}}>
             {option.label} 
             </div>
         </div>  
        );

    });

    return (
    
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label"> {label}</label>
            <div 
            onClick= {(e)=>{
                setOpen(!open);
                console.log ("Dropdown clicked");
                // e.stopPropagation();
            
            }}
            className={`ui selection dropdown ${open ? 'visible active': ''}`}

            >
                <i className="dropdown icon"></i>
                <div className="text" style={{color: `${selected.value}`}} > Now selected : {selected.label} </div>
                <div className={`menu ${open ?'visible transition':''}`}>
                    {renderedOptions}
                </div>

            </div>

        </div>

    </div>
       
       );

};

export default Dropdown ;