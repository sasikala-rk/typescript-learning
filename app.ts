// import { toLowerCase } from ".";

// console.log(toLowerCase("maghil"));

let age: number;

type Qualification = string;

let qualification: Qualification = "true";
let isMarried: boolean = true;

// qualification.replace("t","q") // qrue

let anyValue: any = "maghil";

anyValue = 10;

anyValue.toFixed()
// anyValue.toLowerCase() error

// compile time error will not show for any method
qualification.replace(anyValue, "s")

let unknownType: unknown = "maghil";

let support = unknownType as number;


let mySize: undefined = undefined;

mySize = null;

let mySize2: null = null;

mySize = undefined;

// let familyMembers: string | number[] = ["amma", "appa", "maghil"]
// 👆 ithu error because onnu string ah irukanum ilana [1,2,3] ah irukanum

// let familyMembers: string[] | number[] = ["amma", "appa", "maghil"]     true

// let familyMembers: Array<string | number> = ["abc", 123];

let colors: readonly string[] = ["red", "blue"];

// colors.push() // error

console.log("sasi")
// colors.length = 2 // error

// tuples
const graph: [x: number, y: number] = [55.2, 41.3];

const temp: [number, string, boolean] = [10, "10", true];

//objects

interface IJob {
    title: string;
    salary: number;
    company: string;
    location: string;
    isRemote?: boolean;
}

interface IPerson {
    name: string;
    age: number;
    isMarried: boolean;
    gender: "Male" | "Female";
    skills: string[];
    currentJob: IJob;
    jobs: IJob[];
    "my-location": string;
}

const person: IPerson = {
    name: "sasi",
    age: 28,
    isMarried: true,
    gender: "Male",
    skills: ["HTML", "CSS"],
    currentJob: {
        company: "Recro",
        title: "SSE",
        salary: 100000,
        location: "Bangalore",
        isRemote: true
    },
    jobs: [
        {
            company: "Crayonte",
            salary: 8000,
            title: "FED",
            location: "Coimbatore",
            isRemote: false
        },
        {
            company: "Hero",
            salary: 21000,
            location: "Coimbatore",
            title: "FED"
        }
    ],
    "my-location": "cbe"
};

const key = "name";

// console.log(person.key); // this will return error
// .key nu oru property irukanu check panum.. so error adikkum

console.log(person[key]) // "sasi" nu return pannum

// key vanthu string ah irukanum, value => number ah matum tha irukanum
interface IMarks {
    [key: string]: number;
}

const marks: IMarks = {
    tamil: 50,
    english: 40,
    maths: 50,
    science: 20,
};

marks.social = 10;

console.log(marks)

// enums in TypeScript
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

var ageOne: string | number;

function sum(num1: number, num2: number, toFixed: boolean = false): number {
    if (!!toFixed) {
        return (num1 + num2) + 100;
    } else {
        return num1 + num2;
    }
}

const result: number = sum(10, 20);

interface IEmployee extends Omit<IPerson, 'age'> {
    empID: number;
    department: string;
};

const sasiDetails: IEmployee = {
    empID: 1,
    department: "IT",
    name: "sasi",
    isMarried: true,
    gender: "Male",
    skills: ["HTML", "CSS"],
    currentJob: {
        company: "Recro",
        title: "SSE",
        salary: 100000,
        location: "Bangalore",
        isRemote: true
    },
    jobs: [
        {
            company: "Crayonte",
            salary: 8000,
            title: "FED",
            location: "Coimbatore",
            isRemote: false
        },
        {
            company: "Hero",
            salary: 21000,
            location: "Coimbatore",
            title: "FED"
        }
    ],
    "my-location": "cbe"
};

interface IBrand {
    name: string,
    price: number,
    discount?: number,
    qty: number,
    reusable: boolean
}

interface IProduct {
    name: string,
    type: string,
    brands: IBrand[]
}

const products: IProduct[] = [
    {
        name: "Pencil",
        type: "Stationary",
        brands: [
            {
                name: "Absara",
                price: 10,
                discount: 5,
                qty: 100,
                reusable: false
            },
            {
                name: "Natraj",
                price: 8,
                discount: 3,
                qty: 400,
                reusable: false
            }
        ]
    },
    {
        name: "pen",
        type: "Stationary",
        brands: [
            {
                name: "Cello",
                price: 10,
                qty: 200,
                reusable: true
            },
            {
                name: "Re",
                price: 10,
                qty: 200,
                reusable: false
            },
        ]
    },
    {
        name: "Mixy",
        type: "Home Appliences",
        brands: [
            {
                name: "Preeti",
                price: 4000,
                qty: 100,
                reusable: true,
                "discount": 40
            }
        ]

    }
];

let obj = [
    [
        {
            "key-one": {
                "key-two": [
                    [
                        {
                            name: "maghil",
                        },
                        {
                            "key-three": [
                                {
                                    name: "sasikala"
                                }
                            ]
                        }
                    ]
                ]
            }
        }
    ]
];

let result1 = obj[0][0]["key-one"]["key-two"][0][1]["key-three"][0].name;
// console.log(result1) // sasikala

enum Gender {
    FEMALE = "Female",
    MALE = "Male"
}

interface IStudents {
    name: string,
    age: number,
    gender: Gender,
    medium: "Tamil" | "English",
    isMarried: boolean,
    marks: IMarks,
    skills: ISkills[],
}

interface ISkills {
    name: string,
    exp: number
}

const students: IStudents[] = [
    {
        name: "Sasikala",
        age: 28,
        gender: Gender.FEMALE,
        medium: "Tamil",
        isMarried: true,
        marks: {
            tamil: 35,
            english: 35,
            maths: 35,
            science: 35,
            social: 35,
        },
        skills: [
            {
                name: "HTML",
                exp: 4
            }, {
                name: "CSS",
                exp: 4
            }, {
                name: "JS",
                exp: 4
            }
        ]
    },
    {
        name: "maghil bharathi",
        age: 25,
        gender: Gender.MALE,
        medium: "Tamil",
        isMarried: true,
        marks: {
            tamil: 100,
            english: 100,
            maths: 100,
            science: 100,
            social: 100,
        },
        skills: [
            {
                name: "HTML",
                exp: 4
            }, {
                name: "CSS",
                exp: 4
            }, {
                name: "JS",
                exp: 4
            }
        ]
    }
];

interface IMultiply {
    name: string;
    age: number;
    gender: Gender;
}

function multiply(name: string, age: number, gender: Gender): IMultiply {
    return ({
        name: name,
        age: age,
        gender: gender
    })
}

const output: IMultiply = multiply("Sasikala", 28, Gender.FEMALE);

function addNos(no1, no2, ...rest: number[]) {
    return rest
};

const total = addNos(1, 2, 3, 4, 5, 6, 7, 8, 9);

// console.log(total)

let x: unknown = 4;
console.log((x as string).length);

const dummyFun = () => {
    return "yes this card can drive"
};

const car = {
    modal: "Latest",
    rate: 100000000000,
    isEV: false,
    features: ["asd", "jbdns", "khkasdb"],
    drive: dummyFun
};

car.drive();

let okok = car.drive();

const electionResult: unknown = true;
const electionResultCopy = <boolean>electionResult;

// Partial makes all properties as optional
const maghilJob: Partial<IJob> = {
    company: "IK",
    location: "BAN",
    salary: 21,
    // title: "1212" // => this will not return error
};

interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

const nameAgeMap: Record<string, boolean> = {
    Alice: true,
    25: false
};

let myCarOne: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

function myFun(param1: number){
    console.log("function is running");
    return "my value"
}

let variOne = myFun(1); // my value
let variTwo = myFun;
// variTwo();