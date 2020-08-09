import { Stocklist } from 'core/shared/interfaces/stocklist.interface';

export const stocklist: Stocklist[] = [
  {
    country: 'Spain',
    cityStocks: [
      {
        city: 'Valladolid',
        stocks: [
          {
            name: 'Oficina',
            address: 'Paseo del cauce 49/a, Valladolid',
            email: 'ofvall@recyclingofthings.com',
            site: 'www.recyclingofthings.com',
            phone: '+34 983 0000 12'
          }
        ]
      },
      {
        city: 'La Cisterniga',
        stocks: [
          {
            name: 'warehouse almacenes',
            address: 'Poligono de la Mora , 72 , Valladolid',
            email: 'nvvall@recyclingofthings.com',
            site: 'www.recyclingofthings.com',
            phone: '+34 983 0000 10'
          }
        ]
      }
    ]
  },
  {
    country: 'China',
    cityStocks: [
      {
        city: 'Shenzhen',
        stocks: [
          {
            name: 'Logistico',
            address: 'Baoan ming chen 2, 219',
            email: 'lgsz@recyclingofthings.com',
            site: 'www.recyclingofthings.com',
            phone: '+86 134 889123'
          }
        ]
      },
      {
        city: 'Hong Kong',
        stocks: [
          {
            name: 'Pickup',
            address: 'tisan chun building 342 , 19B',
            email: 'phk@recyclingofthings.com',
            site: 'www.recyclingofthings.com',
            phone: '+86 (0)40 790 288 08'
          }
        ]
      }
    ]
  },
  {
    country: 'Vanezuela',
    cityStocks: [
      {
        city: 'Caracas',
        stocks: [
          {
            name: 'Distribuidor',
            address: 'Calle reducto a municipal, edificio Saverio Russo',
            email: 'disccs@recyclingofthings.com',
            site: 'www.tiendamicro.com',
            phone: '+58 29 602-99-66'
          }
        ]
      }
    ]
  }
];
