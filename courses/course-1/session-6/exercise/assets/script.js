/*
object school include
school >  classes : []

each classes include
classes > students : []

each students include
list of student [{1}, {2}, {3}]

each student include:
name, family, phone, address, GAD, studentID, teacherReviews,
*/
const school = {
    schoolInfo: {
        name: 'Shahid Bahonar',
        numberOfClasses: 15,
        numberOfEmployees: 30,
        numberOfTeachers: 3,
        schoolID: 299
    },
    classes: [
        {
            classInfo: {
                name: 'A',
                type: 'Math',
                capacity: 20,
                classID: '01'
            },
            students: [
                {
                    name: 'Behdakht',
                    family: 'Tawakkel',
                    phone: '02603460732',
                    address: 'Golestan, Ebadi Street, Shidasab Building',
                    GAD: 19.5,
                    studentID: '144',
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'not bad',
                            reviewID: 'b8954add-618e-4d90-a8c1-dc8ea9047741'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'great',
                            reviewID: '5aaa2e16-6f03-4f86-818e-377b52bade4a'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'nice',
                            reviewID: '75151a00-8d36-4cdc-b5b6-20c48d550f47'
                        }
                    ]
                },
                {
                    name: 'Khorhad',
                    family: 'Jannati',
                    phone: '02651148054',
                    address: 'East Azarbaijan Province, Frouten Street, Polad Building',
                    GAD: 15,
                    studentID: '122',
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'not bad',
                            reviewID: '653af630-e821-40c3-ab13-e2da902f0627'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'ok',
                            reviewID: 'f851f194-4dd1-4b21-aeff-eb544393ccde'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'good',
                            reviewID: 'bf7ffd8a-3d77-43a2-8bb2-cf341a8268da'
                        }
                    ]
                },
                {
                    name: 'Hafez',
                    family: 'Payor',
                    phone: '02625927307',
                    address: 'Mazandaran Province, Muhaddi Street, Saba Building',
                    GAD: 10,
                    studentID: '167',
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'really',
                            reviewID: '1e662e2d-90ee-4dc3-b180-ed3b54387cb5'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'bad',
                            reviewID: '922840d6-9c57-464f-9cc3-5fab0d311c76'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'more practice',
                            reviewID: 'd505f720-e5ab-4e5a-910b-d48e800771ba'
                        }
                    ]
                }
            ]
        },
        {
            classInfo: {
                name: 'B',
                type: 'Public',
                capacity: 40,
                classID: '02'
            },
            students: [
                {
                    name: 'Leith',
                    family: 'Taleghani',
                    phone: '02661718418',
                    address: 'Khuzestan Province, Qanei Street, Ayaz Building',
                    GAD: 20,
                    studentID: '220',
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'ok, you can get better',
                            reviewID: '453d406d-98d9-4c9f-b46d-095236d0a9a7'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'nice',
                            reviewID: '569b9aa0-29fe-47f1-bad9-9eb20e6a911b'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'very good',
                            reviewID: 'cd7d8e81-c400-4e35-98e7-373cbbc8ce46'
                        }
                    ]
                },
                {
                    name: 'Sika',
                    family: 'Ebtekari',
                    phone: '02652931417',
                    address: 'Isfahan, Aali Street, Niro building',
                    GAD: 13,
                    studentID: '546',
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'ohh, how',
                            reviewID: 'c2535808-bf15-494d-bfbb-a81690a1551a'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: 'cat get better',
                            reviewID: '96dc12e8-e58b-4ca5-ae94-e64137edd5d7'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'ok',
                            reviewID: '6d520e95-2d53-4be4-adcd-0399de71d964'
                        }
                    ]
                },
                {
                    name: 'Tahamtan',
                    family: 'Shirazi',
                    phone: '02607881184',
                    address: 'Fars Province, Ashtari Street, Artadekht Building',
                    GAD: 18.75,
                    studentID: '312',
                    teacherReviews: [
                        {
                            teacherName: 'khateri',
                            semester: '4',
                            comment: 'Tums UP',
                            reviewID: 'a510624c-89f8-4cee-8155-250ebbc80b21'
                        },
                        {
                            teacherName: 'kargar',
                            semester: '4',
                            comment: ':)',
                            reviewID: '5934db3a-cbf7-4a7f-b967-f543363e281b'
                        },
                        {
                            teacherName: 'heydari',
                            semester: '4',
                            comment: 'perfect',
                            reviewID: 'e81ec5b2-8951-449d-804e-fe16f666ff01'
                        }
                    ]
                }
            ]
        }
    ]
}
console.log(school)