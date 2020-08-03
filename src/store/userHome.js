// import myRooms from '../components/userHome/myRooms';
import * as roleData from './signINUPReducer'
import cookie from 'react-cookies';
require('dotenv').config();



// const API = 'https://rooms-for-geeks.herokuapp.com';
// const API = 'http://localhost:4000';
const API = process.env.REACT_APP_API;



let initialState = {
    myRooms: [{
        roomName: 'JavaScript',
        public: true,
        cookieAdminName: 'hadeel',
        createdTime: "2020-06-21T13:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
        _id: '1'
    }, {
        roomName: 'Python',
        public: true,
        cookieAdminName: 'Bashar',
        createdTime: "2020-07-15T18:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
        _id: '2'
    },],
    allRooms: [{
        roomName: 'JavaScript',
        public: true,
        cookieAdminName: 'hadeel',
        createdTime: "2020-06-21T13:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
        _id: '1'
    }, {
        roomName: 'Python',
        public: true,
        cookieAdminName: 'Bashar',
        createdTime: "2020-07-15T18:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
        _id: '2'
    }, {
        roomName: 'Java',
        public: true,
        cookieAdminName: 'Samer',
        createdTime: "2020-06-7T22:18:24.483Z",
        members: [],
        password: false,
        oranaizationType: 'none', //defualt global room
        _id: '3'
    }],
    checkMyRooms: true,
    choosenRoomID: '',
    showAllRooms: false,
    categoryImages: {
        informationTechnology: [
            'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
            'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
            'https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1473831818960-c89731aabc3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1533120597534-ca28e7a4cd7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        ],
        science: [
            'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1535127022272-dbe7ee35cf33?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1582560486381-e6a01d8f5bb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
            'https://images.unsplash.com/photo-1574342117815-410a28ac4120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80',
            'https://images.unsplash.com/photo-1575468130718-697b2fa904dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
            'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1567665202038-6c5e97837696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
        ],
        math: [
            'https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1563212034-a3c52118cce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80',
            'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
            'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1523292426375-339a4ba8e0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        ],
        languages: [
            'https://images.unsplash.com/photo-1529203915787-cc54fa70a428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1486819118102-d9171cf69a92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
            'https://images.unsplash.com/photo-1517263869251-3d367cb6db21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1556696863-6c5eddae0f5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1515795552677-45e64de6dbca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1515325458032-82fb25824501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80',
            'https://images.unsplash.com/photo-1535054820380-92c41678b087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            'https://images.unsplash.com/photo-1468404166635-56e2d75ee491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1433444306168-f18e2a8dde77?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        ],
        sport: [
            'https://images.unsplash.com/photo-1487491506942-373c8f7a7ad5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
            'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1484452330304-377cdeb05340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1542446655-53a7e25c8fe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=895&q=80',
            'https://images.unsplash.com/photo-1550344681-a4572846afca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            'https://images.unsplash.com/photo-1505619656705-59ebc350b547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        ],
        nutrition: [
            'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=695&q=80',
            'https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
            'https://images.unsplash.com/photo-1542990253-a781e04c0082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=684&q=80',
            'https://images.unsplash.com/photo-1543352632-fea6d4f83e78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            'https://images.unsplash.com/photo-1455099229380-7b52707e356a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=819&q=80',
            'https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
            'https://images.unsplash.com/photo-1437750769465-301382cdf094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
            'https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        ],
        medicine: [
            'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
            'https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
            'https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1588623358844-fd118c056dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1533079299928-78eb7250f457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=892&q=80',
            'https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        ],
        art: [
            'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            'https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80',
            'https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
            'https://images.unsplash.com/photo-1460398495418-62c9b5d79fbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
            'https://images.unsplash.com/photo-1541662411770-fd2e3fc64781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
            'https://images.unsplash.com/photo-1441471349424-351990746ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1572081503349-3e96e33a6f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1561587327-41f8d18f71df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1534455700361-eca9c3dbc981?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        ],
        engineering: [
            'https://images.unsplash.com/photo-1573486095983-f95bf05c3ac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80',
            'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            'https://images.unsplash.com/photo-1574689049868-e94ed5301745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=728&q=80',
            'https://images.unsplash.com/photo-1540476547779-348beb642680?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1579257289814-5a7be042d61b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
            'https://images.unsplash.com/photo-1574170608909-d1ba0618cd78?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        ],
        economics: [
            'https://images.unsplash.com/photo-1586021280718-53fbadcb65a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1583574928052-9a2563277468?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1565372521778-8d8235695f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1583574928108-53be39420a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=695&q=80',
            'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
            'https://images.unsplash.com/photo-1513596846216-48ae70153834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1559589689-577aabd1db4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        ]
    },
    allCourses: [{ topic: 'sport', roomID: '1' },
    { topic: 'nutrition', roomID: '2' },
    { topic: 'math', roomID: '3' },
    ],
    roomsLength: 2,
    roomPrivatePass: ''
};

// reducer : switch case
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'favorite':
            console.log('payload', payload);
            state.myRooms = [...payload];
            return { ...state };

        case 'getAllRooms':
            state.allRooms = payload.res;
            state.allCourses = payload.response;
            return { ...state };
        case 'check':
            state.checkMyRooms = payload;
            return { ...state };

        case 'roomIDAction':
            console.log('payyyyyyy', payload);
            state.choosenRoomID = payload;
            return { ...state };
        case 'show-ALL':
            state.showAllRooms = !state.showAllRooms;
            return { ...state };
        // case 'getAllCourses':
        //     state.allCourses = payload;
        //     return { ...state };
        case 'Length':
            state.roomsLength = payload;
            return { ...state };
        case 'roomPass':
            state.roomPrivatePass = payload;
            return { ...state };


        default:
            return state;
    }
}

/*************************************************** actions ****************************************************** */

export const favRoom = (token, id) => async dispatch => {
    try {
        console.log('API', API);
        let results = await fetch(`${API}/favourite/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
        });
        let res = await results.json();
        console.log('res', res);
        if (res.length > 0) {
            dispatch(favorite(res));
            dispatch(check(true));
        }
        else {
            dispatch(favorite(initialState.myRooms));
            dispatch(check(false));
        }
        dispatch(updateLoader(false))

    } catch (error) {
        console.error(`ERROR: SIGNOUT`);
    }
}


export const updateLoader = e => {
    return {
        type: 'updateLoader',
        payload: e,
    }
}
export const rooms = (token) => async dispatch => {
    try {
        let r = await fetch(`${API}/allCourses`, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
        });
        let response = await r.json();
        // console.log('coursessssssssssss',response);
        // dispatch(getAllCourses(response));
        let results = await fetch(`${API}/rooms`, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
        });
        let res = await results.json();

        dispatch(getAllRooms(res, response));
        dispatch(allRoomsLength(res));
    } catch (error) {
        console.error(`ERROR: SIGNOUT`);
    }
}

export const upgrade = (token, id, role) => async dispatch => {
    console.log('token', token);
    console.log('id', id);
    console.log('role', role);
    try {
        let theApi = `${API}/user/${id}`;
        let results = await fetch(theApi, {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify({ role })
        });
        let res = await results.json();
        dispatch(upgradeAction(res))
        // cookie.remove('auth');
        cookie.save('auth', res.newToken);
        dispatch(userRole(role));
        dispatch(roleData.validateToken(res.newToken));
    } catch (error) {
        console.error(`ERROR: PUT_USER`);
    }
}

// export const courses = (token) => async dispatch => {
//     try {
//         let results = await fetch(`${API}/allCourses`, {
//             method: 'GET',
//             mode: 'cors',
//             headers: new Headers({
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }),
//         });
//         let res = await results.json();
//         console.log('coursessssssssssss',res);
//         dispatch(getAllCourses(res));
//     } catch (error) {
//         console.error(`ERROR: SIGNOUT`);
//     }
// }





export const allRoomsLength = res => {
    return {
        type: 'Length',
        payload: res.length
    }
}

export const roomID = (id) => async dispatch => {
    // console.log('roomIDAction', id);
    dispatch(roomIDAction(id))
}

export const roomPass = (pass) => async dispatch => {

    dispatch(roomPassword(pass))
}

export const showAllFun = () => {
    return {
        type: 'show-ALL',
        payload: ''
    }
}

export const roomPassword = (pass) => {
    return {
        type: 'roomPass',
        payload: pass
    }
}

export const userRole = payloadData => {
    return {
        type: 'USER_ROLE',
        payload: payloadData
    }
}

export const favorite = res => {
    console.log('resFav', res);
    return {
        type: 'favorite',
        payload: res,
    }
}

export const getAllRooms = (res, response) => {
    return {
        type: 'getAllRooms',
        payload: { res, response },
    }
}

export const getAllCourses = res => {
    return {
        type: 'getAllCourses',
        payload: res,
    }
}


export const check = res => {
    return {
        type: 'check',
        payload: res,
    }
}


export const upgradeAction = res => {
    return {
        type: 'upgrade',
        payload: res,
    }
}

export const roomIDAction = res => {
    return {
        type: 'roomIDAction',
        payload: res,
    }
}









