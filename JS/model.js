const model = {

    app: {
        currentPage: 'frontPage',
        currentUser: 'admin',
        currentPicture: 'img/picture1.jpg',  // src="/badebilde.jpg"
    },

    inputs: {
        frontPage: {
        },
        bookingPage: {

            fleetChoice: '',
            packageChoice: '',
            comfortChoice: [],
            selectedDate: '',
            selectedHour: [],

        },
        blogPage: {

            titlePost: '',
            currentPost: '',

        },

    },

    data: { // Husk og fylle ut alle verdier
        packageOptions: [
            {
                fleetId: 0,
                name: 'Jentekveld',
                price: 1000,

            },
        ],
        comforts: [
            {
                Id: 1,
                name: 'Vin',
                price: 100,
            },
        ],
        bookings: [
            {
                orderId: 1,
                fleetId: [0],
                chosenComforts: [1],
                chosenDates: ['01.01.2023'],
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
            }
        ],
        frontPagePictures: ['img/picture1.jpg', 'img/picture2.jpg', 'img/picture3.jpg',],





    },


}
// Hvordan går man frem for og lage en kalender og data modell for det?
// Datafunksjoner for priser i kalender
//
//Hvordan lagre datoer med priser? controller-funksjon som regner ut pris og ser om dag valgt er helg eller ikke?
//