import {userRoutes} from '@/models/routes.js';

export const headerData = [
  {
    link: `${userRoutes.DASHBOARD}`,
    name: 'Inicio',
    icon: 'IconHome'
  },
  {
    link: `${userRoutes.BOARD}`,
    name: 'Quadro',
    icon: 'IconUsersGroup'
  },
  {
    link: `${userRoutes.PROFILE}`,
    name: 'Perfil',
    icon: 'IconSettings'
  },
  {
    link: `${userRoutes.FINANCES}`,
    name: 'Finanças',
    icon: 'IconCurrencyDollar'
  },
]