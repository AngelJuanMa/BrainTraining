import React, { Component } from "react";

class Ingles extends Component {
    state = {
        words: 0,
        wordsToLeard: []
    }

    componentWillMount(e) {
        var words = localStorage.getItem('words')
        this.setState({
            words: words
        })
        this.showWord()
        this.lastTime();
    }

    lastTime = (e) => {
        var date = new Date()
        var horaB = date.getHours()
        var horaA = date.getDate()
        var lastDate = {
            horaA,
            horaB
        }
        if (!localStorage.getItem('lastDay')) localStorage.setItem('lastDay', Object.values(lastDate))
    }

    showWord = (e) => {
        var dias = localStorage.getItem('lastDay');
        var allWords = ["Hello", "Bye", "Hi", "Tomorrow", "Land"];
        this.setState({
            wordsToLeard: allWords
        })

    }

    setWords(e) {
        localStorage.setItem('words', e)
        this.setState({
            words: e
        })
    }

    render() {

        return (
            <div>
                <h1>Ingles</h1>
                {this.state.words}
                {!this.state.words &&
                    <div>
                        <button onClick={this.setWords.bind(this, 5)}>Normal 5</button>
                        <button onClick={this.setWords.bind(this, 10)}>Avanzado 10</button>
                        <button onClick={this.setWords.bind(this, 15)}>Experto 15</button>
                    </div>
                }
                <ol>
                    {
                        this.state.wordsToLeard.map((words, i) => {

                            return (
                                <li key={i}>
                                    {words}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        );
    }
}

export default Ingles;