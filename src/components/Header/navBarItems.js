const navBarItems = [
  { 
    text: 'Inicio', 
    route: '/' 
  },
  { 
    text: 'Miembros', 
    route: '/members' 
  },
  { 
    text: 'Novedades', 
    route: '/news' 
  },
  {
    text: 'Actividades',
    route: '/activities'
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
