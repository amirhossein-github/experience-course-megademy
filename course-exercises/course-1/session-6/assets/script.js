/*
object school include
school >  classes : []

each classes include
classes > students : []

each students include
list of student [{1}, {2}, {3}]
*/
const school = {
    classes: [
        {
            classInfo: {
                name: 'A',
                type: 'Math',
                capacity: 20
            },
            students: [
                {
                    name: 'Behdakht',
                    family: 'Tawakkel',
                    phone: '02603460732',
                    address: 'Golestan, Ebadi Street, Shidasab Building',
                    GAD: 19.5,
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'not bad'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'great'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'nice'
                        }
                    ]
                },
                {
                    name: 'Khorhad',
                    family: 'Jannati',
                    phone: '02651148054',
                    address: 'East Azarbaijan Province, Frouten Street, Polad Building',
                    GAD: 15,
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'not bad'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'ok'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'good'
                        }
                    ]
                },
                {
                    name: 'Hafez',
                    family: 'Payor',
                    phone: '02625927307',
                    address: 'Mazandaran Province, Muhaddi Street, Saba Building',
                    GAD: 10,
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'really'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'bad'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'more practice'
                        }
                    ]
                }
            ]
        },
        {
            classInfo: {
                name: 'B',
                type: 'Public',
                capacity: 40
            },
            students: [
                {
                    name: 'Leith',
                    family: 'Taleghani',
                    phone: '02661718418',
                    address: 'Khuzestan Province, Qanei Street, Ayaz Building',
                    GAD: 20,
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'ok, you can get better'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'nice'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'very good'
                        }
                    ]
                },
                {
                    name: 'Sika',
                    family: 'Ebtekari',
                    phone: '02652931417',
                    address: 'Isfahan, Aali Street, Niro building',
                    GAD: 13,
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'ohh, how'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'cat get better'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'ok'
                        }
                    ]
                },
                {
                    name: 'Tahamtan',
                    family: 'Shirazi',
                    phone: '02607881184',
                    address: 'Fars Province, Ashtari Street, Artadekht Building',
                    GAD: 18.75,
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'Tums UP'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: ':)'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'perfect'
                        }
                    ]
                }
            ]
        }
    ]
}
console.log(school)