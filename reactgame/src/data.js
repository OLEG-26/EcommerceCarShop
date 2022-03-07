import bcrypt from 'bcryptjs';

const data= {
   users: [
      {
        name: 'mabuX',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
      },
      {
         //customer
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
      },
    ],

    products:[
        {
            name: "812 Superfast Ferrari",
            category: "Car",
            image: "/images/Superfast.jpg",
            price: 1000000,
            countInStock: 10,
            brand: "Ferrari",
            rating: 2.5,
            numReview: 40,
            description: "The Ferrari 812 Superfast (Type F152M) is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta."
        },


        {
            name: "812 GTS Ferrari",
            category: "Car",
            image: "/images/GTS.jpg",
            price: 125000,
            countInStock: 0,
            brand: "Ferrari",
            rating: 4,
            numReview: 53,
            description: "The aim in developing the 812 GTS was to retain the exhilarating feeling of speed and power delivered by the berlinetta version in terms of accelerating, response times and agility",
        },


        {
            name: "SF90 Stradale Ferrari",
            category: "Car",
            image: "/images/Stradale.jpg",
            price: 3540200,
            countInStock: 10,
            brand: "Ferrari",
            rating: 5,
            numReview: 552,
            description: "The Ferrari SF90 Stradale (Type F173) is a mid-engine PHEV (Plug-in Hybrid Electric Vehicle) sports car produced by the Italian automobile manufacturer Ferrari. The car shares its name with the SF90 Formula One car with SF90 standing for the 90th anniversary of the Scuderia Ferrari racing team and Stradale meaning made for the road"
        },


        {
            name: "F8 Tributo",
            category: "Car",
            image: "/images/Tributo.jpg",
            price: 2800010,
            countInStock: 0,
            brand: "Ferrari",
            rating: 5,
            numReview: 640,
            description:"The F8 Tributo uses the same engine from the 488 Pista, a 3.9 L twin-turbocharged V8 engine which has a power output of 720 PS (530 kW; 710 hp) and 770 N⋅m (568 lb⋅ft) of torque, making it the most powerful conventional V8-powered Ferrari produced to date."
        },


        {

            name: "F8 Strider",
            category: "Car",
            image: "/images/Strider.jpg",
            price: 2230000,
            countInStock: 50,
            brand: "Ferrari",
            rating: 4.5,
            numReview: 302,
            description: "The F8 Strider uses the same engine from the 488 Pista, a 3.9 L twin-turbocharged V8 engine which has a power output of 720 PS (530 kW; 710 hp) and 770 N⋅m (568 lb⋅ft) of torque, making it the most powerful conventional V8-powered Ferrari produced to date."
        },

        
        {
            name: "488 Pista",
            category: "Car",
            image: "/images/Pista.jpg",
            price: 1750000,
            countInStock: 0,
            brand: "Ferrari",
            rating: 3,
            numReview: 99,
            description: "THE MOST POWERFUL V8 IN FERRARI HISTORY The Ferrari 488 Pista can punch out 720 cv at 8000 rpm, giving it the best speciﬁc power output in its class at 185 cv/l, while torque is higher at all engine speeds, peaking at 770 Nm (10 Nm more than the 488 GTB)."
        },

        {
            name: "488 Pista Spider",
            category: "Car",
            image: "/images/Spider.jpg",
            price: 4300000,
            countInStock: 0,
            brand: "Ferrari",
            rating: 4.5,
            numReview: 531,
            description: "The Ferrari 488 Pista Spider can punch out 720 cv at 8000 rpm, giving it the best speciﬁc power output in its class at 185 cv/l, while torque is higher at all engine speeds, peaking at 770 Nm (10 Nm more than the 488 GTB)."
        },


        {
            name: "Monza SP2",
            category: "Car",
            image: "/images/Monza.jpg",
            price: 7890000,
            countInStock: 0,
            brand: "Ferrari",
            rating: 5,
            numReview: 703,
            description: "The Ferrari Monza SP2, together with the Monza SP1, are the forerunners in a new concept, known as ‘Icona’ (Icon), that taps into a leitmotif of the most evocative cars in the company’s history to create a new segment of special limited series cars for clients and collectors. The intention is to use a modern aesthetic to reinterpret a timeless style, with technologically advanced components and the highest performance possible through continuous innovation."
        },

        /*
        {
            _id:"9",
            name: "Audi RS 3 Seda",
            category: "Car",
            image: "/images/Audi RS 3 Seda.png",
            price: 1666,
            countInStock: 0,
            brand: "Audi",
            rating: 4.5,
            numReview: 99,
            description: "Scary but Very Addicting Game"
        },

        {
            _id:"10",
            name: "RS 6 Avant",
            category: "Car",
            image: "/images/RS 6 Avant.png",
            price: 1666,
            countInStock: 0,
            brand: "Audi",
            rating: 4.5,
            numReview: 99,
            description: "Scary but Very Addicting Game"
        },

        {
            _id:"10",
            name: "R8 Coupe V10 Quattro",
            category: "Car",
            image: "/images/R8 Coupe.png",
            price: 1666,
            countInStock: 0,
            brand: "Audi",
            rating: 4.5,
            numReview: 99,
            description: "Scary but Very Addicting Game"
        },

        {
            _id:"10",
            name: "RS 5 Coupe",
            category: "Car",
            image: "/images/RS 5 Coupe.png",
            price: 1666,
            countInStock: 0,
            brand: "Audi",
            rating: 4.5,
            numReview: 99,
            description: "Scary but Very Addicting Game"
        },


*/

        



    
    ]
}

export default data;