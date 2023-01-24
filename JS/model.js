const model = {

    app: {
        currentPage: 'frontPage',
        currentUser: 'admin',
        currentPicture: 0, // 'img/picture1.jpg',  // src="/badebilde.jpg"
        
    },
    modal: 'none',
    

    inputs: {
        frontPage: {
        },
        bookingPage: {

            fleetChoice: null,
            packageChoice: '',
            comfortChoice: [],
            selectedDate: null,
            selectedHours: [],

        },
        blogPage: {

            titlePost: '',
            currentPost: '',

        },

    },

    data: { // Husk og fylle ut alle verdier
        packageOptions: [
            {
                fleetIds: [0,1],
                name: 'Jentekveld',
                price: 2000,
                time: 4,

            },
            {
                fleetIds: [0],
                name: 'Familie pakke',
                price: 500,
                time: 1,

            },
            {
                fleetIds: [],
                name: 'Standard pakke',
                price: 1000,
                time: 2,

            },

        ],

        comforts: [
            {
                Id: 0,
                name: 'Vin',
                price: 100,
            },
            {
                Id: 1,
                name: 'shampo og balsam',
                price: 100,
            },
            {
                Id: 2,
                name: 'håndkler',
                price: 100,
            },
            {
                Id: 3,
                name: 'mineralvann',
                price: 50,
            },
            {
                Id: 4,
                name: 'aroma',
                price: 80,
            },
            {
                Id: 5,
                name: 'Badekåpe',
                price: 200,
            },
        ],

        bookings: [
            {
                orderId: 1,
                fleetId: [0],
                chosenComforts: [1],
                chosenDate: ['01.01.2023'],
                chosenHours: ['13:00'],
                customer: 'Joakim',
                totalPrice: 100,
            },
        ],
        fleets: [
            {
                id: 0,
                name: 'Båt0',
            },
            {
                id: 1,
                name: 'Båt1',
            },
        ],

        blogPosts: [
            {
                postId: 1,
                postTitle: 'Blogg1',
                postText: 'Velkommen til mentalhelseblogg',
                postPicture: 'img/blogPicture1.jpg',
            },
            {
                postId: 2,
                postTitle: 'Blogg2',
                postText: 'Velkommen til Mental helse',
                postPicture: 'img/blogPicture2.jpg',
            },
        ],
        
        blogPictures: ['img/blogPicture1.jpg','img/blogPicture2.jpg'],
        frontPagePictures: ['img/picture1.jpg', 'img/picture2.jpg', 'img/picture3.jpg',],

        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], //funker det å ha denne her?





    },


}
// Hvordan går man frem for og lage en kalender og data modell for det?
// Datafunksjoner for priser i kalender
//
//Hvordan lagre datoer med priser? controller-funksjon som regner ut pris og ser om dag valgt er helg eller ikke?
//