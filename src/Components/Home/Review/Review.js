import React, { useEffect, useState } from 'react';
import OneReview from './OneReview/OneReview';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://fierce-wildwood-43514.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-20">
            {
                reviews.map(review => <OneReview
                    key={review._id}
                    review={review}
                ></OneReview>)
            }

        </div>
    );
};

export default Review;