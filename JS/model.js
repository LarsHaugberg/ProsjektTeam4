const model = {
    modal: 'none',
    app: {
        currentPage: 'frontPage',
        currentUser: 'admin',
        currentPicture: 0, // 'img/picture1.jpg',  // src="/badebilde.jpg"
        editorPicture: 0,
        modalContent: '',
    },

    inputs: {
        adminPageComfort: {
            // tilgjenlig ekstraprodukter box
            price: '',
            product:  '',
            // endre priser box
            weekdayPriceDay: '',
            weekdayPriceHour: '',
            weekendPriceDay: '',
            weekendPriceHour: '',
            // endre pakke box
            selectPackage: 0,
            packageProduct: '',
            weekendPrice: 0,
            weekdayPrice: 0,
            packageName: '',
            selectPackageDropdown: null,
            // legg til pakke box
            newPackageName: '',
            newPackageHouer: 1,
            newPackageWeekdayPrice: 0,
            newPackageWeekendPrice: 0,
        },

        loginPage: {
            userName: '',
            password: '',
        },
        newUserPage: {
            name: '',
            adress: '',
            phone: '',
            email: '',
            password: '',
            confirmedPassword: '',
        },
        frontPage: {
        },
        bookingPage: {

            fleetChoice: null,
            packageChoice: null,
            comfortChoices: [],
            selectedDate: new Date(),
            selectedHours: [],
            isDateSelected: false,

        },
        blogPage: {

            titlePost: '',
            currentPost: '',

        },

    },

    data: { // Husk og fylle ut alle verdier
        users: [
            {
                name: 'admin',
                adress: 'admin adresse',
                phoneNumber: 'admin tlf',
                email: 'admin@mail',
                password: '1234',
            },
            {
                name: 'test',
                adress: 'hytti heiti 3',
                phoneNumber: '12341234',
                email: 'test@gmail.com',
                password: '1234',
            },
            {
                name: 'ola norman',
                adress: 'hytti heiti 3',
                phoneNumber: '12341234',
                email: 'ola.norman@gmail.com',
                password: 'Sommer2020',
            },
        ],
        packageOptions: [
            {
                id: 0,
                name: 'Jentekveld (6 stk)',
                price: {
                    weekdayPrice: 5264,
                    weekendPrice: 7664,
                },
                hours: 4,
                comforts: [
                    { name: 'Vin',              quantity: 4, },
                    { name: 'shampo og balsam', quantity: 6, },
                    { name: 'håndklær',         quantity: 6, },
                    { name: 'mineralvann',      quantity: 6, },
                    { name: 'aroma',            quantity: 1, },
                    { name: 'Badekåpe',         quantity: 6, },
                ],
            },
            {
                id: 1,
                name: 'Jentekveld (4 stk)',
                price: {
                    weekdayPrice: 3454,
                    weekendPrice: 5184,
                },
                hours: 4,
                comforts: [
                    { name: 'Vin',              quantity: 3, },
                    { name: 'shampo og balsam', quantity: 4, },
                    { name: 'håndklær',         quantity: 4, },
                    { name: 'mineralvann',      quantity: 4, },
                    { name: 'aroma',            quantity: 1, },
                    { name: 'Badekåpe',         quantity: 4, },
                ],
            },
            {
                id: 2,
                name: 'Familie pakke (4 stk)',
                price: {
                    weekdayPrice: 1904,
                    weekendPrice: 2304,
                },
                hours: 1,
                comforts: [
                    { name: 'shampo og balsam', quantity: 4, },
                    { name: 'håndklær',         quantity: 4, },
                    { name: 'mineralvann',      quantity: 4, },
                    { name: 'aroma',            quantity: 1, },
                    { name: 'Badekåpe',         quantity: 4, },
                ],
            },
            {
                id: 3,
                name: 'Familie pakke (5 stk)',
                price: {
                    weekdayPrice: 2464,
                    weekendPrice: 2864,
                },
                hours: 1,
                comforts: [
                    { name: 'shampo og balsam', quantity: 5, },
                    { name: 'håndklær',         quantity: 5, },
                    { name: 'mineralvann',      quantity: 5, },
                    { name: 'aroma',            quantity: 1, },
                    { name: 'Badekåpe',         quantity: 5, },
                ],

            },
            {
                id: 4,
                name: 'Standard pakke (2 stk)',
                price: {
                    weekdayPrice: 1504,
                    weekendPrice: 2304,
                },
                hours: 2,
                comforts: [
                    { name: 'Vin',              quantity: 1, },
                    { name: 'shampo og balsam', quantity: 2, },
                    { name: 'håndklær',         quantity: 2, },
                    { name: 'mineralvann',      quantity: 2, },
                    { name: 'aroma',            quantity: 1, },
                    { name: 'Badekåpe',         quantity: 2, },
                ],

            },
        ],

        comforts: [
            {
                id: 0,
                name: 'Vin',
                price: 200,
            },
            {
                id: 1,
                name: 'shampo og balsam',
                price: 100,
            },
            {
                id: 2,
                name: 'håndkler',
                price: 100,
            },
            {
                id: 3,
                name: 'mineralvann',
                price: 50,
            },
            {
                id: 4,
                name: 'aroma',
                price: 80,
            },
            {
                id: 5,
                name: 'Badekåpe',
                price: 200,
            },
        ],

        bookings: [
            {
                orderId: 0,
                fleetId: 0,
                chosenPackage: null,
                chosenComforts: [1],
                chosenDate: new Date(),// string av booket dato
                chosenHours: [9, 10, 11, 12, 13, 14, 15, 16],
                customer: '',
                totalPrice: 0,
            },
        ],
        fleets: [
            {
                id: 0,
                name: 'Skarven',
                img: `<img src="img/picture1.jpg" alt="flåte1" width="268" height="188">`,
            },
            {
                id: 1,
                name: 'Måken',
                img: `<img src="img/picture3.jpg" alt="flåte2" width="268" height="188">`,
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

        blogPictures: [
            {
                imageLink: 'img/blogPicture1.jpg',
                editorBorder: 'white',
            },
            {
                imageLink: 'img/blogPicture2.jpg',
                editorBorder: 'white',
            },
        ],
        frontPagePictures: [
            {
                imageLink: 'img/picture1.jpg',
                pictureTitle: 'Picture1',
            },
            {
                imageLink: 'img/picture2.jpg',
                pictureTitle: 'Picture2',
            },
            {
                imageLink: 'img/picture3.jpg',
                pictureTitle: 'Picture3',
            }
            
        ],

        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], //funker det å ha denne her?
        hoursInDay: 24,

        prices: {
            weekdayPriceHour: 500,
            weekdayPriceDay: 3000,
            weekendPriceHour: 1000,
            weekendPriceDay: 5000,
        },
    },
}
// Hvordan går man frem for og lage en kalender og data modell for det?
// Datafunksjoner for priser i kalender
//
//Hvordan lagre datoer med priser? controller-funksjon som regner ut pris og ser om dag valgt er helg eller ikke?
// 
/*  forslag til sumeringen inputs for booking siden
vare    antal   sum
pakke4:    1   1504       
arstn
iaersnt
ernis
Timer     4    2000
vin       2     400
shogbalsm 1     100  
minevann  2     100
-------------------
total sum      4104

*/