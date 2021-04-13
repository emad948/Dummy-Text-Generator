import React, { useState } from 'react';
import data from './data';
import Button from '@material-ui/core/Button';
import './index.css';
function App() {

    const [input, setInput]=useState(0);
    const [value, setValue]=useState([]);





    const handleSubmit=(e) => {
        e.preventDefault();
        let count=parseInt(input)
        if (count<0) {
            count=0;
        }
        if (count>8) {
            count=8;
        }
        setValue(data.slice(0, count));
        //End is not included;)

    }
    return (
        <>
            <section className="section-center">
                <h3>TIRED OF BORING LOREM IPSUM?</h3>
                <form className="lorem-form" onSubmit={handleSubmit}>
                    <label htmlFor="par">Paragraphs:</label>
                    <input type="number" id='par' name="par" value={input} onChange={(e) => setInput(e.target.value)}></input>
                    <Button type="submit" variant="contained" color="primary" >GENERATE  </Button>

                </form>

            </section>
            <article className="lorem-text">
                {value.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </article>
        </>
    )
}

export default App;
