const animals = ['puppy', 'cat'];

exports.animals = animals;
exports.showAnimals = function showAnimals() {
  animals.map((el) => {
    return console.log(el);
  });
};

// module.exports = {
//   animals,
//   showAnimals,
// };
