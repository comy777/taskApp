export const shedule = [
  {id: 1, day: 'Lunes', hours: ''},
  {id: 2, day: 'Martes', hours: ''},
  {id: 3, day: 'Miercoles', hours: ''},
  {id: 4, day: 'Jueves', hours: ''},
  {id: 5, day: 'Viernes', hours: ''},
];

export const validateDay = (day: string) => {
  let id: number = 0;
  shedule.map((i, index) => {
    if (i.day === day) {
      id = index + 1;
    }
  });
  return id;
};
