import './components/header.js';
import '../assets/css/containers/main.sass';
import './components/listInfo';
import './components/headerEvent';
import logo from '../assets/images/header.png';
import userPhoto from '../assets/images/user.jpg';

const header = document.querySelector('o-header');
header.imageLogo = logo;
header.user = {
  mail: 'correo@mail.com',
  photo: userPhoto,
  name: 'Tonalli'
};
