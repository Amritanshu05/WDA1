/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3A2OgT1VLic
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Component() {
    return (
        <div className="grid min-h-screen w-full grid-cols-1 items-center justify-center bg-gray-100 px-4 py-12 sm:grid-cols-2 sm:gap-8 md:px-6 lg:px-8">
            <div className="order-2 space-y-6 sm:order-1">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Complete your purchase</h1>
                    <p className="text-base text-gray-500">Enter your payment and delivery details to finalize your order.</p>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="recipient-name">Recipient Name</Label>
                            <Input id="recipient-name" placeholder="John Doe" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="recipient-phone">Recipient Phone</Label>
                            <Input id="recipient-phone" placeholder="+1 (123) 456-7890" required type="tel" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="card-number">Card number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cardholder-name">Cardholder name</Label>
                            <Input id="cardholder-name" placeholder="John Doe" required type="text" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="expiration-date">Expiration date</Label>
                            <div className="flex items-center gap-2">
                                <Select defaultValue="01" id="expiration-month">
                                    <SelectTrigger className="w-24">
                                        <SelectValue placeholder="MM" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="01">01</SelectItem>
                                        <SelectItem value="02">02</SelectItem>
                                        <SelectItem value="03">03</SelectItem>
                                        <SelectItem value="04">04</SelectItem>
                                        <SelectItem value="05">05</SelectItem>
                                        <SelectItem value="06">06</SelectItem>
                                        <SelectItem value="07">07</SelectItem>
                                        <SelectItem value="08">08</SelectItem>
                                        <SelectItem value="09">09</SelectItem>
                                        <SelectItem value="10">10</SelectItem>
                                        <SelectItem value="11">11</SelectItem>
                                        <SelectItem value="12">12</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="2023" id="expiration-year">
                                    <SelectTrigger className="w-24">
                                        <SelectValue placeholder="YYYY" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="2023">2023</SelectItem>
                                        <SelectItem value="2024">2024</SelectItem>
                                        <SelectItem value="2025">2025</SelectItem>
                                        <SelectItem value="2026">2026</SelectItem>
                                        <SelectItem value="2027">2027</SelectItem>
                                        <SelectItem value="2028">2028</SelectItem>
                                        <SelectItem value="2029">2029</SelectItem>
                                        <SelectItem value="2030">2030</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="payment-method">Payment method</Label>
                            <Select defaultValue="credit-card" id="payment-method">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select payment method" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="credit-card">Credit card</SelectItem>
                                    <SelectItem value="debit-card">Debit card</SelectItem>
                                    <SelectItem value="upi">UPI</SelectItem>
                                    <SelectItem value="qr-code">Scan QR Code</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="promo-code">Promo code</Label>
                        <div className="flex items-center gap-2">
                            <Input id="promo-code" placeholder="Enter promo code" type="text" />
                            <Button size="sm" variant="outline">
                                Apply
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address-line1">Address Line 1</Label>
                        <Input id="address-line1" placeholder="123 Main St" required type="text" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address-line2">Address Line 2</Label>
                        <Input id="address-line2" placeholder="Apt 456" type="text" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="New York" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" placeholder="NY" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="zip">Zip</Label>
                            <Input id="zip" placeholder="10001" required type="text" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-base font-medium text-gray-900">Accepted payment methods:</p>
                        <div className="flex items-center gap-4">
                            <img
                                alt="Visa"
                                className="h-5 w-auto"
                                height={20}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/20",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <img
                                alt="Mastercard"
                                className="h-5 w-auto"
                                height={20}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/20",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <img
                                alt="American Express"
                                className="h-5 w-auto"
                                height={20}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/20",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <img
                                alt="Discover"
                                className="h-5 w-auto"
                                height={20}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/20",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <img
                                alt="Diners Club"
                                className="h-5 w-auto"
                                height={20}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/20",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <img
                                alt="JCB"
                                className="h-5 w-auto"
                                height={20}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/20",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                            <img
                                alt="QR Code"
                                className="h-5 w-auto"
                                height={20}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/20",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                        </div>
                    </div>
                    <Button className="w-full" type="submit">
                        Complete purchase
                    </Button>
                </div>
            </div>
            <div className="order-1 space-y-6 sm:order-2">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Order summary</h2>
                            <Link className="text-blue-600 hover:underline" href="#">
                                Edit cart
                            </Link>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-gray-900">Subtotal</p>
                                <p className="text-base font-medium text-gray-900">$99.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-gray-900">Shipping</p>
                                <p className="text-base font-medium text-gray-900">$5.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-gray-900">Tax</p>
                                <p className="text-base font-medium text-gray-900">$8.92</p>
                            </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold text-gray-900">Total</p>
                            <p className="text-xl font-bold text-gray-900">$112.92</p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <img
                            alt="QR Code"
                            className="w-full max-w-[200px] h-auto"
                            height={200}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width={200}
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-base font-medium text-gray-900">Scan the QR code to pay</p>
                    </div>
                </div>
            </div>
        </div>
    )
}