import React from "react";
// import { img1, img2 } from "./assets";


const Payment = () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 items-center justify-center bg-gray-100 px-4 py-12 sm:grid-cols-2 sm:gap-8 md:px-6 lg:px-8">
      <div className="order-2 space-y-6 sm:order-1">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete your purchase
          </h1>
          <p className="text-base text-gray-500">
            Enter your payment and delivery details to finalize your order.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="recipient-name"
              >
                Recipient Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="recipient-name"
                placeholder="Mr. xyz"
                required=""
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="recipient-phone"
              >
                Recipient Phone
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="recipient-phone"
                placeholder="+91 9876543210"
                required=""
                type="tel"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="card-number"
              >
                Card number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                required=""
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="cardholder-name"
              >
                Cardholder name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="cardholder-name"
                placeholder="Mr. xyz"
                required=""
                type="text"
              />
            </div>
          </div>




          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="expiration-date"
              >
                Expiration date
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r1i9:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 items-center justify-between rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-24"
                >
                  <select
                    id="expiration-month"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </button>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r1ia:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 items-center justify-between rounded-md  border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-24"
                >
                  <select
                    id="expiration-year"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {Array.from({ length: 10 }, (_, index) => (
                      <option key={index + 2023} value={index + 2023}>
                        {index + 2023}
                      </option>
                    ))}
                  </select>
                </button>
              </div>
            </div>




            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="cvv"
              >
                CVV
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="cvv"
                placeholder="123"
                required=""
                type="text"
              />
            </div>





            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="payment-method"
              >
                Payment method
              </label>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r1ib:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-10 items-center justify-between rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              >
                <select
                  id="payment-method"
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="credit-card">Credit card</option>
                  <option value="debit-card">Debit card</option>
                  <option value="upi">UPI</option>
                </select>
              </button>
            </div>
          </div>



          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="promo-code"
            >
              Promo code
            </label>
            <div className="flex items-center gap-2">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="promo-code"
                placeholder="Enter promo code"
                type="text"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                Apply
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="address-line1"
            >
              Address Line 1
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="address-line1"
              placeholder="Ahmamau, Lucknow"
              required=""
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="address-line2"
            >
              Address Line 2
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="address-line2"
              placeholder="Flat 202A"
              type="text"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="city"
              >
                City
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="city"
                placeholder="Lucknow"
                required=""
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="state"
              >
                State
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="state"
                placeholder="UP"
                required=""
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="zip"
              >
                Pincode
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="zip"
                placeholder="200625"
                required=""
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-base font-medium text-gray-900">
              Accepted payment methods:
            </p>
            <div className="flex items-center gap-4">
              <img
                src="./americanexpress.png"
                alt="QR Code"
                width="32"
                height="20"
                className="h-5 w-auto"
                style={{ aspectRatio: "32 / 20", objectFit: "cover" }}
              />
              <img
                src="./discover.png"
                alt="QR Code"
                width="32"
                height="20"
                className="h-5 w-auto"
                style={{ aspectRatio: "32 / 20", objectFit: "cover" }}
              />
              <img
                src="./mastercard.png"
                alt="Visa"
                width="32"
                height="20"
                className="h-5 w-auto"
                style={{ aspectRatio: "32 / 20", objectFit: "cover" }}
              />
              <img
                src="./netbanking.png"
                alt="Mastercard"
                width="32"
                height="20"
                className="h-5 w-auto"
                style={{ aspectRatio: "32 / 20", objectFit: "cover" }}
              />
              <img
                src="./rupay.png"
                alt="American Express"
                width="32"
                height="20"
                className="h-5 w-auto"
                style={{ aspectRatio: "32 / 20", objectFit: "cover" }}
              />
              <img
                src="./visa.png"
                alt="Discover"
                width="32"
                height="20"
                className="h-5 w-auto"
                style={{ aspectRatio: "32 / 20", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Complete purchase
          </button>
        </div>
      </div>
      <div className="order-1 space-y-6 sm:order-2">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Order summary</h2>
              <a className="text-blue-600 hover:underline" href="#">
                Edit cart
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-gray-900">Subtotal</p>
                <p className="text-base font-medium text-gray-900">Rs.2300.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-gray-900">Shipping</p>
                <p className="text-base font-medium text-gray-900">Rs.40.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-gray-900">Tax</p>
                <p className="text-base font-medium text-gray-900">Rs117.92</p>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full"
            ></div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-gray-900">Total</p>
              <p className="text-xl font-bold text-gray-900">Rs2457.92</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src="./image.png"
              alt="QR Code"
              width="200"
              height="200"
              className="w-full max-w-[200px] h-auto"
              style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-base font-medium text-gray-900">
              OR Scan the QR code to pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;






{/* <div className="grid grid-cols-3 gap-4">
  <div className="space-y-2">
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="expiration-date"
    >
      Expiration date
    </label>
    <div className="flex items-center gap-2">
      <select
        id="expiration-month"
        className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        {Array.from({ length: 12 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <select
        id="expiration-year"
        className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index + 2023} value={index + 2023}>
            {index + 2023}
          </option>
        ))}
      </select>
    </div>
  </div>
</div> */}


{/* <div className="space-y-2">
  <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    htmlFor="payment-method"
  >
    Payment method
  </label>
  <select
    id="payment-method"
    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  >
    <option value="credit-card">Credit card</option>
    <option value="debit-card">Debit card</option>
    <option value="upi">UPI</option>
  </select>
</div> */}




// <div className="space-y-2">
// <label
//   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//   htmlFor="payment-method"
// >
//   Payment method
// </label>
// <div className="relative">
//   <select
//     id="payment-method"
//     className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//   >
//     <option value="credit-card">Credit card</option>
//     <option value="debit-card">Debit card</option>
//     <option value="upi">UPI</option>
//   </select>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-500"
//     aria-hidden="true"
//   >
//     <path d="m6 9 6 6 6-6"></path>
//   </svg>
// </div>
// </div>
