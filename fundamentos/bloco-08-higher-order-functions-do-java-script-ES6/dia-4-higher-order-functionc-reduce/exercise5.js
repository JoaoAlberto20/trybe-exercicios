const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
const containsA = (callback) => {
    const vezesOcorrencia = callback.reduce((acc, item) => acc + item.split(' ').reduce((acc, item) => {
        if (item === 'a' || item || 'A') {
            return acc + 1;
        } return acc;
    }, 0), 0);
    return vezesOcorrencia;
};

console.log(containsA(names));