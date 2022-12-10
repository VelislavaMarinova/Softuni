function cinemaTickets(input) {
    let index = 0
    let command = input[index];

    let numTickets = 0
    let name = "";

    let typeTicet = "";
    let standartCounter = 0
    let studentCounter = 0
    let kidCounter = 0
    let ticketcounter = 0
    let sumTicketsSSK = 0
    while (command !== "Finish") {
        name = command;
        index++;
        numTickets = Number(input[index])




        for (let i = 1; i <= numTickets; i++) {
            index++;
            typeTicet = input[index]
            switch (typeTicet) {
                case "standard": standartCounter++; ticketcounter++; break;
                case "student": studentCounter++; ticketcounter++; break;
                case "kid": kidCounter++; ticketcounter++; break;
            }
            if (typeTicet === "End") {
                break;
            }


        }
        console.log(`${name} - ${((ticketcounter / numTickets) * 100).toFixed(2)}% full.`);
        index++;
        command = input[index];
        ticketcounter = 0
        
    }
    sumTicketsSSK = standartCounter+studentCounter+kidCounter
    if (command === "Finish") {
        console.log(`Total tickets: ${sumTicketsSSK}`);
        console.log(`${(studentCounter / sumTicketsSSK * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standartCounter / sumTicketsSSK*100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidCounter / sumTicketsSSK*100.).toFixed(2)}% kids tickets.`);
    }

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
