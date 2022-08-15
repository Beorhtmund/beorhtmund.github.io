import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CssBaseline from '@mui/material/CssBaseline'
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardActions, Typography } from "@mui/material";
import React from "react";
import './QuoteCard.css';

async function loadQuotes() {
    const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const data = await response.json();

    const random = data['quotes'][Math.floor(Math.random() * data['quotes'].length)];
    return random;
}

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteContent: "",
            authorName: "",
        };
    }

    setData() {
        loadQuotes().then((data) => {
            this.setState({
                quoteContent: data.quote,
                authorName: data.author,
            });
        });
    }

    setColor() {
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'];
    
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('new-quote').style.backgroundColor = randomColor;
        document.getElementById('tweet-quote').style.color = randomColor;
        document.body.style.backgroundColor = randomColor;
    };

    componentDidMount() {
        this.setData();
        this.setColor();
    }

    onClickHandler = (state = this.state) => {
        this.setData();
        this.setColor();
    }

    render() {
        return (
            <>
                <CssBaseline />
                <Card id="quote-box">
                    <CardContent id="text"><Typography variant="h5">"{this.state.quoteContent}"</Typography></CardContent>
                    <CardActions id="author"><Typography variant="subtitle1">- {this.state.authorName}</Typography></CardActions>
                    <a href="https://www.twitter.com/intent/tweet" target="_blank"><TwitterIcon id="tweet-quote" fontSize="large" /></a>
                    <Button onClick={() => this.onClickHandler()} id="new-quote" variant="contained" endIcon={<ArrowForwardIcon />}>Next Quote</Button>
                </Card>
            </>
        );
    }
}

export default QuoteCard;