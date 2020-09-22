import React from 'react';
import DisplayMovie from './DisplayMovie';
import amadeus from './img/amadeus.jpg';
import findingNemo from './img/finding_nemo.jpg';
import theGodfather from './img/the_godfather.jpg';
import forrestGump from './img/forrest_gump.jpg';
import theDarkKnight from './img/the_dark_knight.jpg';

class SelectMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            img: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });

        if (event.target.value === 'The Godfather') {
            this.setState({
                img: theGodfather,
            });
        } else if (event.target.value === 'Finding Nemo') {
            this.setState({
                img: findingNemo,
            });
        } else if (event.target.value === 'The Dark Knight') {
            this.setState({
                img: theDarkKnight,
            });
        } else if (event.target.value === 'Amadeus') {
            this.setState({
                img: amadeus,
            });
        } else if (event.target.value === 'Forrest Gump') {
            this.setState({
                img: forrestGump,
            });
        }
    }

    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="" disabled>
                        Select a movie
                    </option>
                    <option value="Finding Nemo">Finding Nemo</option>
                    <option value="Forrest Gump">Forrest Gump</option>
                    <option value="The Godfather">The Godfather</option>
                    <option value="The Dark Knight">The Dark Knight</option>
                    <option value="Amadeus">Amadeus</option>
                </select>
                <DisplayMovie name={this.state.value} img={this.state.img} />
            </div>
        );
    }
}

export default SelectMovie;
