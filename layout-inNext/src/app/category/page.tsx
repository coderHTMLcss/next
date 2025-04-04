import React from 'react'

const CategoryPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Category Page</h1>
            <p>This is the category page where you can find various categories.</p>
            <ul className="list-disc pl-5">
                <li>Technology</li>
                <li>Design</li>
                <li>Business</li>
            </ul>
        </div>
    );
};

export default CategoryPage;
