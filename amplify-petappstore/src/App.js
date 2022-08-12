import './App.css';
import { useState } from 'react';
import { Pets } from "./ui-components";
import { NavBar } from "./ui-components";
import { Footer } from "./ui-components";
import { AddPet } from "./ui-components";
import { PetProfile } from "./ui-components";
import {   PetDetails } from './ui-components';
import { useTheme } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Storage } from "@aws-amplify/storage"




function App({ user, signOut }) {

  async function saveFile() {
    await Storage.put("test.txt", "Hello");
  }

  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const navbarOverrides = {
    
    Badge: {
      children: "User: " + user?.attributes?.email,
      fontFamily: "Arial",
    },
    
    Button: {
      onClick: signOut,
    },

    image: {
      src: "https://img.icons8.com/color/50/000000/cat",
    },

    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        //saveFile();
        setShowForm(!showForm);
      },
    },
  };

  const formOverride = {

    TextField29766922:  {
      placeholder: name
    },    
    TextField29766923: {
      placeholder: age
    },
    TextField29766924: {
      placeholder: breed
    },
    TextField31602675: {
      placeholder: about
    },
    TextField31602682:{
      placeholder: color
    },
    TextField31602689:{
      placeholder: image
    },

    Button31602706:{
      isDisabled: !updatePet ? true : false
    },
    Button29766926:{
      isDisabled: updatePet ? true : false
    },
    
    Icon: {
      style: {
        cursor: "pointer",
      },
      onclick: () => {
        setShowForm(false);
      },
    },
  };
  return (//how to insert overrides into forms ->> overrides={navbarOverrides}
    <div className="App"> 
      <NavBar width={"100%"} overrides={navbarOverrides} />
       <header className="App-header">
        {showDetails && 
            <PetDetails 
              pet={pet}
              style={{
                textAlign: "left",
                margin: "1rem",
              }}
              overrides={{
                Close: {
                  onClick: () => {
                    setShowDetails(false)
                  },
                  style: {
                    cursor: "pointer",
                  },
                }
              }}
              />
            }

        {showForm && (
          <AddPet
          pet={updatePet}
          overrides={formOverride} 
          style={{
            textAlign: "left",
            margin: "1rem",
          }}/>   
        )}
        <Pets 
          overrideItems={({ item, index}) => ({
            overrides: {
              Breed: { color: "blue"},
              
              //Profile Button
              Button31542693: {
                onClick: () => {
                    setShowDetails(!showDetails);
                    setPet(item)
                },
              },
              //Update Button
              Button31542703:{
                onClick: () => {
                  if (!showForm) setShowForm(true)
                  setUpdatePet(item)
                  setName(item.name)
                  setColor(item.color)
                  setAge(item.age)
                  setBreed(item.breed)
                  setAbout(item.about)
                  setImage(item.image)
                }
              }
            },
          })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
