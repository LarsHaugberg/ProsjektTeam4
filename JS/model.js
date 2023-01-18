const model = {

    app: {
        currentPage: 'frontside',
        currentUser: '',
    },

    inputs: {
        frontPage: {

            currentPicture: '',

        },

        bookingPage: {

            fleetChoice: '',
            packageChoice: '',
            comfortChoice: [],
            selectedDate: '',
            selectedHour: [],

        },
        blogPage: {

            currentPost: '',

        },

    },

    data: {
        packageOptions: [
            {
                fleetId: null,
                name: '',
                price: 0,

            },
        ],
        comforts: [
            {
                Id: 1,
                name: 'produkt1',
                price: 0,
            },
        ],
        bookings: [
            {
                orderId: 1,
                fleetId: [],
                chosenComforts: [],
                chosenDates: [],
                chosenHours: [],
                customer: '',
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
        frontPagePictures: [],
        blogPosts: [],
        
        

    },


}
// Hvordan går man frem for og lage en kalender og data modell for det?
// Datafunksjoner for priser i kalender
//
//Hvordan lagre datoer med priser? controller-funksjon som regner ut pris og ser om dag valgt er helg eller ikke?
//