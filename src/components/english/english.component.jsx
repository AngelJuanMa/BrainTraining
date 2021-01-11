import React, { Component } from "react";
import "./english.style.sass";
import Words from "./words.jsx";

class English extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);


    }
    state = {
        wordsToLearn: [],
        wordsInSpanish: [],
        none: false,
        days: 0,
        words: 0,
        totalWords: 0,
        times: 0,
        cantOfWords: "Day"
    }
    componentWillMount(e) {
        let words = localStorage.getItem('words')
        let days = localStorage.getItem('Days');
        this.setState({
            words: words,
            days: days,
        })
        this.showWord()
        this.lastTime(words, days);
    }

    lastTime = (words, days) => {
        if (this.state.times !== 0) return ''
        this.setState({
            times: 1
        })
        let date = new Date()
        let conexion = {
            hour: date.getHours(),
            day: date.getDay(),
            mouth: date.getMonth(),
            year: date.getYear()
        }
        if (!localStorage.getItem('lastRegister')) {
            conexion.day = conexion.day + 1
            return localStorage.setItem('lastRegister', JSON.stringify(conexion))
        }
        let lastRegister = localStorage.getItem('lastRegister');
        lastRegister = JSON.parse(lastRegister);
        let pDays = parseInt(days)
        let totalWords = pDays * words;
        if (conexion.year > lastRegister.year ||
            conexion.mouth > lastRegister.mouth ||
            conexion.day > lastRegister.day + 1 ||
            (conexion.day >= lastRegister.day &&
                conexion.hour >= lastRegister.hour)) {
            totalWords = (pDays + 1) * words
            conexion.day = conexion.day + 1
            localStorage.setItem('lastRegister', JSON.stringify(conexion))
            localStorage.setItem('Days', pDays + 1)
            this.setState({
                days: pDays + 1,
                totalWords: totalWords
            });
        } else {
            this.setState({
                totalWords: totalWords
            });
        }
    }


    showWord = (e) => {
        let words = new Words;
        this.setState({
            wordsToLearn: words.getWordsInEnglish(),
            wordsInSpanish: words.getWordsInSpanish()
        })

    }

    setWords(e) {
        localStorage.setItem('words', e)
        localStorage.setItem('Days', 1)
        this.setState({
            days: 1,
            words: e,
            totalWords: e
        })
    }

    handleChange(event) {
        this.setState({ cantOfWords: event.target.value });
    }


    render() {

        return (
            <div id="ingles">
                <h1>Ingles / English</h1>
                <span id="span1"><span id="span2"></span></span>

                {!this.state.words &&
                    <div id="choose">
                        <p>Elige la cantidad de letras que quieres aprender por día, estas serán visualizadas en forma de tabla con su traducción y pronunciación.</p>
                        <button onClick={this.setWords.bind(this, 5)}>Fácil 5</button>
                        <button onClick={this.setWords.bind(this, 10)}>Normal 10</button>
                        <button onClick={this.setWords.bind(this, 15)}>Difícil 15</button>
                    </div>
                }
                {this.state.words &&
                    <div>
                        <div id="select">
                            <select value={this.state.cantOfWords} onChange={this.handleChange} name="select">
                                <option value="Day" selected>Day</option>
                                <option value="Week">Week</option>
                                <option value="All">All</option>
                            </select>
                        </div>

                        <table role="table">
                            <thead>
                                <tr role="row">
                                    <th role="columnheader">
                                        Número
                                </th>
                                    <th role="columnheader">
                                        Palabra en Inglés
                                </th>
                                    <th role="columnheader">
                                        Traducción
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cantOfWords === "Day" ?
                                    this.state.wordsToLearn.map((words, i) => {
                                        if (i >= (this.state.days - 1) * this.state.words && i < this.state.totalWords) {
                                            return (
                                                <tr role="row">
                                                    <td role="cell">{i + 1}</td>
                                                    <td role="cell" key={i}>{words}</td>
                                                    <td role="cell">{this.state.wordsInSpanish[i]}</td>
                                                </tr>
                                            );
                                        } else return null;
                                    })
                                    : this.state.cantOfWords === "All" ?
                                        this.state.wordsToLearn.map((words, i) => {
                                            if (i < this.state.totalWords) {
                                                return (
                                                    <tr role="row">
                                                        <td role="cell">{i + 1}</td>
                                                        <td role="cell" key={i}>{words}</td>
                                                        <td role="cell">{this.state.wordsInSpanish[i]}</td>
                                                    </tr>
                                                );
                                            } else return null;
                                        })
                                        :
                                        this.state.wordsToLearn.map((words, i) => {
                                            if (i >= (this.state.days - 7) * this.state.words && i < this.state.totalWords) {
                                                return (
                                                    <tr role="row">
                                                        <td role="cell">{i + 1}</td>
                                                        <td role="cell" key={i}>{words}</td>
                                                        <td role="cell">{this.state.wordsInSpanish[i]}</td>
                                                    </tr>
                                                );
                                            } else return null;
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

export default English;