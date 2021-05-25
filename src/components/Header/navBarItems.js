const navBarItems = [
  { 
    text: 'Inicio', 
    route: '/' 
  },
  { 
    text: 'Miembros', 
    route: '/members',
    restricted: true 
  },
  { 
    text: 'Noticias', 
    route: '/news' 
  },
  {
    text: 'Testimonios',
    route: '/testimonialsform',
    restricted: true
  },
  {
    text: 'Contacto',
    route: '/contact'
  },
  {
    text: 'Administración',
    route: '/backoffice',
    restricted: true
  },
  { 
    text: 'Ingresar', 
    route: '/login' 
  },
  {
    text: 'Registrarse',
    route: '/signup'
  }
];

export default navBarItems;
