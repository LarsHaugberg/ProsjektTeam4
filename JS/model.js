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
            selectedDate: [],
            selectedHour: [],

        },
        blogPage: {

            currentPost: '',

        },

    },

    data: {
        packageOptions: [
            {
                name: '',
                price: 0,
            },
        ],
        comfort: [
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
                chosenDates:[],
                chosenHours:[],
                customer: '',
        },
    ],
        shownPicture: [],
        blogPosts: [],
        packages: ['pakke1'],
        fleets: ['båt1'],
    },


}