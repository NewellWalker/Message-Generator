// Code used to generate random message broken up into three parts,
// using RNG to pick out of array of strings for beginning, middle,
// and end

const first = ['Hi', 'Hello', 'Hey', 'Howdy'];

const second = ['friend,', 'amigo,', 'partner,', 'bud,'];

const third = ['have good day.', 'time get after it.', 'create the life you want.', 'dont fall shrot of your potential.'];

function message_gen() {
    console.log(`${first[Math.floor(Math.random() * 4)]} ${second[Math.floor(Math.random() * 4)]} ${third[Math.floor(Math.random() * 4)]}`);
}

message_gen();