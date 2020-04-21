import './components/header.js';
import '../assets/css/main.scss';
import logo from '../assets/images/header.png';
import userPhoto from '../assets/images/user.jpg';

const header = document.querySelector('header-app');
header.imageLogo = logo;
header.user = {
  mail: 'correo@mail.com',
  photo: userPhoto,
  name: 'Tonalli'
};