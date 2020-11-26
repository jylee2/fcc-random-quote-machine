//18 quotes
const quotes = 
[
    {
        quote: "Life is about making an impact, not making an income.",
        author: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        author: "Robert Frost"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale"
    },
    {
        quote: "You miss 100 percent of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart"
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        author: "Babe Ruth"
    },
    {
        quote: "Definiteness of purpose is the starting point of all achievement.",
        author: "W. Clement Stone"
    },
    {
        quote: "Life is what happens to you while you’re busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "We become what we think about.",
        author: "Earl Nightingale"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        author: "Mark Twain"
    },
    {
        quote: "Life is 10 percent what happens to me and 90 percent of how I react to it.",
        author: "Charles Swindoll"
    },
    {
        quote: "The most common way people give up their power is by thinking they don’t have any.",
        author: "Alice Walker"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        quote: "An unexamined life is not worth living.",
        author: "Socrates"
    }
];
// React Component
class MyReactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
            };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //When button is clicked, generate new random decimal
    handleSubmit() {
        this.setState({
            count: Math.random()
        });
    }
    render() {
        
        //Create whole number between 0 and quotes.length
        let index = Math.floor(this.state.count * quotes.length);
        let quoteDisplay = quotes[index]["quote"];
        let authorDisplay = quotes[index]["author"];
        //Converting white spaces to "%20" for url
        let quoteTweetLink = quoteDisplay.replace(/\s/g, "%20");
        let authorTweetLink = authorDisplay.replace(/\s/g, "%20");
        //Tweet URL
        let newTweetLink = `https://twitter.com/intent/tweet?screen_name=jyleeblog&text=`;
        newTweetLink += `%22` + quoteTweetLink + `%22`;
        newTweetLink += "%20-%20" + authorTweetLink;

        return (
            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6 text-center">
                    <div class="customClassMain">
                        <div>
                            <h1><b>Random Quote Machine</b></h1><br />
                        </div>
                        <div>
                            <wrapper id="quote-box">
                                <div id="text" class="customClassP">
                                    "{quoteDisplay}"
                                </div>
                                <div id="author" class="customClassP">
                                    - {authorDisplay}
                                </div><br />
                                <a target="_blank" href={newTweetLink} id="tweet-quote">
                                    <button type="button" class="btn btn-lg btn-block">
                                        <span class="fa-stack">
                                            <i class="fa fa-circle-thin fa-stack-2x"></i>
                                            <i class="fa fa-twitter fa-stack-1x"></i>
                                        </span>
                                         Tweet
                                    </button>
                                </a>
                                <br/>
                                <button type="button" class="btn btn-lg btn-block" id="new-quote" onClick={this.handleSubmit}>New Quote</button>
                                <br/>
                                <p>Quotes are sourced from <a target="_blank" href="https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/?sh=3c7a89506c7a">Forbes</a></p>
                            </wrapper>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                </div>
            </div>                        
        );
    }
}
ReactDOM.render(<MyReactComponent />, document.getElementById('react-container'))