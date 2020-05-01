
describe('Arrays', () => {
    let people = create();

    it('can be created', () => {
        expect(people.length).toEqual(5);
    });

    it('can be altered', () => {
        const testPerson = { first: "Jo", last: "Bennett" };
        // Add a person to the end of the array here
        people.push(testPerson);
        expect(people.length).toEqual(6);
        expect(people[5].first).toEqual("Jo");
        // Add a person to the front of the array here
        people.unshift(testPerson);
        expect(people.length).toEqual(7);
        expect(people[0].last).toEqual("Bennett");
        // Remove a person from the end of the array here 
        people.pop(testPerson);
        expect(people.length).toEqual(6);
        expect(people[5].first).not.toEqual("Jo");
        // Remove a person to the front of the array here
        people.shift();
        expect(people.length).toEqual(5);
        expect(people[0].last).not.toEqual("Bennett");
    });

    it('can loop two ways', () => {
        // loop through the persons array using "for in", console.logging each.
        for (p in people) {
            let thePerson = people[p];
            console.log(thePerson.first + " " + thePerson.last);
        }
        // loop through the persons array using "for of", console.logging each.
        for (p of people) {
            console.log(p.first + " " + p.last);
        }
    });

    it('can destructure', () => {
        // Create five variables called p1, p2, p3, p4, and p5. Each is a person
        // from your array of persons.  Use destructuring to do that
        [p1, p2, p3, p4, p5] = people;
        expect(p1).toEqual(people[0]);
        expect(p2).toEqual(people[1]);
        expect(p3).toEqual(people[2]);
        expect(p4).toEqual(people[3]);
        expect(p5).toEqual(people[4]);
    });

    it('can convert your array of people into an array of strings', () => {
        // Convert it here
        let arrayOfStrings = [];
        people.forEach( p => arrayOfStrings.push(`name: ${p.first} ${p.last}`));
        expect(arrayOfStrings[0])
            .toEqual(`name: ${people[0].first} ${people[0].last}`);
        expect(arrayOfStrings[1])
            .toEqual(`name: ${people[1].first} ${people[1].last}`);
        expect(arrayOfStrings[2])
            .toEqual(`name: ${people[2].first} ${people[2].last}`);
        expect(arrayOfStrings[3])
            .toEqual(`name: ${people[3].first} ${people[3].last}`);
    });
});

function create() {
    const people = [
        {
            first: "First",
            last: "Person",
        },
        {
            first: "Second",
            last: "Person",
        },
        {
            first: "Third",
            last: "Person",
        },
        {
            first: "Fourth",
            last: "Person",
        },
        {
            first: "Fifth",
            last: "Person",
        },
    ];

    return people;
}