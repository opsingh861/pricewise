"use client"

import { scrapeAndStoreProduct } from '@/lib/actions';
import { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if (
            hostname.includes('amazon.com') ||
            hostname.includes('amazon.') ||
            hostname.endsWith('amazon')
        ) {
            return true;
        }
    } catch (error) {
        return false;
    }

    return false;
}


const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt);

        if (!isValidLink) return alert('Please provide a valid Amazon link')
        alert('Valid link')
        try {
            setIsLoading(true);

            // Scrape the product page
            const res = await scrapeAndStoreProduct(searchPrompt);
            
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <form action="" className="flex flex-wrap gap-4 mt-12"
            onSubmit={handleSubmit}>
            <input
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                type="text"
                placeholder="Enter product link"
                className="searchbar-input"
            />

            <button className="searchbar-btn" disabled={searchPrompt === ''} >
                {isLoading ? (
                    <div className="loader">Searching...</div>
                ) : (
                    <span>Search</span>
                )}
            </button>
        </form>
    )
}

export default Searchbar