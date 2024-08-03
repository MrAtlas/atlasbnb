export default function parseDateTime(dateTimeString) {
    // Create a Date object from the dateTimeString
    const date = new Date(dateTimeString);

    // Extract the date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    // Extract the time components
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the date and time strings
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return {
        date: formattedDate,
        time: formattedTime
    };
}

/*
// Example usage
const dateTimeString = "2024-06-25 18:45:00+00";
const { date, time } = parseDateTime(dateTimeString);
 
console.log(`Date: ${date}`); // Output: Date: 2024-06-25
console.log(`Time: ${time}`); // Output: Time: 18:45:00
*/