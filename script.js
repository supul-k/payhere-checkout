function paymentGateway() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText);

            var obj = JSON.parse(xhttp.responseText);

            payhere.onCompleted = function onCompleted(orderId) {
                console.log("Payment completed. OrderID:" + orderId);
                // Note: validate the payment and show success or failure page to the customer
            };
        
            // Payment window closed
            payhere.onDismissed = function onDismissed() {
                // Note: Prompt user to pay again or show an error page
                console.log("Payment dismissed");
            };
        
            // Error occurred
            payhere.onError = function onError(error) {
                // Note: show an error page
                console.log("Error:"  + error);
            };

            // Put the payment variables here
            var payment = {
                "sandbox": true,
                "merchant_id": obj["merchant_id"],    // Replace your Merchant ID
                "return_url": "http://localhost:3000/index.php",     // Important
                "cancel_url": "http://localhost:3000/index.php",     // Important
                "notify_url": "http://sample.com/notify",
                "order_id": "ItemNo12345",
                "items": "Door bell wireles",
                "amount": "1000.00",
                "currency": "LKR",
                "hash": obj["hash"], // *Replace with generated hash retrieved from backend
                "first_name": "Saman",
                "last_name": "Perera",
                "email": "samanp@gmail.com",
                "phone": "0771234567",
                "address": "No.1, Galle Road",
                "city": "Colombo",
                "country": "Sri Lanka",
                "delivery_address": "No. 46, Galle road, Kalutara South",
                "delivery_city": "Kalutara",
                "delivery_country": "Sri Lanka",
                "custom_1": "",
                "custom_2": ""
            };
            
            payhere.startPayment(payment);
        }
    };    

    xhttp.open("GET", "payhereProcess.php", true);
    xhttp.send();
}