const peopleTree = {
  "Jack": "Ryan",
  "Louis": "Ryan",
  "Jane": "Louis",
  "Alice": "Jane",
  "Mary": "Jack",
  "Ryan": "John",
  "Watson": "Alice",
}

const ages = {
  'Jack': 23,
  'Ryan': 26,
  'Louis': 22,
  'Jane': 24,
  'Alice': 30,
  'Mary': 25,
  'John': 26,
  'Watson': 5
}

class Person {
  constructor(name, peopleTree, ages) {
    this.name = name;
    this.peopleTree = peopleTree;
    this.agesArr = ages;
    this.ancestorsNames = [];
  }

  /**
  *return array of person and there ancestors
  *
  * @memberof Person
  */
  ancestors() {
    const nameArray = [];
    const name = this.name;
    const peopleTree = this.peopleTree;
    let dad = peopleTree[name];

    // if name doesn't exists in data then return empty arrya.
    if (dad === undefined) return [];
    // otherwise find the ancestors and stroe them into the array and return it.
    else {
      nameArray.push(name, dad);
      Object.keys(peopleTree).forEach((key) => {
        if (dad === key) {
          nameArray.push(peopleTree[key]);
          dad = peopleTree[key];
        }
      });
    }
    this.ancestorsNames = nameArray;
    return nameArray;
  }

  /**
  *
  * returns array of person's age there ancestor's age
  * @memberof Person
  */
  ages() {
    const ageArray = [];
    const ancestorsNames = this.ancestorsNames;

    ancestorsNames.forEach((name) => {
      if (ages[name] !== undefined) ageArray.push(ages[name]);
    })

    return ageArray;
  }

}

const Jack = new Person('Jack', peopleTree, ages);

document.write('Print ancestors : ', Jack.ancestors() + "<br>");
document.write('Print ages : ', Jack.ages());