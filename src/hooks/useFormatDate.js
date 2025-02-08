
const useFormatDate = (timestamp) => {

    const dateTime = new Date(timestamp);

    const days = [
        ['Monday', 'Mon'],
        ['Tuesday', 'Tue'],
        ['Wednesday', 'Wed'],
        ['Thursday', 'Thu'],
        ['Friday', 'Fri'],
        ['Saturday', 'Sat'],
        ['Sunday', 'Sun']
    ];

    const months = [
        ['January', 'Jan'],
        ['February', 'Feb'],
        ['March', 'Mar'],
        ['April', 'Apr'],
        ['June', 'Jun'],
        ['July', 'Jul'],
        ['August', 'Aug'],
        ['September', 'Sep'],
        ['October', 'Oct'],
        ['November', 'Nov'],
        ['December']
    ]

    return {
        date: dateTime.getDate(),
        weekday: days[dateTime.getDay()][0],
        month: months[dateTime.getMonth()][1],
        year: dateTime.getFullYear()
    }

}

export default useFormatDate;