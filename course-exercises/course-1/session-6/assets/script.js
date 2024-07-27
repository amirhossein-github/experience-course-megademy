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
            name: 'ClassA',
            students: [
                {
                    name: 'Behdakht',
                    family: 'Tawakkel',
                    phone: '02603460732',
                    address: 'Golestan, Ebadi Street, Shidasab Building',
                    GAD: 19.5
                },
                {
                    name: 'Khorhad',
                    family: 'Jannati',
                    phone: '02651148054',
                    address: 'East Azarbaijan Province, Frouten Street, Polad Building',
                    GAD: 15
                },
                {
                    name: 'Hafez',
                    family: 'Payor',
                    phone: '02625927307',
                    address: 'Mazandaran Province, Muhaddi Street, Saba Building',
                    GAD: 10
                }
            ]
        },
        {
            name: 'ClassB',
            students: [
                {
                    name: 'Leith',
                    family: 'Taleghani',
                    phone: '02661718418',
                    address: 'Khuzestan Province, Qanei Street, Ayaz Building',
                    GAD: 20
                },
                {
                    name: 'Sika',
                    family: 'Ebtekari',
                    phone: '02652931417',
                    address: 'Isfahan, Aali Street, Niro building',
                    GAD: 13
                },
                {
                    name: 'Tahamtan',
                    family: 'Shirazi',
                    phone: '02607881184',
                    address: 'Fars Province, Ashtari Street, Artadekht Building',
                    GAD: 18.75
                }
            ]
        }
    ]
}
console.log(school)