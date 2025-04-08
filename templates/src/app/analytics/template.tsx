"use client";

import Link from "next/link";
import { useState } from "react";

const AnalyticTemplate = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <label className="text-2xl font-semibold">Name:
                <input
                    className="border-2 border-teal-600 rounded-md p-2 ml-2"
                    type="text"
                    value={name}
                    placeholder="enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <Link
                className="inline-block mt-6 px-4 py-2 rounded-2xl bg-teal-600"
                href='/analytics/revenue'>
                Revenue
            </Link>
            <br />
            <Link
                className="inline-block mt-6 px-4 py-2 rounded-2xl bg-teal-600"
                href='/analytics/stats'>
                Stats
            </Link>
        </div>
    );
};

export default AnalyticTemplate;
