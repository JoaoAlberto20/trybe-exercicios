
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const destructionArray = ({spring, summer, autumn, winter}) =>
  ([
    ...spring, ...summer, ...autumn, ...winter
  ]);

console.log(destructionArray(yearSeasons));


