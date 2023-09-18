import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout/Layout";
import Inscription from "./Pages/Inscription/Inscription";
import Connexion from "./Pages/Connexion/Connexion";
import Error from './Pages/Error/Error';
import APropos from './Pages/APropos/APropos';
import Collection from './Pages/Collection/Collection';
import BD from './Pages/Livre/BD/BD';
import Manga from './Pages/Livre/Manga/Manga';
import Roman from './Pages/Livre/Roman/Roman';
import Album from './Pages/Musique/Album/Album';
import Chanson from './Pages/Musique/Chanson/Chanson';
import OP from './Pages/Musique/OP/OP';
import Profil from './Pages/Profil/Profil';
import RecupMDP from './Pages/RecupMDP/RecupMDP';
import Anime from './Pages/Video/Anime/Anime';
import DessinAnime from './Pages/Video/Dessin animé/DessinAnime';
import Film from './Pages/Video/Film/Film';
import Serie from './Pages/Video/Serie/Serie';


function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path:"/inscription",
        element:<Inscription/>,
        errorElement:<Error/>,
      },
      {
        path:"/connexion",
        element:<Connexion/>,
        errorElement:<Error/>,
      },
      {
        path:"/collection",
        element:<Collection/>,
        errorElement:<Error/>,
      },
      {
        path:"/apropos",
        element:<APropos/>,
        errorElement:<Error/>,
      },
      {
        path:"/bd",
        element:<BD/>,
        errorElement:<Error/>,
      },
      {
        path:"/manga",
        element:<Manga/>,
        errorElement:<Error/>,
      },
      {
        path:"/roman",
        element:<Roman/>,
        errorElement:<Error/>,
      },
      {
        path:"/album",
        element:<Album/>,
        errorElement:<Error/>,
      },
      {
        path:"/chanson",
        element:<Chanson/>,
        errorElement:<Error/>,
      },
      {
        path:"/op",
        element:<OP/>,
        errorElement:<Error/>,
      },
      {
        path:"/profil",
        element:<Profil/>,
        errorElement:<Error/>,
      },
      {
        path:"/recupmdp",
        element:<RecupMDP/>,
        errorElement:<Error/>,
      },
      {
        path:"/anime",
        element:<Anime/>,
        errorElement:<Error/>,
      },
      {
        path:"/dessinanime",
        element:<DessinAnime/>,
        errorElement:<Error/>,
      },
      {
        path:"/film",
        element:<Film/>,
        errorElement:<Error/>,
      },
      {
        path:"/serie",
        element:<Serie/>,
        errorElement:<Error/>,
      },
    ],
},
]);  

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
