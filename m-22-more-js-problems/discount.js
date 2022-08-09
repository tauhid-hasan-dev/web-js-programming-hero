/*
1. if the ticket numbers is less than 100, per ticket price : 100;
2. if the ticket numbers is more than 100, but less than 200 then first 100 tickets will be 100 taka and second 100 tickects wil be 90 taka per piece.
3. if you buy more than 200 tickets 
   first 100 tickets = 100 taka
   101-200 tickets = 90taka 
   200+ = 70 taka
*/

function ticketPrice(ticketQuantity) {
    const firstHundredTicket = 100;
    const secondHundredTicket = 90;
    const restOfTickets = 70;
    if (ticketQuantity <= 100) {
        const total100 = firstHundredTicket * ticketQuantity;
        return total100;
    } else if (ticketQuantity <= 200) {
        const fisr100Price = firstHundredTicket * 100;
        const second100price = secondHundredTicket * (ticketQuantity - 100);
        const total200 = fisr100Price + second100price;
        return total200;
    } else if (ticketQuantity > 200) {
        const fisr100Price1 = firstHundredTicket * 100;
        const second100price1 = secondHundredTicket * 100;
        const restOf200Plus = restOfTickets * (ticketQuantity - 200);
        const total200Plus = fisr100Price1 + second100price1 + restOf200Plus;
        return total200Plus;
    }
}

const totalPrice = ticketPrice(210);
console.log('Total Price:', totalPrice);