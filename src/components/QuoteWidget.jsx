import { useEffect, useState } from 'react';
import { API_BASE_URL } from "../config";

function QuoteWidget() {
    const [quote, setQuote] = useState('Loading your daily quote...');
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const res = await fetch(
                    `${API_BASE_URL}/api/quotes/random`
                );
                if (!res.ok) throw new Error('Failed to fetch quote');
                const data = await res.json();
                setQuote(data.quote);
            } catch (err) {
                 console.error("Quote fetch failed:", err);
                 setError("In the middle of every difficulty lies opportunity. - Albert Einstein");
            }
        };
        
        fetchQuote();
    }, []);

    if (error) return <h4>{error}</h4>;
    return <h4>{quote}</h4>;
}
 
export default QuoteWidget;