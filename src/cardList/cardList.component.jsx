// import React, { useEffect, useState } from "react";
import "./cardList.style.css";

import Card from '../card/card.component';

const CardList = ({monsters}) => {
//   const [mon_name, setName] = useState("");
//   const [mon_email, setEmail] = useState("");
    console.log("monsters", monsters);

//   useEffect(() => {
    // let newName = monsters.map((monster) => monster.name);
    // setName(newName);
    // let newEmail = monsters.map((monster) => monster.email);
    // setEmail(newEmail);
    // console.log("new", newName, newEmail);
//   }, [monsters]);


    return (
        <div className="CardList">
            {monsters.map((monster) => {
                return (
                    // <div>
                    //     <h3>{monster.name}</h3>
                    //     <h3>{monster.email}</h3>
                    // </div>
                    console.log('monster map', [monster.name, monster.email]),
                    <Card key={monster.id} monster={monster} />
                )
            })}
        </div>


    //  <div className='CardList'>
    //      <h3>{mon_name}</h3>
    //      <h3>{mon_email}</h3>
    //  </div>

   );
 };

export default CardList;