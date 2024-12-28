// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import { Header } from './components/Header'
import { Section } from './components/Section'
import ListItem from './components/ListItem'

const gameListData = [

    {
      url: "https://www.twitch.tv/directory/game/League%20of,%20Legends",
      imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
      alt: "Imagem do jogo League o, Legends",
    },
  
    {
      url: "https://www.twitch.tv/directory/game/VALORANT",
     imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
     alt: "Imagem do jogo Valorant",
    },
     
    {
      url: "https://www.twitch.tv/directory/game/Minecraft",
      imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
      alt: "Imagem do jogo Minecraft",
    },
  
    {
      url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
      imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg", 
      alt: "Imagem do jogo TFT",
    },
  
]

const channelListData = [

 {   
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brit",
  },
   
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },
    
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png",
    alt: "Imagemd d, Cellbit",
  },

]

const socialListData = [
  {
    url: "https://www.twitch.com/maykbrito",
    imageUrl: "/assets/twitch.svg",
    alt: "twitch do toni",
  },

  {
    url: "https://www.twitter.com/maykbrito",
    imageUrl: "/assets/twitter.svg",
    alt: "twitter do toni",
  },

  {
    url: "https://www.instagram.com/maykbrito",
    imageUrl: "/assets/instagram.svg",
    alt: "instagram do toni",
  },

  {
    url: "https://www.youtube.com/maykbrito",
    imageUrl: "/assets/youtube.svg",
    alt: "youtube do toni",
  },
]

function App() {
  
  return (
    <div className='App'>

      <Header/>

      <main>

        <Section 
        title = "meus jogos"
        subtitle = "Os games que eu mais curto jogar!"
        className = "games-list"
        >
          {
            gameListData.map((item) => (
              <ListItem 
                key={item.url} // Adicione uma chave única (key) para evitar warnings no React
                url={item.url} 
                imageUrl={item.imageUrl} 
                alt={item.alt} 
              />
            ))
          }

        </Section>

        <Section 
        title = "Canais e streamers"
        subtitle = "Lista de canais e transmissões que não perco!"
        className = "channel-list"
        >

        {
          channelListData.map((item) => (
            <ListItem 
              key={item.url} // Adicione uma chave única (key) para evitar warnings no React
              url={item.url} 
              imageUrl={item.imageUrl} 
              alt={item.alt} 
            />
          ))
        }

        </Section>

        <Section
          title = "Minhas Redes Sociais"
          subtitle = "entre em contato agora!"
          className = "social-list"
        >

          {
            socialListData.map((item) => (
              <ListItem
                key={item.url} // Adicione uma chave única (key) para evitar warnings no React
                url={item.url} 
                imageUrl={item.imageUrl} 
                alt={item.alt} 
              />

            ))
          }

        </Section>

      </main>
    </div>
  )
}

export default App
