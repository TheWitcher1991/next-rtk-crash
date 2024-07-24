"use client";

import Link from "next/link";

export default function CheckoutPage() {
    return (
        <>
            <h1 className='text-2xl'>Thanks for order!</h1>
            <Link href='/'>
                <a className='text-green-700'>Back to catalog</a>
            </Link>
        </>
    );
}
