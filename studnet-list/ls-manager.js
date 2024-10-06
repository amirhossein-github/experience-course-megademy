const DB_name = 'student'

/**
 * This function checks the localStorage to create it if it not exists
 */
function check(){
    // 1) Get content of ls
    const ls = localStorage.getItem(DB_name)

    // 2) If null create new
    if (!ls){
        localStorage.setItem(DB_name, "[]")
        console.log(`[INFO][create][local-storage]: ${DB_name}`)

    }
}

/**
 * This function adds data to the localStorage
 * @param {*} data The data to be added to the localStorage
 * @returns
 */
export function add(data){
    // 0) Check the localStorage
    check()

    // 1) Get content of ls, and pars it to json
    let lsData = JSON.parse(localStorage.getItem(DB_name))

    //! -) Remove Local - Storage
    if (
        data.name === 'delete' &&
        data.number === 'all' &&
        data.score === 'data' 
    ){ 
        remove()
        return
    };

    // 2) Data validation
    if (validation(data)){
        lsData.push(data)

    } else {
        console.error('[ERROR][validation data]: bad data\n' + data)
        return
    }

    // 3) Stringify data, and send data to localStorage
    localStorage.setItem(DB_name, JSON.stringify(lsData))
}

/**
 * This function returns the data from the localStorage for us
 * @returns localStorage data
 */
export function get(){
    // 0) Check the localStorage
    check()

    // 1) Get content of ls, and pars it to json
    let lsData = JSON.parse(localStorage.getItem(DB_name))

    // 2) Return data
    return lsData
}

function validation(){
    return true
    
}

/**
 * This function remove local-storage
 */
function remove(){
    localStorage.clear('student')
    console.log(`[INFO][remove][local-storage]: ${DB_name}`)

}