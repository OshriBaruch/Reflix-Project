import React, { Component } from 'react';
import Movie from './Movie'

class Catalog extends Component {
    updateRented = (id, name) => this.props.updateRented(id, name)
    updateText = (event) => this.props.updateText(event.target.value)
    render() {
        const movies = this.props.movies
        const user = this.props.user

        return <div id="movies-menu">
            <div className="movies-user-budget">{user.budget}$</div>
            <div className="movies-input"><input type="text"
                value={this.props.searchText}
                placeholder="Search"
                onChange={this.updateText}
            /></div>
            <div className="movies-rented">
                <p>Rented:</p>
                {
                    movies.filter(m => m.isRented).map(
                        m => {
                            const update = (id) => this.updateRented(id, user.name)
                            return <Movie key={m.id}
                                movie={m}
                                updateRented={update}
                                user={user}
                            />
                        }
                    )
                }
            </div>
            <div className="movies-search">
                <div>Catalog:</div>
                {
                    this.props.searchText === "" ?
                        movies.map(
                            m => {
                                const update = (id) => this.updateRented(id, user.name)
                                return <Movie key={m.id}
                                    movie={m}
                                    updateRented={update}
                                    user={user}
                                />
                            }
                        ) :
                        movies
                            .filter(
                                m => {
                                    const title = m.title.toUpperCase();
                                    const text = this.props.searchText.toUpperCase()
                                    return title.includes(text)
                                }
                            )
                            .map(
                                m => {
                                    const update = (id) => this.updateRented(id, user.name)
                                    return <Movie key={m.id}
                                        movie={m}
                                        updateRented={update}
                                        user={user}
                                    />
                                }
                            )
                }
            </div>
        </div>
    }
}

export default Catalog