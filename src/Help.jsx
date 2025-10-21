import { useState } from 'react';

import Navbar from './Navbar';

const Help = () => {

    const faqs = [
        {
            id: 1,
            question: 'How do I place an order?',
            answer:
                'Browse products, add them to your cart, and proceed to checkout. Enter your shipping details and payment method to confirm.',
        },
        {
            id: 2,
            question: 'What payment methods are accepted?',
            answer:
                'We accept credit/debit cards, JazzCash, EasyPaisa, and cash on delivery (if available in your area).',
        },
        {
            id: 3,
            question: 'Shipping & Delivery',
            answer:
                'Standard delivery: 3–7 business days. Express delivery: 1–3 business days. (Exact times vary by location.)',
        },
        {
            id: 4,
            question: 'Returns & Refunds',
            answer:
                'You can return items within 14 days of delivery if they are unused and in original packaging.',
        },
    ];

    const [show, setShow] = useState(null);


    return (
        <div>
            <div className="text-[80px] mt-[90px] text-center font-sans">Help</div>
            <div className=" mt-20 w-[80%] justify-self-center">

                {faqs.map((faqs) =>
                (
                    <div
                        key={faqs.id}
                        className="w-[80&] mx-0 my-5 block " >
                        <div className="font-sans h-auto w-auto my-5 font-bold block pl-3 hover:cursor-pointer"
                            onClick={() => setShow(show === faqs.id ? null : faqs.id)}>
                            {faqs.question}
                            {show === faqs.id && (
                                <div className=" font-normal lg:w-[50%] w-[100%] max-h-500 pt-2 pl-2">
                                    {faqs.answer}
                                </div>
                            )}
                        </div>
                        <hr />
                    </div>
                ))}                
            </div>
        </div>
    );
};

export default Help;